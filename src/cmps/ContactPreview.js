import React, { Component } from "react";
import TrashIcon from '../assets/img/trash.png';
import EditIcon from '../assets/img/edit.png';
import { withRouter } from 'react-router-dom';


class ContactPreview extends Component {

  handleEdit = async (ev) => {
    ev.preventDefault();
    this.props.history.push(`/contact/edit/${this.props.contact._id}`)
  }

  handleDelete = async (ev) => {
    ev.preventDefault();
    this.props.delete(this.props.contact._id);
  }

  render() {
    const contact = this.props.contact;
    return (
      <div className="ContactPreview">
        <img src={`https://robohash.org/sets=${contact._id}/?size=50x50`} alt="img" />
        <div>{contact.name}</div>
        <div className="icons-container">
          <img onClick={this.handleEdit} src={EditIcon} alt="Edit" />
          <img onClick={this.handleDelete} src={TrashIcon} alt="Delete" />
        </div>
      </div>
    );
  }
}

export default withRouter(ContactPreview);

