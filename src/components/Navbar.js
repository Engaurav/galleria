import React, {  useState } from "react";
import style from "../styles/navbar.module.css";
import brand from "../assets/images/brand.jpeg";

function Navbar() {
  const [total,setTotal] = useState(0);
  
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
                <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart" onClick={()=>{setTotal(5)}}/>
                <div className={style.NavCartTotal}>
                    {total}
                </div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
