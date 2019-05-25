import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import profileAuth from "./../lib/profile-services";

//profileAuth for getting User
class Navbar extends Component {
  state = {
    user: ''
  }

  componentDidMount() {
 //comment this if issue with props.user._id
    //  profileAuth.getUser(this.props.user._id)
    //    .then((apiResponse) => {
    //      console.log("api response user", apiResponse)
    //      this.setState({ 
    //      user: apiResponse.data, 
    //      })}
    //    )
    this.setState({
      user: this.props.user
    })
  }

  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
            <p>username: {this.props.user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : null
        }
      </div>
    );
  }
}

export default withAuth(Navbar);
