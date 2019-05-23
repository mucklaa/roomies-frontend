import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import EditButton from "./../components/buttons/EditButton";
import profileAuth from "./../lib/profile-services";

class Profile extends Component {
  state = { 
    flat: {},
    users: [],
    loggedInUser: '',
  };

  componentDidMount() {
    profileAuth.getFlat(this.props.user.flat)
      .then((apiResponse) => {
        console.log("user", this.props.user._id)
        this.setState({ 
        flat: apiResponse.data,
        users: apiResponse.data.users
        })}
      )

    profileAuth.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ 
        loggedInUser: apiResponse.data, 
        })}
      )
  }

  render() {
    const { users } = this.state;
    console.log(this.state.loggedInUser)
    return (
      <div>
        <h1>Profile</h1>
        <img src={this.state.loggedInUser.image} width="100px" alt=""/>
        <p>{this.state.loggedInUser.username}</p>
        <p>{this.state.loggedInUser.email}</p>
        <p>{this.state.loggedInUser.phone}</p>
        <EditButton id={this.props.user._id} phone={this.state.loggedInUser.phone} image={this.state.loggedInUser.image} username={this.state.loggedInUser.username} email={this.state.loggedInUser.email} pathPage="profile" />
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
