# Rede Neural Artificial (RNA)

Este é um projeto de implementação de uma rede neural artificial (RNA) em JavaScript. O projeto inclui as classes `Neuron` e `RNA` para simular uma rede neural básica com múltiplas camadas e neurônios.

## Funcionalidades

- Geração de pesos e bias aleatórios para os neurônios.
- Funções de ativação para os neurônios usando a função hiperbólica tangente (`Math.tanh`).
- Mutação de pesos e bias dos neurônios com uma taxa de mutação ajustável.
- Computação de saídas para entradas fornecidas através da rede neural.
- Capacidade de salvar e carregar a estrutura da rede neural.

## Estrutura do Projeto

- `Neuron`: Classe que representa um neurônio com pesos e bias. Fornece métodos para calcular a função de ativação (`activate`) e realizar mutação dos pesos e bias (`mutate`).
- `RNA`: Classe que representa uma rede neural artificial com várias camadas de neurônios. Fornece métodos para calcular saídas (`compute`), realizar mutação (`mutate`), carregar uma rede neural existente (`load`) e salvar a estrutura atual da rede neural (`save`).

## Instruções de Uso

### Importar o módulo

Primeiro, você precisará importar o módulo da RNA para usá-lo em seu projeto:

```javascript
import RNA from './RNA';
```

### Criar uma rede neural

Para criar uma nova rede neural, você deve especificar o número de entradas (`inputCount`) e uma lista de tamanhos de camada (`levelSizes`) que define o número de neurônios em cada camada:

```javascript
const inputCount = 3; // Número de entradas
const levelSizes = [4, 2]; // Número de neurônios por camada

const rna = new RNA(inputCount, levelSizes);
```

### Computar saídas

Para computar as saídas da rede neural, passe uma lista de entradas para o método `compute`:

```javascript
const inputs = [1, 0.5, -0.7];
const outputs = rna.compute(inputs);
console.log(outputs); // Exibe as saídas da rede neural
```

### Mutar a rede neural

Você pode mutar a rede neural com uma taxa de mutação especificada:

```javascript
const mutationRate = 0.1;
rna.mutate(mutationRate);
```

### Salvar e carregar a rede neural

Você pode salvar a estrutura da rede neural para um formato serializado e carregá-la posteriormente:

```javascript
// Salvar a rede neural
const savedData = rna.save();

// Carregar uma rede neural existente
rna.load(savedData);
```

## Contribuições

Se você encontrar erros ou quiser melhorar este projeto, sinta-se à vontade para contribuir. Você pode abrir problemas, fornecer feedback ou enviar solicitações de pull.

## Licença

Este projeto é de domínio público ou licenciado sob uma licença permissiva (selecione uma licença apropriada se necessário), permitindo o uso e a modificação sem restrições.

## Visualização do Projeto

O projeto pode ser visualizado [aqui](https://projeto-ai.vercel.app/).
