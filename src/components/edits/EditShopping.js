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
    let flatID = this.props.user.flat
    let itemName = this.props.name
    let {name, amount} = this.state
    console.log(flatID)
    console.log(this.state)
    axios.put('http://localhost:5000/user/shopping/edit', { flatID, itemName, name, amount })
      .then(response => {
        console.log(response)
        this.props.getAllFlats()
      });
    
   }

  render() {
    console.log('edit')
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
