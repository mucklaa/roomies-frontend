import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import PlusButton from "./../components/buttons/PlusButton";
import EditButton from "./../components/buttons/EditButton";
import Logout from "./../components/buttons/LogoutButton";
import shoppingService from "./../lib/shopping-services";

class Shopping extends Component {
  state = {
    flat: {},
    pathPage: 'shopping',
    shoppingList: []
  }

  getAllFlats = () => {
    shoppingService.getFlat(this.props.user.flat)
      .then((apiResponse) => {
        this.setState({ 
          flat: apiResponse.data,
          pathPage: 'shopping',
          shoppingList: apiResponse.data.shoppingList
        })
      })
  }

  handleDeleteSubmit = event => {
    event.preventDefault();
    const itemID = event.target.value
    shoppingService.deleteItem(itemID)
      .then(() => this.setState( { state: this.getAllFlats() } ));
   }
  
  componentDidMount() {
    this.getAllFlats()
  }

  render() {
    return (
      <div id="main-body">
        <Logout />
        <div className="header">
          <h1 className="header-h1">Shopping</h1>
        </div>
        <div className="margin-from-fixed-header">
        {
          this.state.shoppingList.map((shoppingItem, index) => {
            return (
                <div key={index} className="card-container to-do-card-container">
                  <div className="flex-row">
                    <div className="initials">
                      <h4>{shoppingItem.amount}</h4>
                    </div>
                    <h4>{shoppingItem.name}</h4>
                  </div>
                  <div className="flex-row">
                    <EditButton getAllFlats={this.getAllFlats} id={shoppingItem._id} amount={shoppingItem.amount} name={shoppingItem.name} pathPage="shopping" />
                    <button className="button-transparent" onClick={this.handleDeleteSubmit} value={shoppingItem._id}  type="submit"><img src="/delete2.png" width="20px" alt="Delete" /></button>
                  </div>
              </div>
            )
          })
        }
        </div>
        <PlusButton getAllFlats={this.getAllFlats} pathPage={this.state.pathPage}/>
        <NavbarFooter pathPage={this.state.pathPage} />
      </div>
    );
  }
}

export default withAuth(Shopping);
