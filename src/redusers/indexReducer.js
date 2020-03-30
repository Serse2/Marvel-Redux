import { combineReducers } from 'redux';

import filmReducer from './film';
import fetchPersonaggi from './personaggi';

const rootReducer = combineReducers({
    film: filmReducer,
    personaggi: fetchPersonaggi
})

export default rootReducer