import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import profileAuth from "./../lib/profile-services";


class Profile extends Component {
  state = { 
    flat: {},
    users: []
  };


  // getFlat = () => {
  //   axios.get(`http://localhost:5000/user/profile/${this.props.user.flat}`)
  //     .then((apiResponse) => {
  //       console.log(this.props.user)
  //       console.log(apiResponse.data)
  //       this.setState({ 
  //         flat: apiResponse.data,
  //         users: apiResponse.data.users
  //       })
  //   })
  // }

  componentDidMount() {
    profileAuth.getFlat(this.props.user.flat)
      .then((apiResponse) => this.setState({ 
        flat: apiResponse.data,
        users: apiResponse.data.users
      }))
  }

  render() {
    const { flat, users } = this.state;
    return (
      <div>
        <h1>Profile</h1>

        <img src={this.props.user.image} width="100px" alt=""/>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.phone}</p>
        {
          this.props.user.isAdmin ? <h3>Invitation Code: {flat.flatCode}</h3> : null
        }
        
        <h3>Your Flat</h3>
        {
          users.map((element, index) => {
            return (
              <div key={index}>
                <img src={element.image} width="100px" alt=""/>
                <p>Username: {element.username}</p>
                <p>PhoneNumber: {element.phoneNumber}</p>
              </div>
              )
          })
        }
        
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Profile);
