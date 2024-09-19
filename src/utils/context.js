import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add isAuthenticated state
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.forEach(
      (item) =>
        (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].attributes.quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      product.attributes.quantity = quantity;
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const handleCartProductQuantity = (type, product) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      if (type === "inc") {
        updatedCartItems[index].attributes.quantity += 1;
      } else if (type === "dec") {
        if (updatedCartItems[index].attributes.quantity > 1) {
          updatedCartItems[index].attributes.quantity -= 1;
        }
      }
      setCartItems(updatedCartItems);
    }
  };

  const login2 = () => {
    setIsAuthenticated(true);
    // Perform additional login logic (e.g., store token, fetch user data)
  };

  const logout2 = () => {
    setIsAuthenticated(false);
    // Perform additional logout logic (e.g., clear token, clear user data)
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        showCart,
        setShowCart,
        handleCartProductQuantity,
        cartSubTotal,
        isAuthenticated, // Provide isAuthenticated state
        login2, // Provide login function
        logout2, // Provide logout function
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
