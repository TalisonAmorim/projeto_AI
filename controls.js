export default {
    jump: new KeyboardEvent('keydown', { key: ' ', keyCode: 32 }), // Observação: você pode querer usar ' ' em vez de 'Space'
    
    dispatch(event) {
        // Verifique se this[event] existe antes de tentar dispará-lo
        if (this[event]) {
            document.dispatchEvent(this[event]);
        } else {
            console.warn(`Evento "${event}" não encontrado.`);
        }
    }
};
