import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class NavbarFooter extends Component {
  render() {
    return (
      <div class="navbar-container">
        <Link to="/to-do" class="icon-nav"><img src="/to-do.png" alt="To-Do" width="25px"/></Link>
        <Link to="/shopping" class="icon-nav"><img src="/shopping.png" alt="To-Do" width="25px"/></Link>
        <Link to="/profile" class="icon-nav"><img src="/user-nav.png" alt="To-Do" width="25px"/></Link>
        <Link to="/chat" class="icon-nav"><img src="/chat.png" alt="To-Do" width="25px"/></Link>
        <Link to="/bills" class="icon-nav"><img src="/money.png" alt="To-Do" width="25px"/></Link>
      </div>
    );
  }
}

export default withAuth(NavbarFooter);
