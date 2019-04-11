/**
 * UserScreen renders the name of the selected user via props.match or 
 * a screen telling the user no user is selected.
 */

import React, { Component } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';

class UserScreen extends Component {
    static navigationOptions = {
        title: 'User',
    };

    constructor(props) {
        super(props);
        this.state = {
            user: {
                address: {
                    geo: {}
                }
            }
        };

        if (this.props.match.params.id) {
            this.getUser(this.props.match.params.id);
        }
    }

    // Fetches a single user from the server via id
    getUser(id) {
        fetch("http://api.softhouse.rocks/users/" + id)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    return res.json();
                }
                throw new Error('Network response was not ok. Bad ID?');
            })
            .then((res) => {
                this.setState({ user: res });
            })

    }

    // Returns information about the user in a formatted way
    formatUser() {
        return [
            <img key="image" src="http://placekitten.com/250/200" alt="kitten"></img>,
            <h3 key="username">{this.state.user.username}</h3>,
            <h5 key="name">{this.state.user.name}</h5>,
            <h6 key="email">{this.state.user.email}</h6>
        ]
    }

    // Returns the user's address in a formatted way
    formatAddress() {
        return [
            <div key="street">{this.state.user.address.street}</div>,
            <div key="city">{this.state.user.address.city}</div>,
            <div key="suite">{this.state.user.address.suite}</div>
        ]
    }

    render() {
        let selectedUser = <p>No user selected!</p>;
        let address;

        if (this.props.match.params.id) {
            selectedUser = this.formatUser();
            address = this.formatAddress();
        }

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardComponent info={address} infoTitle="Address">
                    {selectedUser}
                </CardComponent>
            </div>
        )
    }
}

export default UserScreen;