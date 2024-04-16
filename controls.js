export default {
    // Evento para pular (jump)
    jump: new KeyboardEvent('keydown', { key: ' ', keyCode: 32 }),

    // Evento para agachar (crouch)
    crouch: new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40 }), 

    dispatch(event) {
        // Verifica se this[event] existe antes de tentar dispará-lo
        if (this[event]) {
            document.dispatchEvent(this[event]);
        } else {
            console.warn(`Evento "${event}" não encontrado.`);
        }
    }
};
