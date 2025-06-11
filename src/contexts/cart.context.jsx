import { createContext, useState, useEffect, use} from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
    const exists = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (exists){
        return cartItems.map((cartItems)=>
            cartItems.id === productToAdd.id
                ? {...cartItems, quantity: cartItems.quantity + 1}
                : cartItems
        );

    }else {
        return [...cartItems, {...productToAdd, quantity: 1}];
    }}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};