import * as React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => (
  <React.Fragment>
    <h2>Login Page</h2>
    <h6>
      <Link to="register">Register</Link>
    </h6>
  </React.Fragment>
)
export default LoginPage
