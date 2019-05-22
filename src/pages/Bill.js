import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"


class ToDo extends Component {
  state = {
    billsArray: this.props,
    pathPage: 'bill'
  }

  render() {
    return (
      <div>
        <h1>Expenses</h1>
        {/* {
          this.state.billsArray.map((billItem) => {
            return (
              <div>
                <h3>{billItem.name}</h3>
                <h3>{billItem.price}</h3>
                <h3>{billItem.user.username}</h3>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            )
          })
        } */}
        <PlusButton pathPage={this.state.pathPage} />
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(ToDo);