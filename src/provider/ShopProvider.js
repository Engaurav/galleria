import { createContext } from "react";
import { useProvideShop } from "../hooks";

const initialState = {
  currentItems: [],
  cartItems : [],
  allProducts : [],
  currentTitle : ''
};

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const shop = useProvideShop();
  return <ShopContext.Provider value={shop}>{children}</ShopContext.Provider>;
};
