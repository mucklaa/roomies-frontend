import React, { Component } from "react";
import EditToDo from "./../edits/EditToDo"
import EditShopping from "./../edits/EditShopping"
import EditBill from "./../edits/EditBill"
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
    return (
      <div>
        {this.state.isClicked && this.state.path === 'todo' ? <EditToDo getAllFlats={this.props.getAllFlats} name={this.props.name} id={this.props.id} user={this.props.user}/> : null}
        {this.state.isClicked && this.state.path === 'shopping' ? <EditShopping getAllFlats={this.props.getAllFlats} amount={this.props.amount} id={this.props.id} name={this.props.name} /> : null}
        {this.state.isClicked && this.state.path === 'bill' ? <EditBill getAllFlats={this.props.getAllFlats} id={this.props.id} currency={this.props.currency} user={this.props.user} name={this.props.name} price={this.props.price} /> : null}

        <div>
          {
            !this.state.isClicked ? <button onClick={this.handleOnClick}>Edit</button>  : <button onClick={this.handleOnClick}>X</button>
          }
          
          
        </div>
      </div>

    );
  }
}

export default withAuth(EditButton);