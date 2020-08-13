import React  from "react"
import { Route, Redirect, useLocation } from "react-router-dom"

interface IAuthRoute {
  authenticated: boolean,
  component?: any,
  render: any,
  [rest: string]: {}
}
const AuthRoute = ({ authenticated, component: Component, render, ...rest }: IAuthRoute) => {
  const location = useLocation()
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
              <Component {...props} />
            )
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: location } }}
            />
          )
      }
    />
  )
}

export default AuthRoute