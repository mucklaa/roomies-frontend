import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    billList: [],
    seeDetails: false,
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

   handleChange = (event) => {
    event.preventDefault();
    this.setState( { seeDetails: !this.state.seeDetails } )
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
                {
                  (billItem.image === '') ? null : <Link to={{ pathname: '/bills/detail', state: { image: billItem }}}>See Image</Link>
                }
                <EditButton getAllFlats={this.getAllFlats} id={billItem._id} currency={billItem.currency} user={billItem.user} name={billItem.name} price={billItem.price} pathPage="bill" />
                <button onClick={this.handleDeleteSubmit} value={billItem._id}  type="submit">Delete</button>
              </div>
            )
          })
        }
        <PlusButton getAllFlats={this.getAllFlats}  pathPage={this.state.pathPage} />
        <Link to="bills/overview">See Overview</Link>
        <NavbarFooter />
      </div>
    );
  }
}

export default withAuth(Bill);