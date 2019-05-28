import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter"
import PlusButton from "./../components/buttons/PlusButton"
import EditButton from "./../components/buttons/EditButton";
import Logout from "./../components/buttons/LogoutButton";
import billService from "./../lib/bill-services";


class Bill extends Component {
  state = {
    flat: {},
    pathPage: 'bill',
    billList: [],
    seeDetails: false,
  }


  getAllFlats = () =>{
    const flatID = this.props.user.flat
    billService.getFlat(flatID)
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
      const itemID = event.target.value
      billService.deleteBill(itemID)
        .then(() => this.setState({state: this.getAllFlats()}));
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
      <div id="main-body">
      <Logout />
        <div className="header">
          <h1 className="header-h1">Expenses</h1>
        </div>
        {
          this.state.billList.map((billItem, index) => {
            return (
              <div className="card-container to-do-card-container" key={index}>
                <div className="flex-row">
                  <div className="initials">
                <h4 className="to-do-h4">{billItem.user[0]}</h4>
                  </div>
                <h4>{billItem.name}</h4>
                </div>
                <h4>{billItem.price} {billItem.currency}</h4>
                <div className="flex-row">  
                {
                  (billItem.image === '') ? null : <Link className="bill-image-link" to={{ pathname: '/bills/detail', state: { image: billItem }}}><img className="img-bill" src="/camera-black.png" height="22px" alt="Invoice" /></Link>
                }
                <EditButton getAllFlats={this.getAllFlats} id={billItem._id} currency={billItem.currency} user={billItem.user} name={billItem.name} price={billItem.price} pathPage="bill" />
                <button onClick={this.handleDeleteSubmit} value={billItem._id}  type="submit"><img src="/delete2.png" width="20px" alt="Delete"></img></button>
              </div>
              </div>
            )
          })
        }
        <PlusButton getAllFlats={this.getAllFlats}  pathPage={this.state.pathPage} />
        <div className="overview-button">
          <Link className="overview-link" to="bills/overview">See Overview</Link>
        </div>
        <NavbarFooter />
      </div>
    );
  }
}

export default withAuth(Bill);