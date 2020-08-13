import React from "react"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'

interface ILogoutButtionProps {
  logout: () => void,
}
function LogoutButton({ logout }: ILogoutButtionProps) {
  const history = useHistory();
  const handleClick = () => {
    logout()
    history.push("/")
  }
  return <Button variant="contained" onClick={handleClick}>Logout</Button>
}

export default LogoutButton
