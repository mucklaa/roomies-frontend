import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import PlusButton from "./../components/buttons/PlusButton";
import EditButton from "./../components/buttons/EditButton";
import shoppingAuth from "./../lib/shopping-services";
import axios from "axios";

class Shopping extends Component {
  state = {
    flat: {},
    pathPage: 'shopping',
    shoppingList: []
  }

  getAllFlats = () =>{
    shoppingAuth.getFlat(this.props.user.flat)
    .then((apiResponse) => this.setState({ 
      flat: apiResponse.data,
      pathPage: 'shopping',
      shoppingList: apiResponse.data.shoppingList
    }))
  }

  handleDeleteSubmit = (event) => {
    event.preventDefault();
      let itemID = event.target.value
      axios.delete('http://localhost:5000/user/shopping/delete', {data: {itemID}})
        .then(response => {
          this.setState({state: this.getAllFlats()})
        });
   }
  
  componentDidMount() {
    this.getAllFlats()
  }

  render() {
    return (
      <div>
        <h1>Shopping</h1>
        {
          this.state.shoppingList.map((shoppingItem, index) => {
            return (
              <div key={index}> 
                <h3>{shoppingItem.amount}</h3>
                <h3>{shoppingItem.name}</h3>
                <EditButton getAllFlats={this.getAllFlats} id={shoppingItem._id} amount={shoppingItem.amount} name={shoppingItem.name} pathPage="shopping" />
                <button onClick={this.handleDeleteSubmit} value={shoppingItem._id}  type="submit">Delete</button>
              </div>
            )
          })
        }
        <PlusButton getAllFlats={this.getAllFlats} pathPage={this.state.pathPage}/>
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Shopping);
