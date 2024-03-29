import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import profileService from '../../lib/profile-services'

class EditProfile extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    phoneNumber: this.props.phone,
    image: this.props.image, 
    payPalMeUsername: this.props.paypal,
    disable: false
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    let userID = this.props.id
    let item = this.state
    profileService.editUser(userID, item)
      .then(response => {
        this.props.authMe();
        this.props.updateProfile();
        this.props.closeButton();
      });
      this.setState({ isClicked: true })
   }

   closePopup = () => {
    this.props.closeButton();
   }

   handleImageUpload = (event) => {
    const file = event.target.files[0];
    const uploadFile = new FormData();
    uploadFile.append('photo', file)
    this.setState({disable: true})
    profileService.imageUpload(this.props.id, uploadFile)
      .then((image) => {
        this.setState({
          image,
          disable: false,
        })
      })
      .catch((err) => console.log(err))
   }

  render() {
    return (
      this.state.isClicked ? null : 
      <div className="edit-profile-popup">
        <h2>Edit Profile</h2>
        <form onSubmit={this.handleFormSubmit}>
            <div className="input-profile">
              <img className="icon-profile-edit" src="/user-profile.png" width="20px" alt="Username:"></img>
              <input placeholder="Username" className="input-field" value={this.state.username} type="text" name="username" onChange={this.handleChange} />
            </div>
            <div className="input-profile">
              <img className="icon-profile-edit" src="/mail-profile.png" width="20px" alt="Email:"></img>
              <input className="input-field" value={this.state.email} type="email" name="email" onChange={this.handleChange} />
            </div>
            <div className="input-profile">
              <img className="icon-profile-edit" src="/phone-profile.png" width="20px" alt="Phone:"></img>
              <input className="input-field" value={this.state.phoneNumber} type="number" name="phoneNumber" onChange={this.handleChange} />
            </div>
            <div className="input-profile">
              <img className="icon-profile-edit" src="/paypal.png" width="20px" alt="Paypal:"></img>
              <input className="input-field" value={this.state.payPalMeUsername} type="text" name="payPalMeUsername" onChange={this.handleChange} />
              <div className="info-hover">How to create Paypal Me?
                <span className="tooltiptext">You can find/create your paypal name here: <a className="link-edit" href="https://www.paypal.com/signin">Paypal link</a></span>
              </div>
            </div>
            <div className="input-profile">
              <img className="icon-profile-edit" src="/camera.png" width="20px" alt="Paypal:"></img>
              <input className="input-profile-file input-field" type="file" onChange={this.handleImageUpload}></input>
            </div>
            <div>
              { !this.state.disable ? <button className="update-button" type="submit" value="Add">Update</button> : <button disabled className="update-button" type="submit" value="Add">Update</button> }
            </div>
        </form>
        <button className="close-button" onClick={this.closePopup} value="close"><img src="/close.png" alt="X" width="10px"/></button>
      </div>
    );
  }
}

export default withAuth(EditProfile);
