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
    axios.put('http://localhost:5000/user/to-do/edit', { itemID, item })
      .then(response => {
        this.props.getAllFlats()
      });
      this.setState({ name: '', user: '', isClicked: true })
   }

  render() {
    return (
        this.state.isClicked ? null : 
        <div class="edit-popup">
        <h2>Edit To-Do</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
          <img className="icon-profile-edit" src="/task.png" width="20px" alt="Task"></img>
            <input placeholder={this.state.name} className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
          <img className="icon-profile-edit" src="/task.png" width="20px" alt="Responsibility"></img>
            <input placeholder={this.state.user} className="input-profile" value={this.state.user} type="text" name="user" onChange={this.handleChange} />
          </div>
          <div>
            <input className="add-button" type="submit" value="Update"/>
          </div>
      </form>

      </div>

    );
  }
}

export default withAuth(EditToDo);
