import React, { Component } from "react";

export default class ContactEditPage extends Component {
    state = {
        contact: {}
    };
    async componentWillMount() {
        if (this.props.match.params.id) {
            await this.props.store.queryContactById(this.props.match.params.id);
            let contact = this.props.store.contact;
            this.setState({ contact: contact });

        } else {
            this.setState({ contact: this.props.store.contact });
        }
    }
    setName = e => {
        let newContact = JSON.parse(JSON.stringify(this.state.contact))
        newContact.name = e.target.value
        this.setState({ contact: newContact });
    }

    setPhone = e => {
        let newContact = JSON.parse(JSON.stringify(this.state.contact))
        newContact.phone = e.target.value
        this.setState({ contact: newContact });
    }

    setEmail = e => {
        let newContact = JSON.parse(JSON.stringify(this.state.contact))
        newContact.email = e.target.value
        this.setState({ contact: newContact });
    }
    handleSubmit = async e => {
        e.preventDefault();
        await this.props.store.saveContact(this.state.contact)
        this.props.history.push('/contact');
    }
    render() {
        return (
            <div className="ContactEditPage">
                <h1>{this.state.contact._id ? 'Edit' : 'Add'}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: &nbsp;</label>
                    <input onChange={this.setName} value={this.state.contact.name} type="text" placeholder="Name..." />
                    <br />
                    <label>Phone: &nbsp;</label>
                    <input onChange={this.setPhone} value={this.state.contact.phone} type="text" placeholder="Phone..." />
                    <br />
                    <label>Email: &nbsp;</label>
                    <input onChange={this.setEmail} value={this.state.contact.email} type="text" placeholder="Email..." />
                    <br />

                    <button>Save</button>
                </form>
            </div>
        );
    }
}
