import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

className Profile extends React.Component{
constructor(props) {
  // super(props);
  // this.state = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   id: ''
  };
}


render() {
    return (

      <body className="w3-theme-l5">

      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">NO ONE GETS LEFT BEHIND</a>
          <!-- Right-sided navbar links -->
           <div className="w3-right w3-hide-small">
            <a href="#profile" ="w3-bar-item w3-button" ><i className="fa fa-user"></i> PROFILE</a>
            <a href="#event" className="w3-bar-item w3-button"><i className="fa fa-th"></i> EVENTS</a>
          </div>

          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
        </div>
       </div>
      </div>

      <!-- Page Container -->
      <div className="w3-container w3-content" style="max-width:1400px;margin-top:80px">
        <!-- The Grid -->
        <div className="w3-row">
            <!-- Profile -->
            <div className="w3-card w3-round w3-white">
              <div className="w3-container">
               <h4 className="w3-center">Adam Smith</h4>
               <p className="w3-center"><img src="...." className="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
               <hr>
               <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> adamsmith@yahoo.com</p>
               <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Miami, FL</p>
               <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
              </div>
            </div>
            <br>
          <!-- End Left Column -->
          </div>

          <!-- End Middle Column -->
          </div>

          <!-- End Right Column -->
          </div>

        <!-- End Grid -->
        </div>

      <!-- End Page Container -->
      </div>
      <br>

      </body>
      </html>
    )
  }
