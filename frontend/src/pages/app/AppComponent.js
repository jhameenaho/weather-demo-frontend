import React from 'react'
import { Link } from 'react-router-dom'

export default ({children}) => (
  <div className="App">
    <div className="App-header">
      <h2>Work in progress</h2>
    </div>

    <Link to={'/'}>Home</Link>
    <Link to={'/login'}>Login</Link>

    {children}
  </div>
)