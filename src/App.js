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
<div className="w3-row w3-padding w3-border">
        <div className="w3-col l8 s12">
        <div className="container">


          <h1>Events</h1>
          {console.log('hello')}
      {this.state.events.map((event, index) => (
            <div className="w3-container w3-white w3-margin w3-padding-large"key={index}>
                <img src={event.logo} alt="event image"/>
                <p>{event.name}</p>
                <p>{event.description}</p>
                <p>{event.is_free}</p>
              </div>
            //   <p className="w3-right"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up"></i>SAVE</b></button></p>
            //   <p className="w3-clear"></p>
            //   <div className="w3-row w3-margin-bottom" id="demo1" style="display:none">
            // </div>
          ))}

        </div>
      </div>
    </div>
  )}
  }

// <div className="w3-container w3-white w3-margin w3-padding-large">
//   <div className="w3-center">
//     <h3>event.name</h3>
//     <h5>EVENT LOCATION, <span class="w3-opacity">{event.is_free}</span></h5>
//   </div>
//
//   <div class="w3-justify">
//     <img src="{event.logo}" alt="event image" style="width:100%" class="w3-padding-16">
//     <p><strong>event.description</strong>...</p>
//     <p class="w3-right"><button class="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i class="fa fa-thumbs-up"></i> SAVE</b></button></p>
//     <p class="w3-clear"></p>
//     <div class="w3-row w3-margin-bottom" id="demo1" style="display:none">
//     </div>
//   </div>
// </div>

export default App;
