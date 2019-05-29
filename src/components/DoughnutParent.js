import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Doughnut } from 'react-chartjs-2';

class DoughnutParent extends Component {
  state = {
      labels: this.props.labels,
      datasets: this.props.datasets ,
      options: {
        legend: {
            display: true,
            labels: {
                fontColor: "black"
            }
        }
      }
    }

  componentDidMount() {
    this.setState({})
  }

  render() {
    return (
      <div>
        <Doughnut 
          ref={ (reference) => this.chartReference = reference }
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          options={ this.state.options }     
        />  
      </div>
    );
  }
}

export default withAuth(DoughnutParent);
