import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import PlusButton from "./../components/buttons/PlusButton"

class Shopping extends Component {
  state = {
    shoppingArray: this.props,
    pathPage: 'shopping'
  }

  render() {
    return (
      <div>
        <h1>Shopping</h1>
        {/* {
          this.state.shoppingArray.map((shoppingItem) => {
            return (
              <div>
                <h3>{shoppingItem.amount}</h3>
                <h3>{shoppingItem.name}</h3>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            )
          })
        } */}
        <PlusButton pathPage={this.state.pathPage}/>
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Shopping);
