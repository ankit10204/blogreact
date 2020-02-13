import {Route,Redirect} from 'react-router-dom';
import React from 'react';

const token = localStorage.getItem('token');

const AuthRoute=({ component:Component, ...rest })=> {
  console.log(Component)
  return (
    <Route
      {...rest}
       render={props=>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default AuthRoute;