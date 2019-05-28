import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";
import shoppingService from '../../lib/shopping-services'


class PopupShopping extends Component {
  state = {
    name: '',
    amount: '',
    isClicked: false
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

//how can we put this into parent to close popup if item was added?
  handleClick = (event) => {
    event.preventDefault();
    this.setState( { isClicked: !this.state.isClicked } )
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let flatID = this.props.user.flat
    let item = this.state
    shoppingService.newItem(flatID, item)
      .then(() => { this.props.getAllFlats() });
    this.setState({ name: '', amount: '', isClicked: true })
   }

  render() {
    return (
      this.state.isClicked ? null : 
      <div className="new-popup">
        <h2>New To-Do</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
            <div className="margin30 inputProfile">
              <img className="icon-profile-edit" src="/shopping-black.png" width="20px" alt="Item"></img>
              <input placeholder="Item" className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
            </div>
            <div className="margin30 inputProfile">
              <img className="icon-profile-edit" src="/amount.png" width="20px" alt="Amount"></img>
              <input placeholder="Amount" className="input-profile" value={this.state.amount} type="number" name="amount" onChange={this.handleChange} />
            </div>
            <div>
              {/* butto onClick --> handleClick but then onsubmit isnt working anymore --> popup close in parent? */}
              <button className="add-button" type="submit" value="Add">Add</button>
            </div>
        </form>
      </div>

    );
  }
}

export default withAuth(PopupShopping);
