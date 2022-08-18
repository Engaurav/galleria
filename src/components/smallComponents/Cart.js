import React from 'react';
import { useShop } from '../../hooks';
import style from '../../styles/cart.module.css'
import CartItem from './CartItem';

function Cart() {
  const shop = useShop();

  return (
    <div className={style.Cart}>
      <div className={style.CartHead}>
        <h1>Cart</h1>
        <button onClick={()=>{shop.setShowCart(false)}}><img src='https://cdn-icons-png.flaticon.com/512/753/753345.png' alt='close' width='30px'/></button>
      </div><hr/>
      <div className={style.CartItems}>
        { shop.cartItems.length!==0 && shop.cartItems.map((value,key)=>{
          return <CartItem data={value} id={key} key={key}/> })}
      </div>
      <div className={style.CartTotal}>
        <span><font color="saddlebrown">Total Quantity</font> {shop.totalCartItem}</span>
        <span><font color="saddlebrown">Total Price</font> ₹{shop.totalCartPrice}</span>
      </div>
      <div className={style.CartPayment}>
        <button>Cehckout</button>
      </div>
    </div>
  )
}

export default Cart
