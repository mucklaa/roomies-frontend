import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import profileService from '../../lib/profile-services'

class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
    username: this.props.username,
    email: this.props.email,
    phoneNumber: this.props.phoneNumber,
    payPalMeUsername: this.props.paypal,
    image: this.props.image, 
    disable: false
  }
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
        this.props.updateProfile(this.state.image, this.state.username, this.state.email, this.state.phoneNumber, this.state.payPalMeUsername);
        this.props.closeButton();
      });
      this.setState({ isClicked: true })
   }

   closePopup = () => {
    this.props.closeButton();
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
    console.log("paypal", this.state)
    console.log("props", this.props.paypal)
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
              <input className="input-profile" value={this.state.phoneNumber} type="number" name="phone" onChange={this.handleChange} />
            </div>
            <div className="inputProfile">
              <img className="icon-profile-edit" src="/paypal.png" width="20px" alt="Paypal:"></img>
              <input className="input-profile" value={this.state.payPalMeUsername} type="text" name="payPalMeUsername" onChange={this.handleChange} />
              <div className="info-hover" >How to create Paypal Me?
                <span className="tooltiptext">You can find/create your paypal name here: <a className="link-edit" href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fpaypalme&state=%2Fmy%2Flanding%3Fentry%3Dmarketing">Paypal link</a></span>
              </div>
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
        <button className="close-button" onClick={this.closePopup} value="close"><img src="/close.png" alt="X" width="10px"/></button>
      </div>

    );
  }
}

export default withAuth(EditProfile);
