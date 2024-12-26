import { createContext, useContext, useState, useCallback, useEffect } from "react";

// Creates CartContext
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Luxury Villa", price: 5000000, description: "A beautiful luxury villa", image: "https://images.unsplash.com/photo-1716807335095-8948ce6ab482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8fDB8fHww" },
    { id: 2, name: "Modern Apartment", price: 750000, description: "A spacious modern apartment.", image: "https://images.unsplash.com/photo-1691432371450-9ef8deb273bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVybiUyMGFwcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Cozy Cottage", price: 350000, description: "A charming cozy cottage.", image: "https://images.unsplash.com/photo-1662236337008-e546a2359f45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Irish cottage", price: 250000, description: "Buy luck and move to Ireland.", image: "https://images.unsplash.com/photo-1730812393789-a7d15960029d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlyaXNoJTIwY290dGFnZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, name: "Paris apartment", price: 450000, description: "In the city of love, find a price you love.", image: "https://images.unsplash.com/photo-1623424431536-2c1b1b96f2aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXMlMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" },
    { id: 6, name: "Monaco", price: 15000000, description: "More money than sense, let us lighten your load.", image: "https://images.unsplash.com/photo-1559385301-0187cb6eff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uYWNvJTIwYXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 7, name: "Bath Townhouse", price: 1500000, description: "Georgian Bath Townhouse.", image: "https://images.unsplash.com/photo-1716302311651-32415e63200a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJhdGglMjB0b3duaG91c2V8ZW58MHx8MHx8fDA%3D"},
    { id: 8, name: "Japanese Traditional house", price: 200000, description: "Embrace the wisdom of property ownership in the land of the rising sun.", image:"https://images.unsplash.com/photo-1705578815676-11a1b22c00e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGphcGFuZXNlJTIwdHJhZGl0aW9uYWwlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"},
    { id: 9, name: "Banff Lodge", price: 300000, description: "Live in breathtaking Banff, Alberta. Enjoy Skiing, Mountain climbing and blue ass water.", image:"https://images.unsplash.com/photo-1663358235725-1dfbe2b6664e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZmYlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"},
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
