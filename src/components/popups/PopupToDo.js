import React, { Component } from "react";

class PopupToDo extends Component {
  state = {
    job: '',
    username: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    this.setState( { [name]: value } )
  }

  // handleFormSubmit = (event) => {
  //   let todo = this.state
  //   axios.post('/endpoint', {todo})
  //     .then(response => {
  //       console.log(response)
  //     });
  //   this.setState({ job: '', username: '' })
  // }

  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Job</label>
            <input value={this.state.job} type="text" name="job" onChange={this.handleChange} />
          </div>
          <div>
            <label>Name</label>
            <input value={this.state.username} type="text" name="username" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>

      </div>

    );
  }
}

export default PopupToDo;
