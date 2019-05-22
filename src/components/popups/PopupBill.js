import React, { Component } from "react";

class PopupBill extends Component {
  state = {
    name: '',
    price: '',
    image: ''
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
            <label>Name</label>
            <input value={this.state.name} type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            <label>Price</label>
            <input value={this.state.price} type="number" name="price" onChange={this.handleChange} />
          </div>
          <div>
            <input class="input btn" type='file' name='image' />
          </div>
          <div>
            <input type="submit" value="Add"/>
          </div>
      </form>

      </div>

    );
  }
}

export default PopupBill;
