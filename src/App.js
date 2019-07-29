import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

// const API_KEY = process.env.REACT_APP_OHANA_API_KEY;

componentDidMount = () => {
  const json = sessionStorage.getItem("list");
  const list = JSON.parse(json);
  this.getEvents()
}

componentDidUpdate = () => {
  const list = JSON.stringify(this.state.list)
  sessionStorage.setItem("list", list)
}

getEvents = async () => {
  const response = await axios.get('/ohana')
  this.setState({list:response.data})
  }
  render() {
    console.log(this.state.list)
    return (
      <div>
        hello
        {this.state.list.map(event => (
          <div>
            <p>Name: { event.name }</p>
            <p>Description: { event.description }</p>
            <p>Url: {event.url}</p>
          </div>
        ))}
      </div>
      )
  }
}
export default App;
