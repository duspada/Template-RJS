import React from 'react';
import { func, string } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: func.isRequired,
  location: string,
};
PrivateRoute.defaultProps = {
  location: undefined,
};

export default PrivateRoute;
