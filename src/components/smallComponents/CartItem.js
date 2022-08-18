import React from 'react';
import { useShop } from '../../hooks';
import style from '../../styles/cart.module.css'


function CartItem() {
  const shop = useShop();
  return (
    <div className={style.CartItem}>
            <div className={style.CartImage}>
                <img src='https://rukminim1.flixcart.com/image/880/1056/l41n2q80/t-shirt/4/q/g/m-dr1288-353-nike-original-imagff7uwnxttytv.jpeg' alt='cartimg'/>
            </div>
            <div className={style.CartItemData}>
                <div className={style.CartItemBrand}>Nike</div>
                <div className={style.CartItemDetail}>Printed Men Round Neck Green T-Shirt</div>
                <div className={style.CartItemPrice}><span>Price</span> ₹1999</div>
                <div className={style.CartItemManage}>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/929/929430.png' alt='minus' width='20'/></button>
                    <div className={style.CartQty}>2</div>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png' alt='add' width='20'/></button>
                </div>
            </div>
        </div>
  )
}

export default CartItem
