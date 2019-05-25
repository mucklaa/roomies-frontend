import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";


class BillDetail extends Component {
  constructor(props){
    super(props);
    this.state={
     image: props.location.state.image.image
      }
    }
  
  render() {
    return (
      <div>
      <img src={this.state.image} alt="img"/>
      </div>
    );
  }
}

export default withAuth(BillDetail);