import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RickMortyPage from './containers/RickMortyPage';
import RedirectComponent from './components/RedirectComponent';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/rickandmorty" component={RickMortyPage} />
        <Route path="*" component={RedirectComponent} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
