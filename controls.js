export default {
    junp: new keyboardEvent('keydown', {key: 'Space', KeyCode: 32}),
    dispatch(event){
        document.dispatchEvent(this[event]);
    }
}
