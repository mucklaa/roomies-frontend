import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";

class PopupBill extends Component {
  state = {
    name: '',
    price: '',
    currency: '€',
    user: this.props.user.username
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target)
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  handleSelect = event => {
    event.preventDefault();
    event.persist()
    const { name, value } = event.target;
    this.setState({[name]: value}, () => {
      console.log(event.target.value)
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
      let flatID = this.props.user.flat
      let item = this.state
      console.log(item)
      axios.post('http://localhost:5000/user/bills/new', {flatID, item})
        .then(response => {
          console.log(response)
          this.props.getAllFlats()
        });
      this.setState({ name: '', price: '', currency: this.state.currency })
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

export default withAuth(PopupBill);
