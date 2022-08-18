import React from 'react'
import { useShop } from '../hooks'
import '../styles/App.css'
import Body from './Body'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cart from './smallComponents/Cart'

function App() {
  const shop = useShop();
  return (
    <div>
      <Navbar/>
      <div className='Main'>
        <Sidebar/>
        <Body/>
      </div>
      { shop.showCart && <Cart /> }
    </div>
  )
}

export default App


