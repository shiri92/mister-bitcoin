import React, { Component } from "react";

export default class ContactPreview extends Component {
  render() {
    const contact = this.props.contact;
    return (
      <div className="ContactPreview">
        <div>{contact.name}</div>
        <img src={`https://robohash.org/sets=${contact._id}/?size=100x100`} alt="img" />
      </div>
    );
  }
}
