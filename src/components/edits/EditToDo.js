import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";



class EditToDo extends Component {
  state = {
    user: this.props.user,
    name: this.props.name
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let itemID = this.props.id
    let item = this.state
    console.log(item)
    console.log(this.state)
    axios.put('http://localhost:5000/user/to-do/edit', { itemID, item })
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
            <label>Job</label>
            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>Responsibility</label>
            <input value={this.state.user} type="text" name="user" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>

      </div>

    );
  }
}

export default withAuth(EditToDo);
