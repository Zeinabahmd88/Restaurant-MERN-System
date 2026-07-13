import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
const url = "http://localhost:4000";

const StoreContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updatedCart = { ...prev };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Fetch food list from the database
  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data); // adjust depending on response structure
      } catch (err) {
        console.error("Failed to fetch food list:", err);
      }
    };

    fetchFoodList();
  }, []);

  const contextValue = {
    food_list: foodList, // provide the fetched data here
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
