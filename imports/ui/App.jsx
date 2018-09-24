import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Accounts/Login' // eslint-disable-line
import Register from './Accounts/Register' // eslint-disable-line

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Fragment>
  </BrowserRouter>
)
export default App
