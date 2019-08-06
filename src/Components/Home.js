import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from './Event';


class Home extends Component {
  constructor() {
      super()
  }

  render() {

      return (
          <div className="w3-light-grey">
              {/*/ <!-- Navbar (sit on top) -->*/}

          {/*<div className="w3-top">
            <div className="w3-bar w3-white w3-card" id="myNavbar">
              <a href="#home" className="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>
              {/* <!-- Right-sided navbar links -->
               <div className="w3-right w3-hide-small">
                <a href="#profile" className="w3-bar-item w3-button" ><i className="fa fa-user"></i> PROFILE</a>
                <a href="#event" className="w3-bar-item w3-button"><i className="fa fa-th"></i> EVENTS</a>
              </div>
              {/* <!-- Hide right-floated links on small screens and replace them with a menu icon -->

              <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                <i className="fa fa-bars"></i>
              </a>
            </div>
          </div>*/}
          {/*// <!-- End -->*/}

          {/*// <!-- Sidebar on small screens when clicking the menu icon -->*/}
          <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display : 'none'}} id="mySidebar">
            <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
            <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button">PROFILE</a>
            <a href="#work" onclick="w3_close()" className="w3-bar-item w3-button">EVENTS</a>
          </nav>
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

                {/*// <!-- Events -->*/}
                {/*<div className="w3-container w3-white w3-margin w3-padding-large">
                  <div className="w3-center">
                    <h3>TITLE HEADING</h3>
                    <h5>EVENT LOCATION, <span className="w3-opacity">May 2, 2016</span></h5>
                  </div>

                  <div className="w3-justify">
                    <img src="/w3images/girl_hat.jpg" alt="Event Image" style={{width : '100%'}} className="w3-padding-16"></img>
                    <p><strong>Event Desription!</strong>...</p>
                    <p className="w3-right"><button className="w3-button w3-white w3-border" onclick="likeFunction(this)"><b><i className="fa fa-thumbs-up"></i> SAVE</b></button></p>
                    <p className="w3-clear"></p>
                    <div className="w3-row w3-margin-bottom" id="demo1" style={{display : 'none'}}>
                    </div>
                  </div>
                </div>*/}

                <Event />

                  {/*// <!-- END BLOG ENTRIES -->*/}
          </div>
      )
    }

  }
export default Home;
