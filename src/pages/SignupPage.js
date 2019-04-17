import React, { Component } from "react";
import { withRouter } from 'react-router-dom';


class SignupPage extends Component {
    state = {
        userName: ''
    };

    setName = (ev) => {
        this.setState({ userName: ev.target.value });
    }

    handleSubmit = async () => {
        await this.props.store.signUp(this.state.userName);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="SignupPage">
                <form onSubmit={this.handleSubmit}>
                    <h3>Please enter your name:</h3>
                    <br />
                    <input onChange={this.setName} type="text" />
                    <br />

                    <button>Sign up</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupPage);

