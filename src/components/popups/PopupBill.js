import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import profileAuth from "./../../lib/profile-services";
import billService from "./../../lib/bill-services";


class PopupBill extends Component {
  state = {
    name: '',
    price: '',
    currency: 'EUR',
    user: '',
    image: '',
    disable: false
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
      billService.newBill(flatID, item)
        .then(() => { 
          this.props.getAllFlats();
          this.props.closeButton();
        });
      this.setState({ name: '', price: '', currency: this.state.currency, user: '', image: '' })
   }

// to get new username if user changes his name --> otherwise this.props.user (not updated) and used profileAuth so we dont have to write another service
   componentDidMount() {
    profileAuth.getUser(this.props.user._id)
      .then((apiResponse) => {
        console.log("api response user", apiResponse)
        this.setState({ user: apiResponse.data.username })
        }
      )
    }

  handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log('file', file)
    const uploadFile = new FormData();
    uploadFile.append('photo', file)
    console.log("this.props.id", this.props.id)
    this.setState({disable: true})
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
      this.state.isClicked ? null :
      <div className="new-popup">
        <h2>New Expense</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/receipt.png" width="20px" alt="Description"></img>
            <input placeholder="Description" className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/money-black.png" width="20px" alt="Amount"></img>
            <input placeholder="Amount" className="input-profile" value={this.state.price} type="number" name="price" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/currency.png" width="20px" alt="Currency"></img>
            <select className="select-currency" name="currency" onChange={this.handleSelect}>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className="margin30 inputProfile">    
            <img className="icon-profile-edit" src="/camera-black.png" width="20px" alt="Currency"></img>
            <input className="input-profile" type="file" onChange={this.handleImageUpload}></input>
          </div>         
          <div>
            {
              !this.state.disable ?  <input className="add-button" type="submit" value="Add"/> : <input className="add-button" disabled type="submit" value="Add"/> 
            }
          </div>
        </form>

      </div>
    );
  }
}

export default withAuth(PopupBill);
