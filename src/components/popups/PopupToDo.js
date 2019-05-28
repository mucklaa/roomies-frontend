import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import toDoService from '../../lib/todo-services'

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
    toDoService.newItem(flatID, item)
      .then(() => { this.props.getAllFlats() });
    this.setState({ name: '', user: '', isClicked: true })
   }
  
  render() {
    return (
      this.state.isClicked ? null : 
      <div className="new-popup">
        <h2>New To-Do</h2>
        <form className="margin30" onSubmit={this.handleFormSubmit}>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/task.png" width="20px" alt="Task"></img>
            <input placeholder="Job" className="input-profile"  value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/person.png" width="20px" alt="Responsibility:"></img>
            <input placeholder="Responsibility" className="input-profile"  value={this.state.user} type="text" name="user" onChange={this.handleChange} />
          </div>
          <div>
            <input className="add-button" type="submit" value="Add"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(PopupToDo);
