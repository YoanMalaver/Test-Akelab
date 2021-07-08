import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Akelab from '../containers/Akelab';
import Fibonacci from '../containers/Fibonacci';
import Home from '../containers/Home';
import Peliculas from '../containers/Peliculas';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Akelab' component={Akelab} />
        <Route exact path='/Fibonacci' component={Fibonacci} />
        <Route exact path='/Mockup' component={Peliculas} />
      </Switch>
    </Router>
  );
};

export default App;
