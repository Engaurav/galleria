import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../provider/ShopProvider";


export const useShop = () => {
  return useContext(ShopContext);
};

export const useProvideShop = () => {
  const [currentItems,setCurrentItems] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [allProducts,setAllProducts] = useState([]);
  const [currentTitle,setCurrentTitle] = useState('');
  

  useEffect(() => {
    
  }, []);

  return {
    currentItems,
    setCurrentItems,
    cartItems,
    setCartItems,
    allProducts,
    setAllProducts,
    currentTitle,
    setCurrentTitle
  };
};
