import {Route,Redirect} from 'react-router-dom';
import React from 'react';

const CheckAuth=()=>{
	const token = localStorage.getItem('token');
	console.log(token);
	if(token !=''){
		return false;
	}
	return true;
}

const GuestRoute=({ component:Component, ...rest })=> {
  return (
  	<Route
      {...rest}
       render={props=>
        CheckAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/profile",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default GuestRoute;