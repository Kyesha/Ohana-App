import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import TryNavbar from "./Components/TryNavbar";
import SignUp from "./Components/SignUp";
import Event from "./Components/Event";

import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home";
import Profile from "./Components/Profile";

class App extends React.Component {

  render() {
    return(
      <Router className="App">
                <TryNavbar/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Profile" component={Profile}></Route>
                <Route path="/SignUp" component={SignUp}></Route>
      </Router>
    );
  }
}


export default App;
