import { useContext, useEffect, useState } from "react";
import {products} from "../assets/json_data/products";
import { ShopContext } from "../provider/ShopProvider";


export const useShop = () => {
  return useContext(ShopContext);
};

export const useProvideShop = () => {
  const [currentItems,setCurrentItems] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [allProducts,setAllProducts] = useState([]);
  const [currentTitle,setCurrentTitle] = useState('');
  const [showCart, setShowCart] = useState(false);
  

  useEffect(() => {
    setAllProducts(products)
  }, []);

  return {
    currentItems,
    setCurrentItems,
    cartItems,
    setCartItems,
    allProducts,
    setAllProducts,
    currentTitle,
    setCurrentTitle,
    showCart,
    setShowCart
  };
};
