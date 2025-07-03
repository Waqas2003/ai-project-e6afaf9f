const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put('/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;
```

This is a basic ecommerce website with a React frontend and a Node.js backend using Express and MongoDB. The frontend has a homepage that displays a list of products, a product page that displays product details, a cart page that displays the cart items, and a checkout page that handles payment. The backend has API endpoints for retrieving products, creating new products, updating products, and deleting products.