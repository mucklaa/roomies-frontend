import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import shoppingAuth from "./../lib/shopping-services";
import EditButton from "./../components/buttons/EditButton";
import axios from "axios";


import PlusButton from "./../components/buttons/PlusButton"

class ToDo extends Component {
  state = {
    flat: {},
    pathPage: "todo",
    toDoList: []
  }

  getAllFlats = () =>{
    shoppingAuth.getFlat(this.props.user.flat)
    .then((apiResponse) => {
      console.log("Api response:" , apiResponse.data)
      this.setState({ 
      flat: apiResponse.data,
      pathPage: 'todo',
      toDoList: apiResponse.data.toDoList
    })})
  }

  componentDidMount() {
    this.getAllFlats()
  }

  render() {
    console.log("BLA", this.state.flat)
    return (
      <div>
        <h1>To-Do's</h1>

        {
          this.state.toDoList.map((toDoItem, index) => {
            return (
              <div key={index}>
                <h1>{toDoItem}</h1> 
                <h3>{toDoItem.name}</h3>
                <h3>{toDoItem.user}</h3>
                <EditButton getAllFlats={this.getAllFlats} name={toDoItem.name} user={toDoItem.user} pathPage="todo" />
                <button onClick={this.handleDeleteSubmit} value={toDoItem.name}  type="submit">Delete</button>
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
