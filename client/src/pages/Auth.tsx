import React, { useState } from "react"
import { Redirect, useLocation, Route } from "react-router-dom"
import User from '../common/user'
import AuthWrapper from "../components/auth/AuthWrapper"
import Login from './Login'
import Signup from './Signup'

interface ILoginProps {
  authenticated: boolean,
  login: (user: User) => void,
}
function Auth({ authenticated, login }: ILoginProps) {
  const location = useLocation()

  const { from }: any = location.state || { from: { pathname: "/" } }
  if (authenticated) {
    return <Redirect to={from} />
  }

  return (
    <AuthWrapper>
      <Route path="/login">
        <Login authenticated={authenticated} login={login} />
      </Route>
      <Route path="/signup">
        <Signup login={login} />
      </Route>
    </AuthWrapper>
  )
}

export default Auth
