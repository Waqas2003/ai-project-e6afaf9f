import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={`https://picsum.photos/200/300?random=${product.id}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;