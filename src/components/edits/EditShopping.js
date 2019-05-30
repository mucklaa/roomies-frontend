import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import shoppingService from '../../lib/shopping-services'

class EditShopping extends Component {
  state = {
    name: this.props.name,
    amount: this.props.amount
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  closePopup = () => {
    this.props.closeButton();
   }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let itemID = this.props.id
    let item = this.state
    shoppingService.editItem(itemID, item)
      .then(() => {
        this.props.getAllFlats();
        this.props.closeButton();
      });
      this.setState({ isClicked: true })
   }

  render() {
    return (
      this.state.isClicked ? null : 
      <div className="edit-popup">
        <h2>Edit Shopping-Item</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
          <img className="icon-profile-edit" src="/shopping-black.png" width="20px" alt="Item"></img>
            <input className="input-field" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
          <img className="icon-profile-edit" src="/amount.png" width="20px" alt="Amount"></img>
          <input className="input-field" value={this.state.amount} type="number" name="amount" onChange={this.handleChange} />
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

export default withAuth(EditShopping);
