import React from 'react';
import { func, string } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '~/store';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (!store.getState().auth.signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))
    }
  />
);

GuestRoute.propTypes = {
  component: func.isRequired,
  location: string,
};
GuestRoute.defaultProps = {
  location: undefined,
};

export default GuestRoute;
