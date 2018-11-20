import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      xVariable: 'sport',
    };
  }
  componentDidMount() {
    d3.csv('data/medalists.csv', (err, data) => {
      this.setState({data: data});
    })
  }

  render() {
    let chartData = d3.nest()
      .key((d) => d[this.state.xVariable])
      .rollup((d) => d.length)
      .entries(this.state.data);
    console.log('chart data', chartData);
    return(
      <div className="container">
        <div>
          <BarChart width={730} height={250} data={chartData}/>
        </div>
      </div>
    );
  }
}

export default App;
