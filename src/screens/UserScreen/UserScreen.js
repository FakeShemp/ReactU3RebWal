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

    render() {
        let selectedUser = <p>No user selected!</p>;

        if (this.props.match.params.name) {
            selectedUser = <p>Selected user: {this.props.match.params.name}</p>
        }

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardComponent>
                    {selectedUser}
                </CardComponent>
            </div>
        )
    }
}

export default UserScreen;