import { combineReducers } from 'redux';

import filmReducer from './film';
import personaggi from './personaggi';

const rootReducer = combineReducers({
    film: filmReducer,
    personaggi: personaggi
})

export default rootReducer