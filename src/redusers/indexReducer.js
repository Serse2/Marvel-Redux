import { combineReducers } from 'redux';

import film from './film';
import personaggi from './personaggi';

const rootReducer = combineReducers({
    film: film,
    personaggi: personaggi
})

export default rootReducer