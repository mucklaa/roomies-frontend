import React, { Component } from "react";
import EditToDo from "./../edits/EditToDo"
import EditShopping from "./../edits/EditShopping"
import EditBill from "./../edits/EditBill"
import EditProfile from "./../edits/EditProfile"
import { withAuth } from "../../lib/AuthProvider";


class EditButton extends Component {
    state = {
      isClicked: false,
      path: this.props.pathPage,
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
        {this.state.isClicked && this.state.path === 'profile' ? <EditProfile updateProfile={this.props.updateProfile} updateImage={this.props.updateImage} id={this.props.id} image={this.props.image} phone={this.props.phone} username={this.props.username} email={this.props.email} /> : null}
        <div>
          {
            //edit or x
            !this.state.isClicked ? <button onClick={this.handleOnClick}><img className="icon-logout" src="/edit.png" alt="Edit" height="20px"/></button>  : <button onClick={this.handleOnClick}>X</button>
          }
        </div>
      </div>

    );
  }
}

export default withAuth(EditButton);