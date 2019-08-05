import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./Components/SignUp";
import SearchBar from "./Components/SearchBar";
import axios from 'axios';


// Event
class App extends Component {
  render() {
    return(
      <Router>
        <Route path="/SignUp" to={SignUp}></Route>
        <SignUp />

      <Route path="/SearchBar" to={SearchBar}></Route>
      <SearchBar />
      </Router>
    );
  }
}
export default App;
