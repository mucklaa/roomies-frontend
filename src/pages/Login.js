import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
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
      <img src="/logo4png Kopie.png" alt=""/>
      <h1>Login</h1>
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
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
