import React, { Component } from "react";
import "./App.scss";
import HomePage from "../src/pages/HomePage";
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import ContactPage from "../src/pages/ContactPage.js";
import ContactDetailsPage from "../src/pages/ContactDetailsPage.js";
import StatisticPage from "../src/pages/StatisticPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <NavLink className="Nav_link" activeClassName="activeRoute" to="/">
            Home
          </NavLink>{" "}
          |
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            to="/contact"
          >
            Contacts
          </NavLink>{" "}
          |
          <NavLink
            className="Nav_link"
            activeClassName="activeRoute"
            to="/statistic"
          >
            Statistic
          </NavLink>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/statistic" component={StatisticPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
