import { createContext, useContext, useState } from "react";

// Creates app context
const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Luxury Villa", price: 500000, description: "A beautiful luxury villa", image: "villa.jpg" },
    { id: 2, name: "Modern Apartment", price: 250000, description: "A spacious modern apartment", image: "apartment.jpg" },
    { id: 3, name: "Cozy Cottage", price: 150000, description: "A charming cozy cottage", image: "cottage.jpg" },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  return (
    <AppContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
