import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// mine resurce
import App from './component/App'

// importo il componente Provider che conterrà il nostro store contenente il nostro stato al più alto livello
import { Provider } from 'react-redux'

import store from './store'

import { BrowserRouter as Router, } from 'react-router-dom'

const router = (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
)




ReactDOM.render(
  router,
  document.getElementById('root')
);