import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Doughnut } from 'react-chartjs-2';

class DoughnutParent extends Component {
  constructor(props){
    super(props);
    this.state={
      labels: props.labels,
      datasets: props.datasets ,
      options: {
        legend: {
            display: true,
            labels: {
                fontColor: "black"
            }
        }
      }
    }
  }

  componentDidMount() {
    //console.log(this.chartReference); // returns a Chart.js instance reference
    this.setState({})
  }

  render() {
    return (
      <div>
        <Doughnut ref={(reference) => this.chartReference = reference }
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          options={this.state.options}     
        />  
      </div>
    );
  }
}

export default withAuth(DoughnutParent);
