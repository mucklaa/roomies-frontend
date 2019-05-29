import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import toDoService from '../../lib/todo-services'

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

  closePopup = () => {
    this.props.closeButton();
   }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let itemID = this.props.id
    let item = this.state
    toDoService.editItem(itemID, item)
      .then(() => {
        this.props.getAllFlats();
        this.props.closeButton();
      });
      this.setState({ name: '', user: '', isClicked: true })
   }

  render() {
    return (
        this.state.isClicked ? null : 
        <div className="edit-popup">
          <h2>Edit To-Do</h2>
          <form className="margin30" onSubmit={this.handleFormSubmit}>
            <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/task.png" width="20px" alt="Task"></img>
              <input placeholder={this.state.name} className="input-profile" value={this.state.name} type="text" name="name" onChange={this.handleChange} />
            </div>
            <div className="margin30 inputProfile">
            <img className="icon-profile-edit" src="/person.png" width="20px" alt="Responsibility:"></img>
              <input placeholder={this.state.user} className="input-profile" value={this.state.user} type="text" name="user" onChange={this.handleChange} />
            </div>
            <div>
              <input className="update-button" type="submit" value="Update"/>
            </div>
        </form>
        <button className="close-button" onClick={this.closePopup} value="close"><img src="/close.png" alt="X" width="10px"/></button>
      </div>

    );
  }
}

export default withAuth(EditToDo);
