import React from "react"
import { Box } from '@material-ui/core'

interface IAuthWrapperProps {
  children: JSX.Element[]
}
function AuthWrapper({ children }: IAuthWrapperProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      {children}
    </Box>
  )
}

export default AuthWrapper