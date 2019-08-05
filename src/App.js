import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from "./Components/SignUp";
import axios from 'axios';


class App extends React.Component{
  render() {
    return(
      <Router>
        <Route path="/SignUp" to={SignUp}>
        </Route>
        <SignUp />
      </Router>
    );
  }
}
export default App;
