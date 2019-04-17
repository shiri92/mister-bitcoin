import React, { Component } from "react";
import MovesList from "../cmps/MovesList.js";
import { withRouter } from 'react-router-dom';



class HomePage extends Component {
  state = {
    bitRate: 0,
    user: {}
  };
  async componentWillMount() {
    await this.props.store.queryLoggedUser();
    let user = this.props.store.loggedUser;
    if (user) {
      this.setState({ user: user }, async () => {
        let rate = await this.props.store.getRate(user.coins)
        this.setState({ bitRate: rate });
      });
    } else {
      this.props.history.push('/signup');
    }
  }

  getRate = async () => {
    return this.props.store.getRate(this.state.user.coins);
  }

  render() {
    return (
      <div className="HomePage">
        <h1>Hello {this.state.user && this.state.user.name}!</h1>
        <h2>Coins: {this.state.user && this.state.user.coins}</h2>
        <h2>BTC: {this.state.bitRate > 0 && this.state.bitRate}</h2>
        {this.state.user && <MovesList user={this.state.user}></MovesList>}
      </div>
    );
  }
}

export default withRouter(HomePage);
