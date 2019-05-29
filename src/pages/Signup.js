import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './../css/Signup.css';

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    isAdmin: false,
    flatAttribute: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, username, password, isAdmin, flatAttribute } = this.state;
    this.props.signup({ email, username, password, isAdmin, flatAttribute });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelect = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({[name]: value}, () => {
    })
  }

  render() {
    const { username, password, email, flatAttribute} = this.state;
    return (
      <div id="body-signup">
        <Link to={"/login"}><img src="/back-button.png" alt="back" width="20px"/></Link>
        <div id="signup-flex-column">
          <img className="logo-login" src="/roomies-logo2.png" alt=""/>
          <h1 className="login-h1">Join your flat!</h1>
            <form onSubmit={this.handleFormSubmit}>
            <div className="inputLogin">
              <label className="labelIcon"><img className="icon-login" src="/mail_login.png" alt="Email" height="20px"/></label>
                <input className="input-login"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="inputLogin">
              <label className="labelIcon"><img className="icon-login" src="/User_Login.png" alt="Username" height="20px"/></label>
              <input className="input-login"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="Username"
              />
              </div>
              <br />
              <div className="inputLogin">
              <label className="labelIcon"><img className="icon-login" src="/lock_login.png" alt="Password" height="20px"/></label>
              <input className="input-login"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
              <br />
              <div>
              <select className="select-signup" name="isAdmin" onChange={this.handleSelect}>
                <option value={false}>Join a flat</option>
                <option value={true}>Create a new flat</option> 
              </select>
              </div>

              { this.state.isAdmin ? 
                <div>
                  <h5 className="signup-h5">Flatname:</h5>
                  <div className="inputLogin">
                  <label className="labelIcon"><img className="icon-login" src="/house-login.png" alt="Flatname" height="20px"/></label>
                  <input className="input-login"
                    type="text"
                    name="flatAttribute"
                    value={flatAttribute}
                    onChange={this.handleChange}
                    placeholer="Flatname"
                  />
                  </div>
                </div>
                  :
                <div>
                  <h5 className="signup-h5">Invitation Code:</h5>
                  <div className="inputLogin">
                  <label className="labelIcon"><img className="icon-login" src="/house-login.png" alt="Invitation Code" height="20px"/></label>
                  <input className="input-login"
                    type="text"
                    name="flatAttribute"
                    value={flatAttribute}
                    onChange={this.handleChange}
                    placeholer="Invitation Code"
                  />
                  </div>
                </div>
                }
              <button className="button-login" type="submit" value="Signup" >Sign Up</button>
            </form>
            <div className="login-flex-row">
              <p className="login-p"> Already have account?</p>
              <Link className="login-link" to={"/login"}> Login</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
