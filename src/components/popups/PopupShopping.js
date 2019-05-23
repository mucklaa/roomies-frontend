import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";



class PopupShopping extends Component {
  state = {
    name: '',
    amount: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
      let flatID = this.props.user.flat
      let item = this.state
      axios.post('http://localhost:5000/user/shopping/new', {flatID, item})
        .then(response => {
          this.props.getAllFlats()
        });
      this.setState({ name: '', amount: '' })
   }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Item</label>
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

export default withAuth(PopupShopping);
