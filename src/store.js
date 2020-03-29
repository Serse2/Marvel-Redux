import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReduser from './redusers/indexReducer';

const initialStore = {
    films: {},
    personaggi: ['pecora','pecora1','pecora2']
}
const store = createStore(rootReduser, initialStore, applyMiddleware(thunk))

export default store