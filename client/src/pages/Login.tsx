import React, { useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import User from '../common/user'
import { Button, Box } from '@material-ui/core'

interface ILoginProps {
  authenticated: boolean,
  login: (user: User) => void,
}
function Login({ authenticated, login }: ILoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()

  const handleClick = () => {
    try {
      login({ email, password, name: "" })
    } catch (e) {
      alert("Failed to login")
      setEmail("")
      setPassword("")
    }
  }

  const { from }: any = location.state || { from: { pathname: "/" } }
  if (authenticated) {
    return <Redirect to={from} />
  }

  return (
    <>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <Button variant="contained" onClick={handleClick}>Login</Button>
    </>
  )
}

export default Login