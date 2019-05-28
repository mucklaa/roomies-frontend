import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import NavbarFooter from "./../components/NavbarFooter";
import Logout from "./../components/buttons/LogoutButton";




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
        <Link class="back-button" to={"/bills"}><img src="/back-button.png" alt="back" width="20px"/></Link>
        <Logout />
        <div className="header">
          <h1 className="header-h1">Invoice</h1>
        </div>
        <div class="align-center">
        <img class="invoice-image" src={this.state.image} alt="img"/>
        <NavbarFooter />
      </div>
      </div>
    );
  }
}

export default withAuth(BillDetail);