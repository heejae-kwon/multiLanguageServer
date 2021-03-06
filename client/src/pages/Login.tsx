import React, { useState } from "react"
import { Redirect, useLocation, useHistory } from "react-router-dom"
import User from '../common/user'
import { Button, Box, TextField, Grid, Typography } from '@material-ui/core'

interface ILoginProps {
  authenticated: boolean,
  login: (user: User) => void,
}
const Login = ({ authenticated, login }: ILoginProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const location = useLocation()
  const history = useHistory();

  const handleLoginButton = () => {
    try {
      login({ email, password, name: "" })
    } catch (e) {
      alert("Failed to login")
      setEmail("")
      setPassword("")
    }
  }

  const handleSignupButton = () => {
    history.push("/signup")
  }


  const { from }: any = location.state || { from: { pathname: "/" } }
  if (authenticated) {
    return <Redirect to={from} />
  }

  return (
    <Box border={4} borderColor="primary.main" borderRadius={8} padding={4} flexDirection="column">
      <Grid container direction="column" spacing={2}>
        <Grid item={true}>
          <Typography variant="h5">Login</Typography>
        </Grid>
        <Grid item={true}>
          <TextField
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type="text"
            placeholder="email"
          />
        </Grid>
        <Grid item={true}>
          <TextField
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            placeholder="password"
          />
        </Grid>
        <Grid container item={true} spacing={2}>
          <Grid item={true}>
            <Button variant="contained" onClick={handleLoginButton}>Login</Button>
          </Grid>
          <Grid item={true}>
            <Button variant="contained" onClick={handleSignupButton}>
              Signup
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login