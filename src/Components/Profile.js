// import React from 'react';
// import axios from 'axios';
//
// class Profile extends React.Component {
//   constructor(props) {
//      super(props);
//      this.state = {
//        users: [],
//        user: {}
//    }
//  }
//
//  async componentDidMount() {
//   const id = this.props.match.params._id // we gSrab the ID from the URL
//   const {data} = await axios.get('/userRoute/${id}')
//   this.setState({user: data})
// }
//
// Users() {
//      return this.state.users.map(function(email, i){
//          return <Users user={email} key={i} />
//      })
//     }
//
//
//
//
// ender() {
//         return (
//             <div>
//               <p> {}
//
//               </p>
//           </div>
//         )
//       }
// }

// { this.todoList() }

// render() {
//         return (
//             <div>
//               {this.state.users.map(user => {
//                 const {id} = user
//                   return (
//                     <li key={id}>
//                       Hello
//                     </li>
//                   )
//                })
//             }
//           </div>
//         )
//       }
// }

// export default Profile;

//
//
//
//    componentDidMount() {
//      axios.get('/:id', this.state )
//          .then(response => {
//              this.setState({ users: response.data });
//          })
//          .catch(function (error){
//              console.log(error);
//          })
//        }
//
//
//     userProfile() {
//         return this.state.profiles.map(function(user, i){
//           return <Profile user={ firstName, lastName, email, streetAddress, streetAddressLine2, city, stateProvince, zipCode} key={i} />
//         })
//       }
//
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Profile!!</p>
//             </div>
//         )
//     }
// }




//
//
//
//
//
// class ParProfile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={}
//   }
//
//
//
//
//
//
//   axios.get('/user/', {
//     this.setState.firstName: this.setState.firstName,
//     this.setState.lastName: this.setState.lastName,
//
//
//
// }
//
// export default ParProfile;




import React, { Component } from 'react';
import axios from 'axios';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: {}
        }
    }

    componentDidMount = () => {
        const id = this.props._id;
        axios.get('/userRoute/${id}')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    render() {
        const { firstName, lastName, email, zipCode } = this.state.user;
        return (
            <div>
            </div>
        );
    }
}

export default Profile;
