import React, { Component } from 'react';
import GameRenderer from './components/GameRenderer'
import TitleScreen from './components/TitleScreen'
import PlayerSelectScreen from './components/PlayerSelectScreen'
import RootStore from './state/RootStore'
import { Provider } from 'mobx-react'
import Memeapi from './components/Memeapi'


import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider {...RootStore} >
          <Router>
            <Switch>
              <Route exact path='/' component={TitleScreen}/>
              <Route path='/game' component={GameRenderer}/>
              <Route path='/player_select' component={PlayerSelectScreen}/>
              <Route path='/memeapi' component={Memeapi}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;