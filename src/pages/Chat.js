import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"

class Chat extends Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Chat);
