export const OTTIENI_PERSONAGGI = 'OTTIENI_PERSONAGGI';
export const AGGIUNGI_FILM = 'AGGIUNGI_FILM';

export const OTTIENI_FILM_INIZIO = 'OTTIENI_FILM_INIZIO';
export const OTTIENI_FILM_SUCCESSO = 'OTTIENI_FILM_SUCCESSO';
export const OTTIENI_FILM_FAIL = 'OTTIENI_FILM_FAIL';


export function ottieniFilmInizio(){
    return {
        type: OTTIENI_FILM_INIZIO
    }
};

export function ottieniFilmSuccesso(film){
    return {
        type: OTTIENI_FILM_SUCCESSO,
        films: film
    }
}

export function ottieniFilmFail(error){
    return{
        type: OTTIENI_FILM_FAIL,
        error: error
    }
}

const publicKey = '01fcb80cc8c6ef5e1a761b5b78583ac7'
const ts = 'sergio'
// http://www.md5.cz/ to create the hash key (ts + publicKey + privateKey)
const hash = '98e72f46ae418d4e98d4a911400c008c'
const endpoint = `http://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`

export function fetchFilms() {
    return dispatch => {
      dispatch(ottieniFilmInizio());
      return fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                dispatch(ottieniFilmSuccesso(data.data.results))
                return data.data.results
            })
            .catch(error => dispatch(ottieniFilmFail(error)));
    }
  }

export function fetchPersonaggi(personaggi) {
    return {
        type: OTTIENI_PERSONAGGI,
        personaggi: personaggi
    }
}

export function addFilm(film) {
    return {
        type: AGGIUNGI_FILM,
        film: film
    }
}
