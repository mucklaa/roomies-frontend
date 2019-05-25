import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import DoughnutParent from './../components/DoughnutParent'

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
    isTrue: false
  };

  goToPayPal(amount) {
    window.location.href = `https://www.paypal.com/myaccount/transfer/send/external/ppme?profile=RiccardoBassanelli&currencyCode=EUR&amount=${amount}&flowType=send`
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/user/bills/${this.props.user.flat}/overview`)
      .then((apiResponse) => {
        const { usersInfo, totalSpent } = apiResponse.data
        this.setState({ usersInfo, totalSpent, isTrue: true }, () => {
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
              return (
              <div key={index}>
                <p id="flatmate">{key}</p>
                {
                  this.state.usersInfo[key].hasToPay ?
                  <div>
                    <p id="user-pays">Pays: {this.state.usersInfo[key].amount}</p>
                    <button onClick={ () => { this.goToPayPal(this.state.usersInfo[key].amount) } }>Pay</button> 
                  </div>
                  :
                  <div>
                    <p id="user-gets">Gets: {this.state.usersInfo[key].amount}</p>
                  </div>
                }
              </div>
              ) 
            })
          }
        { this.state.isTrue ? <DoughnutParent datasets={this.state.datasets} labels={this.state.labels} /> : null }
        <NavbarFooter />
      </div>
    );
  }
}



export default withAuth(Overview);

