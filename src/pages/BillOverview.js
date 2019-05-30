import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import DoughnutParent from './../components/DoughnutParent';
import billService from "./../lib/bill-services";
import { Link } from "react-router-dom";
import Logout from "./../components/buttons/LogoutButton";

class Overview extends Component {
  state = { 
    payers: 0,
    usersInfo: {},
    totalSpent: 0,
    pathPage: "bill-overview",
    debtDatas: [],
    flatmates: [],
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(128, 242, 183)',
        'rgb(75, 192, 192)',
        'rgb(255, 206, 86)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(54, 162, 235)',
        'rgb(204, 255, 64)',
        'rgb(64, 159, 255)',
        'rgb(175, 64, 255)'
      ]
    }],
    isVisible: false
  };

  goToPayPal(payPalMeUsername, currency, amount) {
   // window.location.href = `https://www.paypal.com/myaccount/transfer/send/external/ppme?profile=${payPalMeUsername}&currencyCode=${currency}&amount=${amount}&flowType=send`
   window.location.href = `https://www.paypal.com/myaccount/transfer/send/external/ppme?profile=${payPalMeUsername}&currencyCode=${currency}&flowType=send`
  }

  componentDidMount() {
    billService.getOverview(this.props.user.flat)
      .then((apiResponse) => {
        const { usersInfo, totalSpent } = apiResponse.data
        this.setState({ usersInfo, totalSpent, isVisible: true }, () => {
          Object.keys(usersInfo).forEach((element) => {
            if (usersInfo[element].paid > 0) {
              this.state.labels.push(element);
              this.state.datasets[0].data.push(usersInfo[element].paid)
            }
          })
        })
    })
  }

  render() {
    return (
      <div>
        <Link className="back-button" to={"/bills"}><img src="/back-button.png" alt="back" width="20px"/></Link>
        <Logout />
        <div className="header">
          <h1 className="header-h1">Invoice Overview</h1>
        </div>
        <div className="margin-from-fixed-header">
          <div className="card-container to-do-card-container">
          <h2>Total</h2>
          <h2>{this.state.totalSpent} €</h2>
          </div>
          { this.state.isVisible ? <DoughnutParent datasets={this.state.datasets} labels={this.state.labels} /> : null }
          
          <div className="card-container to-do-card-container overflow">
          <div className="flex-column">
          <h3>Pays</h3>
            {
              Object.keys(this.state.usersInfo).map((key, index) => {
                const { amount, currency, hasToPay, payPalMeUsername } =  this.state.usersInfo[key]
                return (
                <div key={index}>
                  {
                    hasToPay ?
                    <div className="card-container bills-overview-container">
                      <div>
                        <p id="user-pays">{key} <br/> {amount} {currency}</p>
                      </div>
                    </div>
                    :
                    null
                  }
                </div>
                ) 
              })
            }
            <h3>Gets</h3>
            {
              Object.keys(this.state.usersInfo).map((key, index) => {
                const { amount, currency, hasToPay, payPalMeUsername } =  this.state.usersInfo[key]
                return (
                <div key={index}>
                  {
                    !hasToPay ?
                    <div className="card-container bills-overview-container">
                      <div>
                        <p id="user-gets">{key}<br/> {amount} {currency} <br/> { payPalMeUsername ? <button className="pay-button" onClick={ () => { this.goToPayPal(payPalMeUsername, currency, amount) } }>Send money</button> : <button className="info-hover pay-button" disabled>Send money<span className="tooltiptext">No PaypalMe stored</span></button> } </p>
                      </div>
                    </div>
                    :
                    null
                  }
                </div>
                ) 
              })
            }
            </div>
            <NavbarFooter pathPage={this.state.pathPage} />
            </div>
          </div>
      </div>
    );
  }
}

export default withAuth(Overview);
