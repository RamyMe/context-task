import React from 'react';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
import ProductList from './components/ProductList';
import productsData from './data/products.json';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>React Context Task</h1>
      <CartProvider>
        <ProductList products={productsData} />
        <CartPage />
      </CartProvider>
    </div>
  );
}

export default App;