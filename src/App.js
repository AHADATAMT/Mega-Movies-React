import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movie from './Movie';
import Home from './Home';
import Error from './Error';
import Search from './Search';



import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/search/q=:q" component={Search} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
