import React, { useEffect, useState } from 'react'
import { useShop } from '../hooks'
import style from '../styles/body.module.css'
import Items from './smallComponents/Items'
import shopImage from '../assets/images/shop.png'

function Body() {
  const [items,setItems] = useState([]);
  const [title,setTitle] = useState('');
  const shop  = useShop();
  useEffect(()=>{
    setItems(shop.currentItems);
    setTitle(shop.currentTitle);
  },[shop])
  return (
    <div className={style.Body}>
        { title !== '' ? <><h4 className={style.Title}>Showing {title}</h4><hr/></>  : ''}
        <div className={style.Items}>
          { items.length > 0 ? items.map((value,key)=>{
            return  <Items data={value} key={key}/> 
          }) : ''}
          { title !== '' && items.length === 0 && <h5 style={{margin:20,color:'red'}}>No Items in this Category</h5>}
        </div>
        { title === '' && <div><h1 style={{margin:20,color:'#000081',textAlign:'center'}}>Shop Your Favourite Items</h1><div style={{textAlign:'center'}}><img src={shopImage} alt='shop' width='650px'/></div></div>}
     
    </div>
  )
}

export default Body
