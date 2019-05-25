import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";
import profileAuth from "./../../lib/profile-services";
import billAuth from "./../../lib/bill-services";


class PopupBill extends Component {
  state = {
    name: '',
    price: '',
    currency: '€',
    user: '',
    image: '',
    disable: true
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  handleSelect = event => {
    event.preventDefault();
    event.persist()
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
      let flatID = this.props.user.flat
      let item = this.state
      axios.post('http://localhost:5000/user/bills/new', {flatID, item})
        .then(response => {
          this.props.getAllFlats()
        });
      this.setState({ name: '', price: '', currency: this.state.currency, user: '', image: '' })
   }

//to get new username if user changes his name --> otherwise this.props.user (not updated) and used profileAuth so we dont have to write another service
   componentDidMount() {
    profileAuth.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ 
        user: apiResponse.data.username, 
        })}
      )
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
            <label>Name</label>
            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>Price</label>
            <input value={this.state.price} type="number" name="price" onChange={this.handleChange} />
          </div>
          <select name="currency" onChange={this.handleSelect}>
            <option value="€">€</option>
            <option value="$">$</option>
          </select>
          <label>Image</label>
          <input type="file" onChange={this.handleImageUpload}></input>
          <div></div>          
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>

      </div>

    );
  }
}

export default withAuth(PopupBill);
