import React from 'react';
// import { useShop } from '../../hooks';
import style from '../../styles/cart.module.css'


function CartItem(props) {
//   const shop = useShop();
  const data = props.data;
  console.log(data);
  return (
    <div className={style.CartItem}>
            <div className={style.CartImage}>
                <img src={data.img} alt='cartimg'/>
            </div>
            <div className={style.CartItemData}>
                <div className={style.CartItemBrand}>{data.brand}</div>
                <div className={style.CartItemDetail}>{data.detail}</div>
                <div className={style.CartItemPrice}><span>Price</span> ₹1999</div>
                <div className={style.CartItemManage}>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/929/929430.png' alt='minus' width='20'/></button>
                    <div className={style.CartQty}>{data.qty}</div>
                    <button><img src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png' alt='add' width='20'/></button>
                </div>
            </div>
        </div>
  )
}

export default CartItem
