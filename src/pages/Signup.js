import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
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

      console.log(this.state.isAdmin)
    })
  }

  render() {
    const { username, password, email, flatAttribute} = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
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
          <select name="isAdmin" onChange={this.handleSelect}>
            <option value={false}>Join</option>
            <option value={true}>Create</option> 
          </select>

          { this.state.isAdmin ? 
          <div>
           <label>Flatname:</label>
          <input
            type="text"
            name="flatAttribute"
            value={flatAttribute}
            onChange={this.handleChange}
          />
          </div>
            :
          <div>
           <label>Invitation Code:</label>
          <input
            type="text"
            name="flatAttribute"
            value={flatAttribute}
            onChange={this.handleChange}
          />
          </div>
            
            }

          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
