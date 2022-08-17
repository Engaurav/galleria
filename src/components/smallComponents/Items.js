import React from 'react';
import style from '../../styles/items.module.css'

function Items() {
  return (
    <div className={style.Items}>
      <div className={style.ItemImage}>
        <img src='https://rukminim1.flixcart.com/image/880/1056/xif0q/t-shirt/9/4/j/m-hk9160-adidas-original-imagh3zf5ehpzchg.jpeg'  alt='items'/>
      </div>
      <div className={style.ItemBrand}>
        Adidas
      </div>
      <div className={style.ItemDetail}>
         Printed Men Round Neck White T-Shirt
      </div>
      <div className={style.ItemPrice}>
        <span>Price</span> ₹1399
      </div>
      <div className={style.ItemToCart}>
        Add To Cart
      </div>
    </div>
  )
}

export default Items
