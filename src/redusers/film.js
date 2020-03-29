
import { OTTIENI_FILM_INIZIO, OTTIENI_FILM_SUCCESSO, OTTIENI_FILM_FAIL, AGGIUNGI_FILM } from '../actions/actionsCreators'

const initialState = {
    loading: false,
    error: null,
    films: [],
  }

function filmReducer(state = initialState, action){
    switch(action.type){
        case OTTIENI_FILM_INIZIO:
            console.log(state)
            return {
                ...state,
                loading: true,
                error: null
            }
        case OTTIENI_FILM_SUCCESSO:
            console.log(state)
            return {
                ...state,
                loading: false,
                films: action.films
            }
        case OTTIENI_FILM_FAIL:
            console.log(state)
            return {
                ...state,
                loading: false,
                error: action.error
            }
        
        case AGGIUNGI_FILM:
            return {
                ...state,
                films: action.film
            }

        default:
           return state
    }
}

export default filmReducer