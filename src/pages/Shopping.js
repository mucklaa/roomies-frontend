import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import PlusButton from "./../components/buttons/PlusButton";
import shoppingAuth from "./../lib/shopping-services";
import EditButton from "./../components/buttons/EditButton";




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
                <button>Delete</button>
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
