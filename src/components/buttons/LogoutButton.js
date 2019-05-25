import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

//profileAuth for getting User
class Logout extends Component {
 

  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div class="logout-container">
            <button className="logoutButton" onClick={logout}>Logout</button>
          </div>
        ) : null
        }
      </div>
    );
  }
}

export default withAuth(Logout);
