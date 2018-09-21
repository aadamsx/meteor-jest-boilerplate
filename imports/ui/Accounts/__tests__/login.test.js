import * as React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Login from '../Login'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Login />, div)
})
