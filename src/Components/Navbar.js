import React from "react";
import { Redirect} from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';

class navBar extends React.Component {
//   logout(event) {
//        event.preventDefault()
//        console.log('logging out')
//        axios.post('/users/logout').then(response => {
//          console.log(response.data)
//          if (response.status === 200) {
//            this.props.updateUser({
//              loggedIn: false,
//              email: null
//            })
//          }
//        }).catch(error => {
//            console.log('Logout error')
//        })
//      }
// }
render()
       const loggedIn = this.props.loggedIn;
       console.log('navbar render, props: ')
       console.log(this.props);
       return (
                  <div>


                      <header className="navbar App-header" id="nav-container">
                          <div className="col-4" >
                              {loggedIn ? (
                                  <section className="navbar-section">
                                      <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                      <span className="text-secondary">logout</span></Link>


                                  </section>
                              ) : (
                                      <section className="navbar-section">
                                          <Link to="/" className="btn btn-link text-secondary">
                                              <span className="text-secondary">Browse</span>
                                              </Link>
                                          <Link to="/login" className="btn btn-link text-secondary">
                                          <span className="text-secondary">Your Events</span>
       				                            </Link>
                                          <Link to="/signup" className="btn btn-link">
                                          <span className="text-secondary">Profile</span>


                                            {/*/ <!-- Navbar (sit on top) -->*/}

                                        <div className="w3-top">
                                          <div className="w3-bar w3-white w3-card" id="myNavbar">
                                            <a href="#home" className="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>
                                            {/*<!-- Right-sided navbar links -->*/}
                                             <div className="w3-right w3-hide-small">
                                              <a href="#profile" className="w3-bar-item w3-button" ><i className="fa fa-user"></i> PROFILE</a>
                                              <a href="#event" className="w3-bar-item w3-button"><i className="fa fa-th"></i> EVENTS</a>
                                            </div>
                                            {/*<!-- Hide right-floated links on small screens and replace them with a menu icon -->*/}

                                            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                                              <i className="fa fa-bars"></i>
                                            </a>
                                          </div>
                                        </div>
                                       {/*<!-- End -->*/}







          // NEW NAV NEW NAV NEW NAV NEW NAV NEW NAV NEW NAV


        <div className="w3-top">
        <div ="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>
          <!-- Right-sided navbar links -->
           <div className="w3-right w3-hide-small">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i className="fa fa-th"></i> SIGN UP
             </a>
             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               <a className="dropdown-item" href="#">Sign In</a>
             </div>
             <br>
           </li>
         </ul>
         <br>
         <br>
       </div>
           <div classNameName="w3-right w3-hide-small">
          <a href="#event" classNameName="w3-bar-item w3-button">
            <i classNameName="fa fa-user"></i> PROFILE
          </a>
        </div>
          <!-- Hide right-floated links on small screens and replace them with a menu icon -->

          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
      <!-- End -->
      <!-- Sidebar on small screens when clicking the menu icon -->
      <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
        <a href="#team" onclick="w3_close()" className="w3-bar-item w3-button">PROFILE</a>
        <a href="#work" onclick="w3_close()" className="w3-bar-item w3-button">EVENTS</a>
      </nav>
<!-- End -->




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
