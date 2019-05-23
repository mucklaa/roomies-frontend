import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../../lib/AuthProvider";

class PopupToDo extends Component {
  state = {
    name: '',
    user: ''
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
      axios.post('http://localhost:5000/user/to-do/new', {flatID, item})
        .then(response => {
          this.props.getAllFlats()
        });
      this.setState({ name: '', user: '' })
   }
  

  render() {
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

export default withAuth(PopupToDo);
