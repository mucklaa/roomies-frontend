import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class NavbarFooter extends Component {
  render() {
    return (
      <div>
        <Link to="/to-do">To-Do</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/bills">Bills</Link>
      </div>
    );
  }
}

export default withAuth(NavbarFooter);
