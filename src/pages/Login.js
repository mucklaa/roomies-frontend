import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import './../css/Login.css';


// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
 
// const responseGoogle = (response) => {
//   console.log(response);
// }

// const responseFacebook = (response) => {
//   console.log(response);
// }

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div id="body-login">
        <img className="logo-login" src="/logo-login.png" alt=""/>
        <h1 className="login-h1">Join your flat!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputLogin">
          <label className="labelIcon"><img className="icon-login" src="/User_Login.png" height="20px"/></label>
          <input className="input-login"
            type="text"
            name="username"
            placeholder= "Username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <br />
          <div className="inputLogin">
          <label className="labelIcon"><img className="icon-login" src="/lock_login.png" height="20px"/></label>
          <input className="input-login"
            type="password"
            name="password"
            placeholder= "Password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
          <button className="button-login" type="submit" value="Login">Login</button>
        </form>
      
        {/* <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        /> */}
        <div class="login-flex-row">
          <p className="login-p">Don't have an account?</p>
          <Link className="login-link" to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
