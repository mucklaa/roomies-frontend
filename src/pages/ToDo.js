import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"

class ToDo extends Component {
  state = {
    todoArray: this.props,
    pathPage: "todo"
  }

  render() {
    return (
      <div>
        <h1>To-Do's</h1>
       
        <PlusButton pathPage={this.state.pathPage} />
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(ToDo);
