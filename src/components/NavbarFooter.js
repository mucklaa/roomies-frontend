import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class NavbarFooter extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Link to="/to-do" className="icon-nav"><img src="/to-do.png" alt="To-Do" width="25px"/></Link>
        <Link to="/shopping" className="icon-nav"><img src="/shopping.png" alt="To-Do" width="25px"/></Link>
        <Link to="/profile" className="icon-nav"><img src="/user-nav.png" alt="To-Do" width="25px"/></Link>
        <Link to="/chat" className="icon-nav"><img src="/chat.png" alt="To-Do" width="25px"/></Link>
        <Link to="/bills" className="icon-nav"><img src="/money.png" alt="To-Do" width="25px"/></Link>
      </div>
    );
  }
}

export default withAuth(NavbarFooter);
