import React from "react";
import { Redirect} from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';

class TryNavBar extends React.Component {

render() {
       return (
        <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
        <a to="/Home" href="#home" className="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>

        {/*<!-- Right-sided navbar links -->*/}

        <div className="w3-right w3-hide-small">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a to="/SignUp" className="nav-link dropdown-toggle" href="#profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-th"></i> SIGN UP
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Sign In</a>
                </div>
                <br></br>
                </li>
              </ul>
              <br></br>
                <br></br>
                </div>
                <div className="w3-right w3-hide-small">
                  <a to="/Profile" href="#event" className="w3-bar-item w3-button">
                    <i className="fa fa-user"></i> PROFILE
                    </a>
                  </div>

                  {/*<!-- Hide right-floated links on small screens and replace them with a menu icon -->*/}

                  <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              {/*<!-- End -->*/}

              {/*<!-- Sidebar on small screens when clicking the menu icon -->*/}
              <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
                <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
                <a to="/Profile" href="#team" onclick="w3_close()" className="w3-bar-item w3-button">PROFILE</a>
                {/*<a href="#work" onclick="w3_close()" className="w3-bar-item w3-button">EVENTS</a>*/}
              </nav>
              {/*<!-- End -->*/}

            </div>
          )
          }
        }

export default TryNavBar;


//
//
//
//
//
//
//                       <header classNameNameName="navbar App-header" id="nav-container">
//                           <div classNameName="col-4" >
//                               {loggedIn ? (
//                                   <section classNameName="navbar-section">
//                                       <Link to="#" classNameName="btn btn-link text-secondary" onClick={this.logout}>
//                                       <span classNameName="text-secondary">logout</span></Link>
//
//
//                                   </section>
//                               ) : (
//                                       <section classNameName="navbar-section">
//                                           <Link to="/" classNameName="btn btn-link text-secondary">
//                                               <span classNameName="text-secondary">Browse</span>
//                                               </Link>
//                                           <Link to="/login" classNameName="btn btn-link text-secondary">
//                                           <span classNameName="text-secondary">Your Events</span>
//        				                            </Link>
//                                           <Link to="/signup" classNameName="btn btn-link">
//                                           <span classNameName="text-secondary">Profile</span>
//
//
//                                             {/*/ <!-- Navbar (sit on top) -->*/}
//
//                                         <div classNameName="w3-top">
//                                           <div classNameName="w3-bar w3-white w3-card" id="myNavbar">
//                                             <a href="#home" classNameName="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>
//                                             {/*<!-- Right-sided navbar links -->*/}
//                                              <div classNameName="w3-right w3-hide-small">
//                                               <a href="#profile" classNameName="w3-bar-item w3-button" ><i classNameName="fa fa-user"></i> PROFILE</a>
//                                               <a href="#event" classNameName="w3-bar-item w3-button"><i classNameName="fa fa-th"></i> EVENTS</a>
//                                             </div>
//                                             {/*<!-- Hide right-floated links on small screens and replace them with a menu icon -->*/}
//
//                                             <a href="javascript:void(0)" classNameName="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
//                                               <i className="fa fa-bars"></i>
//                                             </a>
//                                           </div>
//                                         </div>
//                                        {/*<!-- End -->*/}
//
