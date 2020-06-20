import React, { Component } from 'react';
import { getUserById } from '../../core/api/users.api';
import { DisplayUser } from './DisplayUser';

export class UserById extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        getUserById(this.props.computedMatch.params.id).then(response => {
            this.setState({
                user: response.data
            });
        });
    }

    render() {
        return (
            <div className="user-by-id">
                <DisplayUser user={this.state.user}></DisplayUser>
            </div>
        )
    }
}