import React, { Component } from "react";
import ContactService from "../services/ContactService.js";

export default class ContactDetailsPage extends Component {
  state = {
    contact: {}
  };
  async componentWillMount() {
    const contactId = this.props.match.params.id;
    let contact = await ContactService.getContactById(contactId)
    this.setState({ contact: contact });
  }
  render() {
    return (
      <div className="ContactDetailsPage">
        <img src={`https://robohash.org/sets=${this.state.contact._id}/?size=100x100`} alt="img" />
        <div>{this.state.contact.name}</div>
        <div>{this.state.contact.email}</div>
        <div>{this.state.contact.phone}</div>
      </div>
    );
  }
}
