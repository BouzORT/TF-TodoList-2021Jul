import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Titulo from './components/Titulo';
import Inicio from './components/Inicio';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
      </header>
      <div className="App-content">
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </div>
  );
};

export default App;
