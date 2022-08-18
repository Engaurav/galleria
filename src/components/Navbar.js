import React, {  useState } from "react";
import style from "../styles/navbar.module.css";
import brand from "../assets/images/brand.jpeg";
import { useShop } from "../hooks";

function Navbar() {
  const [total,setTotal] = useState(0);
  const shop = useShop();
  
  return (
    <div className={style.Navbar}>

        
      <div className={style.BrandImage}>        {/* Brand Image */}
        <img src={brand} alt="Brand" />
      </div>


      <div className={style.SearchBar}>         {/* Search Bar */}
        <input type="search" placeholder="Search Item" />
      </div>


      <div className={style.NavCartContainer}>           {/* Cart Detail */}
            <div className={style.NavCart}>
                <img src="https://cdn-icons-png.flaticon.com/512/7856/7856126.png" alt="login"/>
                <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart" onClick={()=>{shop.setShowCart(true)}}/>
                <div className={style.NavCartTotal}>
                    {total}
                </div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
