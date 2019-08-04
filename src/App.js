import React from 'react';
import axios from 'axios';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from "react-router-dom"
import './App.css';
import './index.js';
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
<div class="w3-row w3-padding w3-border">
        <div className="w3-col l8 s12">
        <div className="container">


          <h1>Name</h1>
          {console.log('hello')}
      {this.state.events.map((event, index) => (
            <div key={index}>
                <p>{event.name}</p>
                <p>{event.description}</p>
                <p>{event.url}</p>
                <img src={event.logo} alt="event image"/>
      {this.state.images.map((event, index) =>
                  <div key={index}>
                    <p>{event.upload_url}</p>

                  </div>)}
              </div>

          ))}

        </div>
      </div>
    </div>
  )}
  }
  export default App;
