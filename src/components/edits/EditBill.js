import React, { Component } from "react";
import axios from "axios";
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
    let itemID = this.props.id
    let item = this.state
    billService.editBill(itemID, item)
      .then(() => this.props.getAllFlats());
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
          <div>
            <input type="submit" value="Add"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(EditBill);
