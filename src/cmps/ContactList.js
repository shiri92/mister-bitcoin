import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactPreview from "../cmps/ContactPreview.js";
import { Link } from "react-router-dom";

export default class ContactList extends Component {

  render() {
    const contactList = this.props.contacts.map(contact => (
      <li
        className="ContactList"
        key={contact._id}>
        <Link className="link" to={`/contact/${contact._id}`}>
          <ContactPreview delete={this.props.delete} contact={contact} />
        </Link>
      </li>
    ));
    return <div className="ContactList">{contactList}</div>;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string
};
ContactList.defaultProps = {
  contacts: [],
  heading: "Contacts"
};
