import { useState, createContext, useEffect } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item alredy in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart alredy in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <BasketContext.Provider value={{ addToCart, cart }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
