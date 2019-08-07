import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./Components/SignUp";

import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Route path="/Home" to={Home}></Route>
        <Home />

      </Router>
    );
  }
}


export default App;
