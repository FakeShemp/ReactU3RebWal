/**
 * DashboardScreen displays the dashboard when routed  
 */

import React, { Component } from 'react';
import DashboardComponent from '../../components/DashboardComponent/DashboardComponent'

class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {
        return (
            <DashboardComponent></DashboardComponent>
        )
    }
}

export default DashboardScreen;