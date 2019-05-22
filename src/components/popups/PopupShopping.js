import React, { Component } from "react";

class PopupShopping extends Component {
  state = {
    item: '',
    amount: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  // handleFormSubmit = (event) => {
  //   let todo = this.state
  //   axios.post('/endpoint', {todo})
  //     .then(response => {
  //       console.log(response)
  //     });
  //   this.setState({ job: '', username: '' })
  // }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Item</label>
            <input value={this.state.item} type="text" name="item" onChange={this.handleChange} />
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

export default PopupShopping;
