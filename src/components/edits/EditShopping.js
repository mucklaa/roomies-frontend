import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";



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
    axios.put('http://localhost:5000/user/shopping/edit', { itemID, name, amount })
      .then(response => {
        this.props.getAllFlats()
      });
   }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>ItemShopp</label>
            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>Amount</label>
            <input value={this.state.amount} type="number" name="amount" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>

      </div>

    );
  }
}

export default withAuth(EditShopping);
