import React, { useState } from 'react';
import { useShop } from '../../hooks';
import style from '../../styles/cart.module.css'


function CartItem(props) {
  const [qty,setQty] = useState(0);
  const shop = useShop();
  const item = props.data;
  const id = props.id;

  useState(async ()=>{
    await setQty(shop.cartItems[id].qty);
  },[])

  
  const handleIncreaseItem = () => {
    let products = shop.allProducts;
    if(item.f_id){
      let val = products[item.id].subcategory[item.sub_id].further_category[item.f_id].items[item.i_id].qty;
      val = val + 1; 
    }else{
        let val = products[item.id].subcategory[item.sub_id].items[item.i_id].qty;
        val = val + 1;
    }
    let CartsItems = shop.cartItems;
    CartsItems[id].qty += 1;
    shop.setCartItems(CartsItems);

    setQty(qty+1)
    let total = shop.totalCartItem + 1;
    shop.setTotalCartItem(total);
    shop.setTotalCartPrice(shop.totalCartPrice+item.price);
  }
  const handleDecreaseItem = () => {
    if(qty>1){
        let products = shop.allProducts;
        if(item.f_id){
          let val = products[item.id].subcategory[item.sub_id].further_category[item.f_id].items[item.i_id].qty;
          val = val - 1; 
        }else{
            let val = products[item.id].subcategory[item.sub_id].items[item.i_id].qty;
            val = val - 1;
        }
        let CartsItems = shop.cartItems;
        CartsItems[id].qty -= 1;
        shop.setCartItems(CartsItems);
    
        setQty(qty-1)
        let total = shop.totalCartItem - 1;
        shop.setTotalCartItem(total);
        shop.setTotalCartPrice(shop.totalCartPrice-item.price);
    }
    
  }




  return (
    <div className={style.CartItem}>
            <div className={style.CartImage}>
                <img src={item.img} alt='cartimg'/>
            </div>
            <div className={style.CartItemitem}>
                <div className={style.CartItemBrand}>{item.brand}</div>
                <div className={style.CartItemDetail}>{item.detail}</div>
                <div className={style.CartItemPrice}><span>Price</span> ₹{item.price}</div>
                <div className={style.CartItemManage}>
                    <button onClick={()=>{handleDecreaseItem()}}><img src='https://cdn-icons-png.flaticon.com/512/929/929430.png' alt='minus' width='20'/></button>
                    <div className={style.CartQty}>{qty}</div>
                    <button onClick={()=>{handleIncreaseItem()}}><img src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png' alt='add' width='20'/></button>
                </div>
            </div>
        </div>
  )
}

export default CartItem
