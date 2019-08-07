import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import TryNavbar from "./Components/TryNavbar";
import SignUp from "./Components/SignUp";

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
                <Route path="/Home" to={Home}></Route>
                <Home />
                <Route path="/Profile" to={Profile}></Route>
                <Profile />
                <Route path="/SignUp" to={SignUp}></Route>
                <SignUp />
      </Router>
    );
  }
}


export default App;
