import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import profileAuth from "./../lib/profile-services";

//profileAuth for getting User
class Navbar extends Component {
  state = {
    user: ''
  }

  componentDidMount() {
    profileAuth.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ 
        user: apiResponse.data, 
        })}
      )
  }

  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>username: {this.state.user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : null
        }
      </div>
    );
  }
}

export default withAuth(Navbar);
