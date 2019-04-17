import React, { Component } from "react";
import ContactList from "../cmps/ContactList.js";
import ContactFilter from "../cmps/ContactFilter.js";
import { Link } from "react-router-dom";
import AddIcon from '../assets/img/add.png';
import { observer } from 'mobx-react';


class ContactPage extends Component {
  state = {
    contacts: []
  };
  async componentWillMount() {
    await this.props.store.queryContacts();
    let contacts = this.props.store.contacts;
    this.setState({ contacts: contacts });
  }

  contactsFilter = async (filterBy) => {
    await this.props.store.queryContacts(filterBy);
    let contacts = this.props.store.contacts;
    this.setState({ contacts: contacts });
  }

  deleteContact = async (contactId) => {
    await this.props.store.deleteContact(contactId);
    let contacts = this.props.store.contacts;
    this.setState({ contacts: contacts });
  }

  render() {
    return (
      <div className="ContactPage">
        <div className="top-container">
          <Link className="link" to={`/contact/edit`}>
            <img src={AddIcon} alt="Add" />
          </Link>
          <ContactFilter filter={this.contactsFilter}></ContactFilter>
        </div>
        <ContactList delete={this.deleteContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default observer(ContactPage);
