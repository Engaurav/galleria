import React from 'react'
import style from '../styles/body.module.css'
import Items from './smallComponents/Items'

function Body() {
  return (
    <div className={style.Body}>
        <h4 className={style.Title}>Showing Men's FootWear</h4><hr></hr>
        <div className={style.Items}>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
          <Items/>
        </div>
     
    </div>
  )
}

export default Body
