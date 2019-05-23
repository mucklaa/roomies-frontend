import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"
import EditButton from "./../components/buttons/EditButton";
import billAuth from "./../lib/bill-services";
import axios from "axios";


class Bill extends Component {
  state = {
    flat: {},
    pathPage: 'bill',
    billList: []
  }


  getAllFlats = () =>{
    const flatID = this.props.user.flat
    billAuth.getFlat(flatID)
      .then((apiResponse) => {
          this.setState({ 
            flat: apiResponse.data,
            pathPage: 'bill',
            billList: apiResponse.data.billsList
        })
    })
  }

  handleDeleteSubmit = (event) => {
    event.preventDefault();
      let itemID = event.target.value
      axios.delete('http://localhost:5000/user/bills/delete', {data: {itemID}})
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
        <h1>Expenses</h1>
        {
          this.state.billList.map((billItem, index) => {
            return (
              <div key={index}>
                <h3>Name: {billItem.name}</h3>
                <h3>Price: {billItem.price}</h3>
                <h3>Currency: {billItem.currency}</h3>
                <h3>User: {billItem.user}</h3>
                <EditButton getAllFlats={this.getAllFlats} id={billItem._id} currency={billItem.currency} user={billItem.user} name={billItem.name} price={billItem.price} pathPage="bill" />
                <button onClick={this.handleDeleteSubmit} value={billItem._id}  type="submit">Delete</button>
              </div>
            )
          })
        }
        <PlusButton getAllFlats={this.getAllFlats}  pathPage={this.state.pathPage} />
        <NavbarFooter />
      </div>

    );
  }
}

export default withAuth(Bill);