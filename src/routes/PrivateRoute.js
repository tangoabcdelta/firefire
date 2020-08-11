import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

const Auth = {};

class PrivateRoute extends React.Component{
  constructor({ children, ...rest }) {
    super();
    this.children = children;
    this.rest = rest;
  }


  render() {
    if (Auth.isAuthenticated) {
      console.log('Auth.isAuthenticated', Auth.isAuthenticated);
    }
    return (
      <Route
      {...this.rest}
      render={({ location }) =>
        Auth.isAuthenticated ? (
          this.children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />)
    
  }
}

export default PrivateRoute;
