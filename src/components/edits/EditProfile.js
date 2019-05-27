import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";
import profileService from '../../lib/profile-services'

class EditProfile extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    phone: this.props.phone,
    paypal: this.props.paypal,
    image: this.props.image, 
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
        console.log("formSubmit", response);
        this.props.authMe();
        this.props.updateProfile(this.state.image, this.state.username, this.state.email, this.state.phone);
      });
      this.setState({ isClicked: true })
   }

   handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log('file', file)
    const uploadFile = new FormData();
    uploadFile.append('photo', file)
    console.log("this.props.id", this.props.id)
    this.setState({disable: true})
    profileService.imageUpload(this.props.id, uploadFile)
      .then((image) => {
        console.log('image', image)
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
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/user-profile.png" width="20px" alt="Username:"></img>
              <input placeholder="Username" className="input-profile" value={this.state.username} type="text" name="username" onChange={this.handleChange} />
            </div>
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/mail-profile.png" width="20px" alt="Email:"></img>
              <input className="input-profile" value={this.state.email} type="email" name="email" onChange={this.handleChange} />
            </div>
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/phone-profile.png" width="20px" alt="Phone:"></img>
              <input className="input-profile" value={this.state.phone} type="number" name="phone" onChange={this.handleChange} />
            </div>
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/paypal.png" width="20px" alt="Paypal:"></img>
              <input className="input-profile" value={this.state.paypal} type="text" name="paypal" onChange={this.handleChange} />
            </div>
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/camera.png" width="20px" alt="Paypal:"></img>
              <input className="input-profile-file input-profile" type="file" onChange={this.handleImageUpload}></input>
            </div>
            <div>
            {
              !this.state.disable ? <button className="update-button" type="submit" value="Add">Update</button> : <button disabled className="update-button" type="submit" value="Add">Update</button>  
            }
            </div>
        </form>
      </div>

    );
  }
}

export default withAuth(EditProfile);
