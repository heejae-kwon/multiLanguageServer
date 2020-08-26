import React from "react"
import { Route, Redirect, useLocation } from "react-router-dom"

interface IAuthRouteProps {
  authenticated: boolean,
  component?: any,
  [rest: string]: {}
}
const AuthRoute = ({ authenticated, component: Component, ...rest }: IAuthRouteProps) => {
  console.log(authenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        )
          : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
      }
    />
  )
}

export default AuthRoute