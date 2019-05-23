import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";



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
      console.log("formsubmit")
      axios.post('http://localhost:5000/user/shopping/new', {flatID, item})
        .then(response => {
          this.props.getAllFlats()
        });
        //isClicked is true --> but now i have to click + twice to open popup?
      this.setState({ name: '', amount: '', isClicked: true })
   }


  render() {
    console.log(this.state.isClicked)
    return (
      this.state.isClicked ? null : 
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
            {/* butto onClick --> handleClick but then onsubmit isnt working anymore --> popup close in parent? */}
            <button type="submit" value="Add">Add</button>
          </div>
      </form>

      </div>

    );
  }
}

export default withAuth(PopupShopping);
