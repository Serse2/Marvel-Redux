function personaggi(state = [], action){
    switch(action.type){
        case 'OTTIENI_PERSONAGGI':
            console.log('richiesta dati')
            return state
        default:
            return state
    }
}

export default personaggi