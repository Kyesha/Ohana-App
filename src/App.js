import React from 'react';
import axios from 'axios';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from "react-router-dom";
import Event from './Components/Event';
import './App.css';
import './index.js';
import './Components/Event';
// import './index.html';


const API_KEY = process.env.REACT_APP_OHANA_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [] ,
      images: []
    };
  }

  componentDidMount = () => {
    const showMeSomething = axios.get('/ohana', { headers: { Authorization: 'Bearer ' + API_KEY }})
    .then((response) => {
      console.log(response)
      this.setState({events: response.data})

    })


    const showMeImage = axios.get('/ohana', { headers: { Authorization: 'Bearer ' + API_KEY }})
    .then((response) => {
      console.log(response.data)
      this.setState({image:response.data})
    })

    }




    render() {
      return (

        <Event/>
        )

  }
}

export default App;
