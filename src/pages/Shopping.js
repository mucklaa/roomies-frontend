import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import PlusButton from "./../components/buttons/PlusButton";
import shoppingAuth from "./../lib/shopping-services";
import EditButton from "./../components/buttons/EditButton";
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
      let flatID = this.props.user.flat
      let itemName = event.target.value
      console.log(flatID)
      console.log(event.target.value)
      axios.delete('http://localhost:5000/user/shopping/delete', {data: {flatID, itemName}})
        .then(response => {
          console.log(response)
          this.setState({state: this.getAllFlats()})
          // this.setState({shoppingList: response})
        });
   }
  
  componentDidMount() {
    this.getAllFlats()
  }


  render() {
    return (
      <div>
        <h1>Shopping</h1>
        <h2>{this.state.flat.flatCode}</h2>
        {
          this.state.shoppingList.map((shoppingItem, index) => {
            return (
              <div key={index}> 
                <h3>{shoppingItem.amount}</h3>
                <h3>{shoppingItem.name}</h3>
                <EditButton getAllFlats={this.getAllFlats} amount={shoppingItem.amount} name={shoppingItem.name} pathPage="shopping" />
                <button onClick={this.handleDeleteSubmit} value={shoppingItem.name}  type="submit">Delete</button>
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
