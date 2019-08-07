import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from "react-router-dom";
import Event from './Components/Event';
import './App.css';
import './index.js';
import './Components/Event';
// import './index.html';

//
const API_KEY = process.env.REACT_APP_OHANA_API_KEY;

class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       events: [] ,
//       images: []
//     };
//   }
//
//   componentDidMount = () => {
//     const showMeSomething = axios.get('/ohana', { headers: { Authorization: 'Bearer ' + API_KEY }})
//     .then((response) => {
//       console.log(response)
//       this.setState({events: response.data})
//
//     })
//
//
//     const showMeImage = axios.get('/ohana', { headers: { Authorization: 'Bearer ' + API_KEY }})
//     .then((response) => {
//       console.log(response.data)
//       this.setState({image:response.data})
//     })
//
//     }

render() {
    return (
        <Event/>
        <Profile/>
    )
  }
};

//     render() {
//       return (
//
//         <Event/>
//         // <Profile/>
//         )};
// }
=======
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

>>>>>>> bf9fa2ae4e23eb3fee04a88daf73e775b1752067

export default App;
