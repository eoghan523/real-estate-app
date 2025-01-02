import { createContext, useContext, useState, useCallback, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Creates CartContext
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Luxury Villa", price: 5000000, description: "A beautiful luxury Manison in Canada.", images: ["/images/LuxuryVilla/ronin-kbrPWt77jgQ-unsplash.jpg", "/images/LuxuryVilla/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg", "/images/LuxuryVilla/r-architecture-HQCW1gTMjek-unsplash.jpg"] },
    { id: 2, name: "Modern Apartment", price: 750000, description: "A spacious modern apartment.", images: ["/images/modernAppartment/daniel-brubaker-uhYYa9nlr6w-unsplash.jpg", "/images/modernAppartment/olexandr-ignatov-w72a24brINI-unsplash.jpg", "/images/modernAppartment/curology-ycEKahEaO5U-unsplash.jpg"] },
    { id: 3, name: "Cozy Cottage", price: 350000, description: "A charming cozy cottage.", images: ["/images/cosyCottage/zachary-kyra-derksen-ajqDp29Pz7M-unsplash.jpg", "/images/cosyCottage/devin-kleu-4jjzDlartfA-unsplash.jpg", "/images/cosyCottage/cameron-smith-CTxNVSiWZBw-unsplash.jpg"] },
    { id: 4, name: "Irish cottage", price: 250000, description: "Buy your luck and move to Ireland.", images: ["/images/irishCottage/pascal-bullan-VPbLZ1q6lpI-unsplash.jpg", "/images/irishCottage/shche_-team-PFi1uWHh2dQ-unsplash.jpg", "/images/irishCottage/francesca-tosolini-kDtuOUIkwrk-unsplash.jpg"] },
    { id: 5, name: "Paris apartment", price: 450000, description: "In the city of love, find a price you love.", images: ["/images/parisApartment/celine-ylmz-euNoSSVFl8U-unsplash.jpg", "/images/parisApartment/mana5280-J0YKRnQpzRQ-unsplash.jpg", "/images/parisApartment/ronnie-george-m78oBvRHBm0-unsplash.jpg"] },
    { id: 6, name: "Monaco Yacht", price: 15000000, description: "More money than sense, let us lighten your load. Take up residency in this stunning Monaco Yacht.", images: ["/images/monacoYacht/danilo-capece-Mn5vLHPLTuw-unsplash.jpg", "/images/monacoYacht/reisetopia-pSDe7ePo0Tc-unsplash.jpg", "/images/monacoYacht/michael-worden-jn4j6sCnz4A-unsplash.jpg"] },
    { id: 7, name: "Bath Townhouse", price: 1500000, description: "Georgian Bath Townhouse. Built in the 1730s by architect	John Strahan. Add this property to your portfolio. ", images: ["/images/bathTownhouse/arthur-franklin-cTeJM7nbnVY-unsplash.jpg", "/images/bathTownhouse/nella-n-B3gJ_yr2SMg-unsplash.jpg", "/images/bathTownhouse/dan-counsell-CQeKvOTrGuQ-unsplash.jpg"] },
    { id: 8, name: "Japanese Traditional house", price: 200000, description: "Embrace the wisdom of property ownership in the land of the rising sun.", images: ["/images/traditionalJapanese/james-butterly-Aw1VczKrGkc-unsplash.jpg", "/images/traditionalJapanese/japanese-house2.jpg", "/images/traditionalJapanese/leopold-maitre-JClysmg6hjs-unsplash.jpg"] },
    { id: 9, name: "Banff Lodge", price: 300000, description: "Live in breathtaking Banff, Alberta. Enjoy Skiing, Mountain climbing and glacier blue water.", images: ["/images/banffLodge/andy-holmes-f6eWKcd8_dA-unsplash.jpg", "/images/banffLodge/clay-banks-3qlKV6BX6kI-unsplash.jpg", "/images/banffLodge/waldemar-Rhj6kftdXhM-unsplash.jpg"] }
  ]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return []; // Handle JSON parsing error
    }
  });

  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      if (prevCart.find(item => item.id === product.id)) {
        return prevCart; // Prevent duplicates
      }
      return [...prevCart, product];
    });
  }, []);

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
