import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Profile extends React.Component {
render() {
   return (

    <div>
    <div>
    <div>
    <div>
     <div className="w3-container w3-content" >
       {/*<!-- The Grid -->*/}
       <div className="w3-row">
           {/*<!-- Profile -->*/}
           <div className="w3-card w3-round w3-white" style={{maxWidth:'1400px', marginTop:'80px'}}>
             <div className="w3-container">
              <h4 className="w3-center">Adam Smith</h4>
              <p className="w3-center"><img src="...." className="w3-circle" style={{height:'106px', width:'106px'}} alt="Avatar"></img></p>
              <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> adamsmith@yahoo.com</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Miami, FL</p>
              <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> April 1, 1988</p>
              </div>
           </div>
         {/*<!-- End Left Column -->*/}
         </div>
         {/*<!-- End Middle Column -->*/}
         </div>
         {/*<!-- End Right Column -->*/}
         </div>
       {/*<!-- End Grid -->*/}
       </div>
     {/*}<!-- End Page Container -->*/}
     </div>
  </div>
   )
 }
}

export default Profile;
