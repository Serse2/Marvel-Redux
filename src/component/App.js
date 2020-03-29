import { bindActionCreators } from 'redux';

import * as actionsCreators  from '../actions/actionsCreators'

//importo la funzione connect, questa funzione permette la connessione tra un componente React e il Redux Store
import { connect } from 'react-redux'

import Main from './Main'


function mapStateToProps(state){
    return {
        film: state.film,
        personaggi: state.personaggi
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionsCreators, dispatch)
}


const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App