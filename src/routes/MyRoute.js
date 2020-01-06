import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import t from 'prop-types';
import { AuthContext } from '../contexts/auth/Context';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const {
    state: { isLoggedIn },
  } = useContext(AuthContext);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login/',
          state: { prevPath: rest.location.pathname },
        }}
      />
    );
  }

  // eslint-disable-next-line
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: t.oneOfType([t.element, t.func]).isRequired,
  isClosed: t.bool,
};
