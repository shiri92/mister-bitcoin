import React, { Component } from "react";
// import BitcoinService from "../services/BitcoinService.js";
import Chart from '../cmps/Chart.js';

export default class StatisticPage extends Component {
  state = {
    marketPriceData: [],
    marketPriceName: '',
    transactionsData: [],
    transactionsName: ''
  };
  async componentWillMount() {
    let resMarketPrice = await this.props.store.getMarketPrice();
    // let res = await BitcoinService.getMarketPrice()
    this.setState({ marketPriceData: resMarketPrice.data.values.map(value => value.y) });
    this.setState({ marketPriceName: resMarketPrice.data.name });

    let resConfTrans = await this.props.store.getConfirmedTransactions();
    // let rres = await BitcoinService.getConfirmedTransactions()
    this.setState({ transactionsData: resConfTrans.data.values.map(value => value.y) });
    this.setState({ transactionsName: resConfTrans.data.name });
  }

  render() {
    return (
      <div className="StatisticPage">
        <h1>Statistic</h1>
        <Chart
          chartData={this.state.marketPriceData && this.state.marketPriceData}
          chartName={this.state.marketPriceName && this.state.marketPriceName}>
        </Chart>
        <Chart
          chartData={this.state.transactionsData && this.state.transactionsData}
          chartName={this.state.transactionsName && this.state.transactionsName}>
        </Chart>
      </div>
    );
  }
}
