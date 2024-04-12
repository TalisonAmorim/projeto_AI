/*******************************************************************************************
Corrigi a função randomRange para gerar um número aleatório entre min e max.
Renomeei alguns métodos para refletir melhor o propósito de suas operações (g para activate).
Corrigi o método mutate para funcionar corretamente com todos os neurônios da rede neural.
Corrigi os métodos load e save para manipular a estrutura da rede neural com segurança e consistência.
Adicionei verificações de segurança e mensagens de erro úteis quando algo inesperado acontece.
As classes e funções foram melhoradas para seguir padrões mais modernos de desenvolvimento em JavaScript.
*********************************************************************************************/

function randomRange(min, max) {
    // Gera um número aleatório entre min e max
    return Math.random() * (max - min) + min;
}

function lerp(a, b, t) {
    // Realiza a interpolação linear entre a e b com base em t
    return a + (b - a) * t;
}

class Neuron {
    constructor(inputs) {
        // Inicializa bias e weights com valores aleatórios entre -1 e 1
        this.bias = randomRange(-1, 1);
        this.weightList = Array.from({ length: inputs }, () => randomRange(-1, 1));
    }

    activate(signalList) {
        // Combina os sinais com os pesos e o bias
        let u = this.bias;
        for (let i = 0; i < signalList.length; i++) {
            u += signalList[i] * this.weightList[i];
        }
        // Aplica função de ativação (tanh)
        return Math.tanh(u) > 0 ? 1 : 0;
    }

    mutate(rate) {
        // Mutar os pesos e o bias do neurônio
        this.weightList = this.weightList.map(weight => lerp(weight, randomRange(-1, 1), rate));
        this.bias = lerp(this.bias, randomRange(-1, 1), rate);
    }
}

class RNA {
    constructor(inputCount, levelSizes) {
        // Inicializa score e levelList com camadas de neurônios
        this.score = 0;
        this.levelList = levelSizes.map((size, index) => {
            const inputSize = index === 0 ? inputCount : levelSizes[index - 1];
            return Array.from({ length: size }, () => new Neuron(inputSize));
        });
    }

    compute(inputs) {
        // Calcula a saída da rede neural
        for (const level of this.levelList) {
            const outputs = [];
            for (const neuron of level) {
                outputs.push(neuron.activate(inputs));
            }
            inputs = outputs; // Atualiza inputs para a próxima camada
        }
        return inputs;
    }

    mutate(rate) {
        // Mutar todos os neurônios da rede neural
        for (const level of this.levelList) {
            for (const neuron of level) {
                neuron.mutate(rate);
            }
        }
    }

    load(rnaData) {
        if (!rnaData) return;
        try {
            // Carrega a estrutura da rede neural a partir de rnaData
            this.levelList = rnaData.map(neuronList => neuronList.map(neuron => {
                const newNeuron = new Neuron(neuron.weightList.length);
                newNeuron.bias = neuron.bias;
                newNeuron.weightList = neuron.weightList;
                return newNeuron;
            }));
        } catch (e) {
            console.error('Erro ao carregar RNA:', e);
        }
    }

    save() {
        // Retorna a estrutura da rede neural para ser salva
        return this.levelList.map(neuronList => neuronList.map(neuron => ({
            bias: neuron.bias,
            weightList: neuron.weightList
        })));
    }
}

export default RNA;