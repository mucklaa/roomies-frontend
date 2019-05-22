import React, { Component } from "react";
import EditToDo from "./../popups/PopupToDo"
import EditShopping from "./../edits/EditShopping"
import EditBill from "./../popups/PopupBill"
import { withAuth } from "../../lib/AuthProvider";


class EditButton extends Component {
    state = {
      isClicked: false,
      path: this.props.pathPage,
      //path: this.props.location.pathname
    }
  
  

  handleOnClick = () => {
    let isClicked = this.state.isClicked
    this.setState( { isClicked: !isClicked } )
  }

  render() {
    console.log('editButton',this.props.pathPage)
    return (
      <div>
        {this.state.isClicked && this.state.path === 'todo' ? <EditToDo /> : null}
        {this.state.isClicked && this.state.path === 'shopping' ? <EditShopping getAllFlats={this.props.getAllFlats} amount={this.props.amount} name={this.props.name} /> : null}
        {this.state.isClicked && this.state.path === 'bill' ? <EditBill /> : null}

        <div>
          <button onClick={this.handleOnClick}>Edit</button> 
        </div>
      </div>

    );
  }
}

export default withAuth(EditButton);