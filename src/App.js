import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Route path="/Home" to={Home}></Route>
        <Home/>
      </div>
    );
  }


export default App;
