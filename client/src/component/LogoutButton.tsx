import React from "react"
import { useHistory } from "react-router-dom"
import User from "../common/user"

interface ILogoutButtionProps {
  logout: () => void,
}
function LogoutButton({ logout }: ILogoutButtionProps) {
  const history = useHistory();
  const handleClick = () => {
    logout()
    history.push("/")
  }
  return <button onClick={handleClick}>Logout</button>
}

export default LogoutButton
