/**
 * LoginScreen renders the login screen
 */

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CardComponent from '../../components/CardComponent/CardComponent';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    // Navigates to dashboard via the history prop
    historyNav = () => {
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <CardComponent info="You need to click the button to log in :)">
                    <FormControl type="text" placeholder="New User..." />
                    <Button variant="success" onClick={this.historyNav} style={{ width: '100%' }}>Log In</Button>
                </CardComponent>
            </div>
        )
    }
}

export default LoginScreen;