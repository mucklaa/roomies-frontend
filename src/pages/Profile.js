import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        {/* <img src={this.props.user.image} alt=""/>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.email}</p>
        <p>{this.props.user.phone}</p> */}
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Profile);
