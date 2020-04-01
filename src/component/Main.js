
import React, { Component, Fragment } from 'react';
import { Switch, Route} from 'react-router-dom';
import Film from './Film';
import Personaggi from './Personaggi';
import Home from './Home';
import Header from './Header';
import Card from './Card';
import '../css/style.css';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route  path="/film/:id">
              <Card {...this.props}/>
          </Route>
          <Route path="/personaggi">
            <Personaggi {...this.props}/>
          </Route>
          <Route path="/film">
            <Film {...this.props}/>
          </Route>
          <Route path="/">
            <Home {...this.props}/>
          </Route>
        </Switch>
      </Fragment>
      
    )
  }
}