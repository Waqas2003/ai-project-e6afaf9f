import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function ProductPage() {
  const { id } = useParams();
  const product = { id: 1, name: 'Product 1', price: 10.99 };

  return (
    <div className="product-page">
      <h1>Product {id}</h1>
      <ProductCard product={product} />
    </div>
  );
}

export default ProductPage;