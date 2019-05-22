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
      //path: this.props.location.pathname
    }
  }
  

  handleOnClick = () => {
    let isClicked = this.state.isClicked
    this.setState( { isClicked: !isClicked } )
  }

  render() {
    return (
      <div>
        {this.state.isClicked && this.state.path === 'todo' ? <PopupToDo /> : null}
        {this.state.isClicked && this.state.path === 'shopping' ? <PopupShopping /> : null}
        {this.state.isClicked && this.state.path === 'bill' ? <PopupBill /> : null}

        <div>
          <button onClick={this.handleOnClick}>+</button> 
        </div>
      </div>

    );
  }
}

export default PlusButton;



