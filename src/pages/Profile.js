import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import EditButton from "./../components/buttons/EditButton";
import profileService from "./../lib/profile-services";
import Logout from "./../components/buttons/LogoutButton";
import "./../css/Profile.css"


class Profile extends Component {
  state = { 
    flat: {},
    users: [],
    loggedInUser: '',
  };

  componentDidMount() {
    profileService.getFlat(this.props.user.flat)
      .then((apiResponse) => {
        console.log("user", this.props.user._id)
        this.setState({ 
        flat: apiResponse.data,
        users: apiResponse.data.users
        })
      }
    )

    profileService.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ loggedInUser: apiResponse.data })
        }
      )
  }
  
  updateImage = (image) =>{
    let newLoggedInUser = this.state.loggedInUser;
    newLoggedInUser.image = image;
    this.setState({ loggedInUser: newLoggedInUser })
  }

  updateProfile = (image, username, email) =>{
    profileService.getFlat(this.props.user.flat)
      .then((apiResponse) => {
        console.log("user", this.props.user._id)
        this.setState({ 
          flat: apiResponse.data,
          users: apiResponse.data.users
        })
      }
    )

    profileService.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ loggedInUser: apiResponse.data})
      })
    }
    // let newLoggedInUser = this.state.loggedInUser;
    // newLoggedInUser.image = image;
    // newLoggedInUser.username = username;
    // newLoggedInUser.email = email;
    // this.setState({
    //   loggedInUser: newLoggedInUser,
    // })




  render() {
    const { users } = this.state;
    return (
      <div id="main-body">
        <Logout />
        <div className="header">
        <h1 className="header-h1">Profile</h1>
        </div>
        <div className="card-container">
          <div className="profile-inner-container">
            <img className="profile-image" src={this.state.loggedInUser.image} width="90px" alt=""/>
            <EditButton updateProfile={this.updateProfile} updateImage={this.updateImage} id={this.props.user._id} phone={this.state.loggedInUser.phoneNumber} image={this.state.loggedInUser.image} username={this.state.loggedInUser.username} email={this.state.loggedInUser.email} pathPage="profile" />
          </div>
          <div className="profile-inner-container">
            <div className="profile-icon-container">
              <img className="icon-profile" src="/user-profile.png" width="20px" alt="Username:"></img>
              <p>{this.state.loggedInUser.username}</p>
            </div>
            <div className="profile-inner-container">
              <div className="profile-icon-container">
                <img className="icon-profile" src="/mail-profile.png" width="20px" alt="Email:"></img>
                <p>{this.state.loggedInUser.email}</p>
              </div>
            </div>
            <div className="profile-inner-container">
              <div className="profile-icon-container">
                <img className="icon-profile" src="/phone-profile.png" width="20px" alt="Phone:"></img>
                <p>{this.state.loggedInUser.phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="invitation-div">
          <h2>Your Flatmates</h2>
          { this.props.user.isAdmin ? <h4 className="card-container">Invitation Code: {this.props.user.flatCode}</h4> : null }
        </div>
        {
          users.map((element, index) => {
            if (element.username === this.props.user.username) {
              return null
            } else {
              return (
                <div key={index}>
                  <div className="card-container">
                    <div className="profile-inner-container">
                      <img className="profile-image" src={element.image} width="90px" alt=""/>
                    </div>
                    <div className="profile-inner-container">
                      <div className="profile-icon-container">
                        <img className="icon-profile" src="/user-profile.png" width="20px" alt="Username:"></img>
                        <p>{element.username}</p>
                      </div>
                      <div className="profile-icon-container">
                        <img className="icon-profile" src="/phone-profile.png" width="20px" alt="Phone:"></img>
                        <p>{element.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                )
            }
          })
        }
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Profile);