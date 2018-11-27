import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

export class Homepage extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>{this.props.name}</h1>
            </Jumbotron>
        )
    }
}