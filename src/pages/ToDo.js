import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"
import EditButton from "./../components/buttons/EditButton";
import Logout from "./../components/buttons/LogoutButton";
import toDoService from "./../lib/todo-services";

class ToDo extends Component {
  state = {
    flat: {},
    pathPage: "todo",
    toDoList: [],
  }

  getAllFlats = () =>{
    const flatID = this.props.user.flat
    toDoService.getFlat(flatID)
      .then((apiResponse) => {
          this.setState({ 
            flat: apiResponse.data,
            pathPage: 'todo',
            toDoList: apiResponse.data.toDoList,
        })
    })
  }

  handleDeleteSubmit = (event) => {
    event.preventDefault();
      const itemID = event.target.value
      toDoService.deleteItem(itemID)
        .then(() => this.setState({state: this.getAllFlats()}));
   }
  
  componentDidMount() {
    this.getAllFlats()
  }

  render() {
    return (
      <div id="main-body">
      <Logout />
        <div className="header">
          <h1 className="header-h1">To-Do's</h1>
        </div>
        {
          this.state.toDoList.map((toDoItem, index) => {
            return (
              <div className="card-container to-do-card-container" key={index}>
                <div className="flex-column">
                  <div className="initials">
                    <h4 className="to-do-h4">{toDoItem.user[0]}</h4>
                  </div>
                  <h4>{toDoItem.name}</h4>
                </div>
                <div className="flex-column">                 
                  <EditButton getAllFlats={this.getAllFlats} id={toDoItem._id} name={toDoItem.name} user={toDoItem.user} pathPage="todo" />
                  <button className="button-transparent" onClick={this.handleDeleteSubmit} value={toDoItem._id}  type="submit"><img src="/delete2.png" width="20px" alt="Delete"></img></button>
                </div>
              </div>
            )
          })
        }
        <PlusButton getAllFlats={this.getAllFlats}  pathPage={this.state.pathPage} />
        <NavbarFooter />
      </div>
    );
  }
}

export default withAuth(ToDo);
