import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectUSState from 'react-select-us-states';


import axios from 'axios';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAddress: '',
      streetAddressLine2: '',
      city: '',
      stateProvince: '',
      zipCode: 0
    }

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDropdown = (e) => {
    this.setState({
      stateProvince: e
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

// I took out the slash usually it's /userRoute/
    axios.post('/userRoute', this.state )


    .then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/Home'
					})
				} else {
					console.log('Email already taken')
				}
			}).catch(error => {
				console.log('SignUp error: ')
				console.log(error)

			})
  }

render() {
     return (
       <form>

           <div className="text-center">
             <h1 className="text-center">Ohana</h1>
           </div>

           <div className="text-center">
             <h2 className="text-center">Sign Up</h2>
           </div>

           <div className="nameContainer">
               <div className="form-group">
                 <label htmlFor="exampleInputFirstName">First Name</label>
                 <input name="firstName" type="text" className="form-control" id="exampleInputFirstName" aria-describedby="FirstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required></input>
               </div>
               <div className="form-group">
                 <label htmlFor="exampleInputLastName">Last Name</label>
                 <input name="lastName" type="text" className="form-control" id="exampleInputLastName" aria-describedby="LastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} required></input>
               </div>
          </div>

           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@email.com" value={this.state.email} onChange={this.handleChange} required></input>
           </div>

           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
           </div>

           <div className="addressContainer">

               <div className="form-group">
                 <label htmlFor="inputAddress">Address</label>
                 <input name="streetAddress" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.streetAddress} onChange={this.handleChange} required></input>
               </div>

               <div className="form-group">
                 <label htmlFor="inputAddress2">Address Two</label>
                 <input name="streetAddressLine2" type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.streetAddressLine2} onChange={this.handleChange}></input>
               </div>

               <div className="form-row">

                 <div className="form-group col-md-6">
                   <label htmlFor="inputCity">City</label>
                   <input name="city" type="text" className="form-control" id="inputCity" value={this.state.city} onChange={this.handleChange} required></input>
                 </div>
                 <div className="form-group col-md-4">
                   <label htmlFor="inputState">State</label>
                   <SelectUSState name="stateProvince" type="dropdown" id="inputState" className="form-control" value={this.state.stateProvince} onChange={this.handleDropdown} required></SelectUSState>
                 </div>

                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input name="zipCode" type="number" className="form-control" id="inputZip" value={this.state.zipCode} onChange={this.handleChange} required></input>
                  </div>

               </div>

            </div>

           <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Sign Up</button>

       </form>
     )
   }
}


export default SignUp;
