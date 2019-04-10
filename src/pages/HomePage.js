import React, { Component } from "react";
import UserService from "../services/UserService.js";
import BitcoinService from "../services/BitcoinService.js";

export default class HomePage extends Component {
  state = {
    bitRate: 0,
    user: {}
  };
  async componentWillMount() {
    let user = await UserService.getUser()
    this.setState({ user: user }, async () => {
      let rate = await BitcoinService.getRate(user.coins)
      this.setState({ bitRate: rate });
    });
  }
  render() {
    return (
      <div className="HomePage">
        <h1>Hello {this.state.user && this.state.user.name}!</h1>
        <h2>Coins: {this.state.user && this.state.user.coins}</h2>
        <h2>BTC: {this.state.bitRate > 0 && this.state.bitRate}</h2>
      </div>
    );
  }
}
