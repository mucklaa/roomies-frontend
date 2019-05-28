import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class NavbarFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
    pathPage: props.pathPage
  }
}


  render() {
    const pathPage = this.state.pathPage
    return (
      <div className="navbar-container">
        <Link to="/to-do" className="icon-nav"> { (pathPage !== 'todo') ? <img src="/to-do.png" alt="To-Do" width="25px"/> : <img src="/to-do-bold.png" alt="To-Do" width="25px"/>}</Link>
        <Link to="/shopping" className="icon-nav"> { (pathPage !== 'shopping') ? <img src="/shopping.png" alt="Shopping" width="25px"/> : <img src="/shopping-bold.png" alt="Shopping" width="25px"/>}</Link>
        <Link to="/profile" className="icon-nav"> { (pathPage !== 'profile') ? <img src="/user-nav.png" alt="Profile" width="25px"/> : <img src="/user-nav-bold.png" alt="Profile" width="25px"/>}</Link>
        <Link to="/chat" className="icon-nav"> { (pathPage !== 'chat') ? <img src="/chat.png" alt="Chat" width="25px"/> : <img src="/chat-bold.png" alt="Chat" width="25px"/>}</Link>
        <Link to="/bills" className="icon-nav"> { (pathPage !== 'bill') ? <img src="/money.png" alt="Bills" width="25px"/> : <img src="/money-bold.png" alt="Bills" width="25px"/>}</Link>
      </div>
    );
  }
}

export default withAuth(NavbarFooter);
