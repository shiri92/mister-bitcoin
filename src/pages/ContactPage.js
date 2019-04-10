import React, { Component } from "react";
import ContactList from "../cmps/ContactList.js";
import ContactService from "../services/ContactService.js";
import ContactFilter from "../cmps/ContactFilter.js";


export default class ContactPage extends Component {
  state = {
    contacts: []
  };
  async componentWillMount() {
    let contacts = await ContactService.getContacts();
    this.setState({ contacts: contacts });
  }

  contactsFilter = async (filterBy) => {
    let contacts = await ContactService.getContacts(filterBy);
    this.setState({ contacts: contacts });
  }

  render() {
    return (
      <div className="ContactPage">
        <ContactFilter filter={this.contactsFilter}></ContactFilter>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
