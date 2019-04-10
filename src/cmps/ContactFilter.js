import React, { Component } from "react";

export default class Chart extends Component {
    state = {
    }

    handleSearch = async (ev) => {
        let filterBy = { term: ev.target.value }
        this.props.filter(filterBy);
        console.log('hey')
    }

    render() {
        return (
            <div className="ContactFilter">
                <input onChange={this.handleSearch} type="text" placeholder="Search contact..." />
            </div>
        );
    }
}
