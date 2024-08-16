import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem, updateItemQuantity } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    updateItemQuantity(item.id, parseInt(event.target.value));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <span className="price">₹{item.price.toFixed(2)}</span>
        <br />
        <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
        <input
          type="number"
          id={`quantity-${item.id}`}
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;