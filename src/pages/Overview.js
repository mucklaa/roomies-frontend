import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import NavbarFooter from "./../components/NavbarFooter";
import DoughnutParent from './../components/DoughnutParent'

class Overview extends Component {
  state = { 
    splitBills: {},
    totalSum: 0,
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

  componentDidMount() {
    console.log(this.props.user.flat)
    axios.get(`http://localhost:5000/user/bills/${this.props.user.flat}/overview`)
      .then((apiResponse) => {
        console.log("overview api response:", apiResponse.data.totalSpent) 
        let splitBills = apiResponse.data.usersInfo
        let totalSum = apiResponse.data.totalSpent
        this.setState({splitBills: splitBills, totalSum, isTrue: true},
        (() => {
          document.querySelectorAll('#user-debt').forEach((element) => {
            this.state.datasets[0].data.push(element.innerHTML*1);
          });
          document.querySelectorAll('#flatmate').forEach((element) => {
            this.state.labels.push(element.innerHTML);
          });
        }))   
    })
}

  render() {
    return (
      <div>
        <h1>Overview</h1>
        <h2>Total Sum</h2>
        <h2>{this.state.totalSum}</h2>
          {
            Object.keys(this.state.splitBills).map((key, index) => {
              return <div key={index}><p id="flatmate" >{key}</p>
              {this.state.splitBills[key].hasToPay ?
              <div>
                <p>To Pay: </p>
                <p id="user-debt">{this.state.splitBills[key].amount} </p> </div>:
                <div><p>Gets: </p><p id="user-debt">{this.state.splitBills[key].amount} </p> </div>}
              </div> 
            })
          }
          {console.log(this.state.datasets)}
        {this.state.isTrue ? <DoughnutParent datasets={this.state.datasets} labels={this.state.labels} /> : console.log("jerw") }
        <NavbarFooter />
      </div>

    );
  }
}



export default withAuth(Overview);

