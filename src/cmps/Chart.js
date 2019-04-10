import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";


export default class Chart extends Component {
  render() {
    const { chartName } = this.props;
    const { chartData } = this.props;
    const chartColor = 'black';
    return (
      <div className="StatisticPage">
        <h1>{chartName} Chart</h1>
        <Sparklines data={chartData}
          limit={chartData.length}
          width={100}
          height={20}
          margin={5}>
          <SparklinesLine
            style={{ fill: "none" }}
            color={chartColor} />
        </Sparklines>
      </div>
    );
  }
}
