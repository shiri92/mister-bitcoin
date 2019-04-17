import React, { Component } from "react";
import EditIcon from '../assets/img/edit.png';
import arrowLeft from '../assets/img/arrow-left.png';
import { Link } from "react-router-dom";
import TrashIcon from '../assets/img/trash.png';
import TransferFund from '../cmps/TransferFund.js';
import MovesList from "../cmps/MovesList.js";
import UserService from "../services/UserService.js";


export default class ContactDetailsPage extends Component {
  state = {
    contact: {},
    user: ''
  };
  async componentWillMount() {
    const contactId = this.props.match.params.id;
    await this.props.store.queryContactById(contactId);
    let contact = this.props.store.contact;
    this.setState({ contact: contact });
    await this.props.store.queryLoggedUser();
    let user = this.props.store.loggedUser;
    this.setState({ user: user });
  }

  handleDelete = async () => {
    await this.props.store.deleteContact(this.state.contact._id);
  }

  handleTransfer = async (amount) => {
    if (amount > 0) {
      if (amount <= this.state.user.coins) {
        let newUser = this.state.user;
        newUser.coins -= amount;
        this.setState({ user: UserService.updateUser(newUser) })
        let user = UserService.addMove(this.state.contact, amount);
        this.setState({ user: user });
      }
    }
  }

  render() {
    return (
      <div className="ContactDetailsPage">
        <div className="btns-container">
          <Link className="link" to={`/contact`}>
            <img onClick={this.handleEdit} src={arrowLeft} alt="Edit" />
          </Link>
          <Link className="link" to={`/contact/edit/${this.state.contact._id}`}>
            <img onClick={this.handleEdit} src={EditIcon} alt="Edit" />
          </Link>
          <Link className="link" to={`/contact`}>
            <img onClick={this.handleDelete} src={TrashIcon} alt="Delete" />
          </Link>
        </div>
        <div className="contact-details">
          <img src={`https://robohash.org/sets=${this.state.contact._id}/?size=100x100`} alt="img" />
          <div>Name: {this.state.contact.name}</div>
          <div>Email: {this.state.contact.email}</div>
          <div>Phone: {this.state.contact.phone}</div>
        </div>
        <TransferFund contact={this.state.contact} transfer={this.handleTransfer}></TransferFund>
        {this.state.user && <MovesList user={this.state.user} contact={this.state.contact}></MovesList>}
      </div>
    );
  }
}
