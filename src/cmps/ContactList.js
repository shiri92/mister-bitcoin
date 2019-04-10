import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactPreview from "../cmps/ContactPreview.js";
import { Link } from "react-router-dom";

export default class ContactList extends Component {
  render() {
    const contactList = this.props.contacts.map(contact => (
      <li
        className="contact-list"
        key={contact._id}
        // onClick={this.selectRobot.bind(null, robot)}>
        // onClick={() => {
        //   this.selectRobot(robot);
        // }}
      >
        <Link className="link" to={`/contact/${contact._id}`}>
          <ContactPreview contact={contact} />
        </Link>
        {/* <button
          onClick={ev => {
            ev.stopPropagation();
            this.props.whenDeleted(robot.id);
          }}
        >
          x
        </button> */}
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
