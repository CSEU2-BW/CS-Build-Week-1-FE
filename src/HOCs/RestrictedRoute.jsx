import React from 'react';
import { Redirect } from 'react-router-dom';

const RestrictedRoute = Component => class extends React.Component {
  render() {
    if (localStorage.getItem('token')) {
      return <Component />;
    }
    return <Redirect to="/login" />;
  }
};

export default RestrictedRoute;
