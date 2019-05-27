import React, { Component } from "react";
import axios from "axios";
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

  handleFormSubmit = (event) => {
    event.preventDefault();
    let itemID = this.props.id
    let {name, amount} = this.state
    shoppingService.editItem(itemID, name, amount)
      .then(() => this.props.getAllFlats());
   }

  render() {
    return (
      this.state.isClicked ? null : 
      <div class="edit-popup">
        <h2>Edit To-Do</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/task.png" width="20px" alt="Task"></img>
            <input className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/task.png" width="20px" alt="Responsibility"></img>
            <input className="input-profile" value={this.state.amount} type="number" name="amount" onChange={this.handleChange} />
          </div>
            <div>
              <input className="add-button" type="submit" value="Add"/>
            </div>
        </form>
      </div>

    );
  }
}

export default withAuth(EditShopping);
