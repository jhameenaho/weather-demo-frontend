import React from 'react'
import Header from '../../components/header/Header'

import './App.css'

export default ({children, links}) => (
  <div className="App-wrapper">
    <Header links={links}/>
    <div className="App-content">
      {children}
    </div>
  </div>
)