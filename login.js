import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import List1 from './List1';
import List2 from './List2';
import Auth from './Auth';
import User from './User';

export default class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path = "/login" component={Login}/>
          <Routh exact path = "/logout" component={Logout}/>
          <Auth>
            <Switch>
              <Route exact path ="/list1" component={List1}>
              <Route exact path ="/list2" component={List2}>
            </Switch>
          </Auth>
        </Router>
    );
  }
}
