import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import billService from '../../lib/bill-services'

class EditBill extends Component {
  state = {
    name: this.props.name,
    price: this.props.price,
    currency: this.props.currency,
    user: this.props.user,
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSelect = event => {
    event.preventDefault();
    event.persist()
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  closePopup = () => {
    this.props.closeButton();
   }

  handleFormSubmit = event => {
    event.preventDefault();
    let itemID = this.props.id
    let item = this.state
    billService.editBill(itemID, item)
      .then(() => {
        this.props.getAllFlats()
        this.props.closeButton();
      });
      this.setState({ isClicked: true })
   }

  render() {
    return (
      this.state.isClicked ? null : 
      <div className="edit-popup">
        <h2>Edit Invoice</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/receipt.png" width="20px" alt="Description"></img>
            <input className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/money-black.png" width="20px" alt="Amount"></img>
            <input className="input-profile" value={this.state.price} type="number" name="price" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
          <img className="icon-profile-edit" src="/currency.png" width="20px" alt="Currency"></img>
            <select className="select-currency" name="currency" onChange={this.handleSelect}>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>  
          </div>       
          <div>
            <input className="update-button" type="submit" value="Update"/>
          </div>
        </form>
        <button className="close-button" onClick={this.closePopup} value="close"><img src="/close.png" alt="X" width="10px"/></button>
      </div>
    );
  }
}

export default withAuth(EditBill);
