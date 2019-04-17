import React, { Component } from "react";
import "./App.scss";
import { HashRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";
// import UserService from "../src/services/UserService.js";
import { observer } from 'mobx-react';
import AppStore from '../src/store/AppStore.js';


// Pages
import HomePage from "../src/pages/HomePage";
import ContactPage from "../src/pages/ContactPage.js";
import ContactDetailsPage from "../src/pages/ContactDetailsPage.js";
import StatisticPage from "../src/pages/StatisticPage.js";
import ContactEditPage from '../src/pages/ContactEditPage.js';
import SignupPage from '../src/pages/SignupPage.js';


class App extends Component {
  state = {
    isLogin: false
  }
  async componentWillMount() {
    await AppStore.queryLoggedUser();
    let user = AppStore.loggedUser;
    // let user = await UserService.getUser();
    this.setState({ isLogin: user ? true : false });
    // console.log('after')
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="links-container">
            <NavLink
              className="Nav_link"
              exact activeClassName="activeRoute"
              to="/">
              Home
          </NavLink>{" "}
            |
          <NavLink
              className="Nav_link"
              exact activeClassName="activeRoute"
              to="/contact"
            >
              Contacts
          </NavLink>{" "}
            |
          <NavLink
              className="Nav_link"
              exact activeClassName="activeRoute"
              to="/statistic"
            >
              Statistic
          </NavLink> |
            <NavLink
              className="Nav_link"
              exact activeClassName="activeRoute"
              to="/signup"
            >
              Sign up
          </NavLink>
          </div>
          <Switch>
            <Route exact path="/" render={props => <HomePage {...props} store={AppStore} />} />
            <Route exact path="/contact" render={props => <ContactPage {...props} store={AppStore} />} />
            {/* <Route exact path="/contact" render={() => this.state.isLogin ? (<ContactPage />) : (<Redirect to="/signup" />)} /> */}
            <Route exact strict path="/contact/edit/:id?" render={props => this.state.isLogin ? (<ContactEditPage {...props} store={AppStore} />) : (<Redirect to="/signup" />)} />
            <Route exact strict path="/contact/:id" render={props => this.state.isLogin ? (<ContactDetailsPage {...props} store={AppStore} />) : (<Redirect to="/signup" />)} />
            <Route exact path="/statistic" render={props => this.state.isLogin ? (<StatisticPage {...props} />) : (<Redirect to="/signup" />)} />
            <Route path="/signup" render={props => <SignupPage {...props} store={AppStore} />} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default observer(App);
