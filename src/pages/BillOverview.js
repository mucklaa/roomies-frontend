import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import DoughnutParent from './../components/DoughnutParent';
import billService from "./../lib/bill-services";

class Overview extends Component {
  state = { 
    usersInfo: {},
    totalSpent: 0,
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
    window.location.href = `https://www.paypal.com/myaccount/transfer/send/external/ppme?profile=${payPalMeUsername}&currencyCode=${currency}&amount=${amount}&flowType=send`
  }

  componentDidMount() {
    billService.getAllBills(this.props.user.flat)
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
        <h1>Overview</h1>
        <h2>Total</h2>
        <h2>{this.state.totalSpent}</h2>
          {
            Object.keys(this.state.usersInfo).map((key, index) => {
              const { amount, currency, hasToPay, payPalMeUsername } =  this.state.usersInfo[key]
              return (
              <div key={index}>
                {
                  hasToPay ?
                  <div>
                    <p id="user-pays">{key} pays: {amount} { payPalMeUsername ? <button onClick={ () => { this.goToPayPal(payPalMeUsername, currency, amount) } }>Pay</button> : <button disabled>Pay</button> }</p>
                  </div>
                  :
                  <div>
                    <p id="user-gets">{key} gets: {amount}</p>
                  </div>
                }
              </div>
              ) 
            })
          }
        { this.state.isVisible ? <DoughnutParent datasets={this.state.datasets} labels={this.state.labels} /> : null }
        <NavbarFooter />
      </div>
    );
  }
}

export default withAuth(Overview);