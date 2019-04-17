import React, { Component } from "react";


export default class TransferFund extends Component {
    state = {
        amount: 0
    }

    setAmount = (ev) => {
        this.setState({ amount: +ev.target.value });
    }

    handleTransfer = () => {
        this.props.transfer(this.state.amount);
    }

    render() {
        const contact = this.props.contact;
        return (
            <div className="TransferFund">
                <p>Transfer coins to {contact.name}:</p>
                <div>
                    <label>Amount:&nbsp;</label>
                    <input onChange={this.setAmount} type="number" />
                    <button onClick={this.handleTransfer}>Transfer</button>
                </div>
            </div>
        );
    }
}
