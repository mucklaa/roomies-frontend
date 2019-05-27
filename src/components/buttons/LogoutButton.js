import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

//profileAuth for getting User
class Logout extends Component {
 

  render() {
    const { logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <div className="logout-container">
            <button className="logoutButton" onClick={logout}><img className="icon-logout" src="/logout-button.png" height="20px"/></button>
          </div>
        ) : null
        }
      </div>
    );
  }
}

export default withAuth(Logout);
