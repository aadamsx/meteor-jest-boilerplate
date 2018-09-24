import * as React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => (
  <React.Fragment>
    <h2>Register Page</h2>
    <button>
      <Link to="login">Register</Link>
    </button>
  </React.Fragment>
)
export default RegisterPage
