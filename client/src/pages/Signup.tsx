import React, { useState } from "react"
import { Redirect, useLocation, useHistory } from "react-router-dom"
import User from '../common/user'
import { Button, Box, TextField, Grid, Typography } from '@material-ui/core'

interface ISignupProps {
  login: (user: User) => void,
}
const Signup = ({ login }: ISignupProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nickname, setNickname] = useState("")
  const history = useHistory()

  //todo: using signup api
  const handleSignup = () => {
    console.log("wow")
    try {
      login({ email, password, name: nickname })
      history.push("/")
    } catch (e) {
      alert("Failed to Signup")
      setEmail("")
      setPassword("")
      history.push("/")
    }
  }


  return (
    <Box border={4} borderColor="primary.main" borderRadius={8} padding={4} flexDirection="column">
      <Grid container direction="column" spacing={2}>
        <Grid item={true}>
          <Typography variant="h5">Signup</Typography>
        </Grid>
        <Grid item={true}>
          <TextField
            value={nickname}
            onChange={({ target: { value } }) => setNickname(value)}
            type="text"
            placeholder="nickname"
          />
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
            <Button variant="contained" onClick={handleSignup}>Signup</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Signup