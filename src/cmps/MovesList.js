import React, { Component } from "react";


export default class MovesList extends Component {

    render() {
        var user = this.props.user;
        if (this.props.contact) {
            var contact = this.props.contact;
            var moves = user.moves.filter(move => {
                return move.to === contact.name
            })
        }
        return (
            <div className="MovesList" >
                <h1>Your moves:</h1>
                <hr />
                {contact && moves.map(move => (
                    <div key={move._id}>
                        <p>At: {move.createdAt}</p>
                        <p>Amount: {move.amount} coins</p>
                    </div>
                ))}
                {(!contact && user.moves) && user.moves.map(move => (
                    <div key={move._id}>
                        <p>To: {move.to}</p>
                        <p>At: {move.createdAt}</p>
                        <p>Amount: {move.amount} coins</p>
                    </div>
                ))}
                <hr />
            </div>
        );
    }
}
