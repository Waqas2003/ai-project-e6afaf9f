import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 12.99 },
  ];

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;