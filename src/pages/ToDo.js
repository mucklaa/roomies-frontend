import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"
import EditButton from "./../components/buttons/EditButton";
import toDoAuth from "./../lib/todo-services";
import axios from "axios";

class ToDo extends Component {
  state = {
    flat: {},
    pathPage: "todo",
    toDoList: []
  }

  getAllFlats = () =>{
    const flatID = this.props.user.flat
    toDoAuth.getFlat(flatID)
      .then((apiResponse) => {
          this.setState({ 
            flat: apiResponse.data,
            pathPage: 'todo',
            toDoList: apiResponse.data.toDoList
        })
    })
  }

  handleDeleteSubmit = (event) => {
    event.preventDefault();
      let itemID = event.target.value
      axios.delete('http://localhost:5000/user/to-do/delete', {data: {itemID}})
        .then(response => {
          console.log(response)
          this.setState({state: this.getAllFlats()})
        });
   }

  componentDidMount() {
    this.getAllFlats()
  }

  render() {
    console.log("BLA", this.state.toDoList)
    return (
      <div>
        <h1>To-Do's</h1>
        
        {
          this.state.toDoList.map((toDoItem, index) => {
            return (
              <div key={index}>
                <h3>Job: {toDoItem.name}</h3>
                <h3>Responsibility: {toDoItem.user}</h3>
                <EditButton getAllFlats={this.getAllFlats} id={toDoItem._id} name={toDoItem.name} user={toDoItem.user} pathPage="todo" />
                <button onClick={this.handleDeleteSubmit} value={toDoItem._id}  type="submit">Delete</button>
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
