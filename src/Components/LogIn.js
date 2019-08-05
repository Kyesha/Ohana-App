import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class LogIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/userRoute/logIn', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('logIn response: ')
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        email: response.data.email
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/Home'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
          } else {
          return (
              <form>

                <div className="text-center">
                  <h1 className="text-center">Ohana</h1>
                </div>

                <div className="text-center">
                  <h2 className="text-center">Log In</h2>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@email.com" value={this.state.email} onChange={this.handleChange} required></input>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
                </div>

                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Log In</button>
              </form>
            )

          }
        }
      }

export default LogIn;
