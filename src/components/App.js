import React, { Component } from 'react'
import '../styles/App.css'
import Body from './Body'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='Main'>
          <Sidebar/>
          <Body/>
        </div>
      </div>
    )
  }
}


