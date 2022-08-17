import React from 'react';
import style from '../../styles/items.module.css'

function Items(props) {
  const item = props.data;
  console.log(item)
  return (
    <div className={style.Items}>
      <div className={style.ItemImage}>
        <img src={item.img}  alt='items'/>
      </div>
      <div className={style.ItemBrand}>
        {item.brand}
      </div>
      <div className={style.ItemDetail}>
         {item.detail}
      </div>
      <div className={style.ItemPrice}>
        <span>Price</span> ₹{item.price}
      </div>
      <div className={style.ItemToCart}>
        Add To Cart
      </div>
    </div>
  )
}

export default Items
