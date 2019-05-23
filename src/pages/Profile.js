import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import profileAuth from "./../lib/profile-services";

class Profile extends Component {
  state = { 
    flat: {},
    users: []
  };

  componentDidMount() {
    profileAuth.getFlat(this.props.user.flat)
      .then((apiResponse) => this.setState({ 
        flat: apiResponse.data,
        users: apiResponse.data.users
        })
      )
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Profile</h1>
        <img src={this.props.user.image} width="100px" alt=""/>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.phone}</p>
        {
          this.props.user.isAdmin ? <h3>Invitation Code: {this.props.user.flatCode}</h3> : null
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
