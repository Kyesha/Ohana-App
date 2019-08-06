import React from 'react';
import axios from 'axios';
import Home from './Home';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from "react-router-dom"



const API_KEY = process.env.REACT_APP_OHANA_API_KEY;

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [] ,
      images: []
    };
  }

  componentDidMount = () => {
    // const showmesomthign doesnt do anything
    const showMeSomething = axios.get('/ohana', { headers: { Authorization: 'Bearer ' + API_KEY }})
      .then((response) => {
        console.log(response.data)
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
        <h1>Events</h1>
        {this.state.events.map((event, index) => (
            <div className="card border-primary mb-3" style={{maxWidth : '1252px'}}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={event.logo} className="card-img" alt="event image"></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">{event.description.length < 600 ? `${event.description}` : `${event.description.substring(0, 600)}...`}</p>
                    <p className="card-text"><small className="text-muted">{event.is_free}</small></p>
                    <a href={event.url}>Go to event Page</a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
      )
      }}

export default Event;
