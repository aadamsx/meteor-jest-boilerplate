import React from 'react'
// import { Router } from 'react-router-dom'
import { render } from 'react-testing-library'
import Login from '../Login' // eslint-disable-line

describe('loginPage', () => {
  it('renders properly', () => {
    const { getByText } = render(<Login />)
    const title = getByText('Login Page')
    expect(title.textContent).toBe('Login Page')
  })
})
