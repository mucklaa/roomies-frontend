import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";
import profileAuth from '../../lib/profile-services'



class EditProfile extends Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    phone: this.props.phone,
    image: this.props.image, 
    disable: true
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
    console.log("userID" , userID)
    console.log('request shoot')
    axios.post(`http://localhost:5000/user/profile/edit/${userID}`, { userID, item })
      .then(response => {
        console.log("formSubmit", response);
        this.props.authMe();
        this.props.updateProfile(this.state.image, this.state.username, this.state.email);
      });
   }

   handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log('file', file)
    const uploadFile = new FormData();
    uploadFile.append('photo', file)
    console.log("this.props.id", this.props.id)
    profileAuth.imageUpload(this.props.id, uploadFile)
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
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Username</label>
            <input value={this.state.username} type="text" name="username" onChange={this.handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input value={this.state.email} type="email" name="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <input value={this.state.phone} type="number" name="phone" onChange={this.handleChange} />
          </div>
          <label>Image</label>
          <input type="file" onChange={this.handleImageUpload}></input>
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>
      </div>

    );
  }
}

export default withAuth(EditProfile);
