import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReduser from './redusers/indexReducer';

const store = createStore(rootReduser, applyMiddleware(thunk))

console.log(store.getState())

export default store