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
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
      <div className={style.CartTotal}>
        <span><font Color="saddlebrown">Total Quantity</font> 1</span>
        <span><font Color="saddlebrown">Total Price</font> ₹1999</span>
      </div>
      <div className={style.CartPayment}>
        <button>Cehckout</button>
      </div>
    </div>
  )
}

export default Cart
