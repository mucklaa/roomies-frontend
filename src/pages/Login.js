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
      <div>
        <img className="logo-login" src="/logo4png Kopie.png" alt=""/>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputLogin">
          <label className="labelIcon"><img className="icon-login" src="/User_Login.png" height="20px"/></label>
          <input
            type="text"
            name="username"
            placeholder= "Username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <br />
          <label></label>
          <input
            type="password"
            name="password"
            placeholder= "Password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" value="Login">Login</button>
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
        
        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default withAuth(Login);
