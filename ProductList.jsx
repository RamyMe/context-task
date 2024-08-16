import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = ({ products }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ₹{product.price.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;