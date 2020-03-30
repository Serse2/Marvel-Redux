
import { OTTIENI_PERSONAGGIO_INIZIO, OTTIENI_PERSONAGGIO_SUCCESSO, OTTIENI_PERSONAGGIO_FAIL } from '../actions/actionsCreators'

const initialState = {
    loading: true,
    personaggi: [],
    error: null
}

function fetchPersonaggi(state = initialState, action){
    
    switch(action.type){
        
        case OTTIENI_PERSONAGGIO_INIZIO:
            return state
        
        case OTTIENI_PERSONAGGIO_SUCCESSO:
            console.log(action)
            return {
                ...state,
                loading: false,
                personaggi: action.personaggi
            }
        case OTTIENI_PERSONAGGIO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        default:
            return state
    }
}

export default fetchPersonaggi