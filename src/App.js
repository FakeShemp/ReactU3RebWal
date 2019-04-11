import React, { Component } from 'react';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import { Route, Switch } from "react-router-dom";
import LoginScreen from './screens/LoginScreen/LoginScreen';
import DashboardScreen from './screens/DashboardScreen/DashboardScreen';
import UserScreen from './screens/UserScreen/UserScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarComponent></NavBarComponent>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route path="/user/:name" component={UserScreen} />
          <Route exact path="/user" component={UserScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
