import React, { useEffect, useState } from 'react';
import style from '../../styles/items.module.css'
import { useShop } from '../../hooks';

function Items(props) {
  const [addedToCart,setAddedToCart] = useState(false);
  const shop = useShop();
  const item = props.data;
  useEffect(()=>{
    if(item.qty > 0){
      setAddedToCart(true);
    }
  },[])
 
  const handleAddToCart =async ()=>{
    let products = shop.allProducts;
    // console.log(    products[item.id].subcategory[item.sub_id].items[item.i_id] , products );
    // console.log(    products[item.id].subcategory[item.sub_id].further_category[item.f_id].items[item.i_id] , products );
    setAddedToCart(true);
    if(item.f_id){
      products[item.id].subcategory[item.sub_id].further_category[item.f_id].items[item.i_id].qty = 1;
    }else{
      products[item.id].subcategory[item.sub_id].items[item.i_id].qty = 1;
    }
    let total = shop.totalCartItem + 1;
    shop.setTotalCartItem(total);
    shop.setTotalCartPrice(shop.totalCartPrice+item.price);


    shop.setAllProducts(products);
    shop.setCartItems([...shop.cartItems,item]);
  }

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
      { addedToCart ?  <div className={style.ItemGoToCart} onClick={()=>{shop.setShowCart(true)}}>
        Go To Cart
      </div> : <div className={style.ItemToCart} onClick={()=>{handleAddToCart()}}>
        Add To Cart
      </div>}
     
      
    </div>
  )
}

export default Items
