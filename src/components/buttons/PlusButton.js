import React, { Component } from "react";
import PopupToDo from "./../popups/PopupToDo"
import PopupShopping from "./../popups/PopupShopping"
import PopupBill from "./../popups/PopupBill"

class PlusButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      path: this.props.pathPage
    }
  }

  handleOnClick = () => {
    let isClicked = this.state.isClicked
    this.setState( { isClicked: !isClicked } )
  }


  render() {
    return (
      <div>
        {this.state.isClicked && this.state.path === 'todo' ? <PopupToDo closeButton={this.handleOnClick} getAllFlats={this.props.getAllFlats} /> : null}
        {this.state.isClicked && this.state.path === 'shopping' ? <PopupShopping closeButton={this.handleOnClick} getAllFlats={this.props.getAllFlats} /> : null}
        {this.state.isClicked && this.state.path === 'bill' ? <PopupBill closeButton={this.handleOnClick} getAllFlats={this.props.getAllFlats}  /> : null}
        <div>
          {
            !this.state.isClicked ? <button className="plus-button" onClick={this.handleOnClick}>+</button> : <button className="plus-button plus-button-activated" onClick={this.handleOnClick}>X</button>
          }
        </div>
      </div>
    );
  }
}

export default PlusButton;
