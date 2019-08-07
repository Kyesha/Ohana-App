
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event';

class Home extends Component {

  render() {

      return (
          <div className="w3-light-grey margin-home">

          {/*// <!-- Sidebar on small screens when clicking the menu icon -->*/}

          {/*// <!-- End -->*/}

          {/*//  <!-- w3-content defines a container for fixed size centered content,*/}
          {/*// and is wrapped around the whole page content, except for the footer in this example -->*/}
          <div className="w3-content" style={{maxWidth : '1600px'}}>


            {/*// <!-- Header*/}
            <header className="w3-container w3-center w3-padding-48 w3-white">
              <img className="w3-image" src="Ohana.jpg" alt="Fashion Blog" width="800" height="80"></img>
            </header>

            {/*// <!-- Image header -->*/}
            {/*<header className="w3-display-container w3-wide" id="home">
              <img className="w3-image" src="Ohana.jpg" alt="Ohana" width="1400" height="200"></img>
            </header>
            <div id="root"></div>*/}


              {/*// <!-- Grid -->*/}
              <div className="w3-row w3-padding w3-border">
                {/*// <!-- Event Search-->*/}
                <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                <h6 className="w3-opacity">Search for Event</h6>
                <p contenteditable="true" className="w3-border w3-padding"></p>
                <button type="button" className="w3-button w3-theme">Search</button>
                </div>
                </div>
                </div>
                </div>
                {/*// <!-- End Event Search  -->*/}

                <Event />

                  {/*// <!-- END BLOG ENTRIES -->*/}
          </div>
      )
    }

  }
export default Home;
