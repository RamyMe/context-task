import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';
import productsData from '../data/products.json'; // Import product data

const CartPage = () => {
  const { cartItems, totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-total">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;