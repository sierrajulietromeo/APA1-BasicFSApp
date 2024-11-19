const Inventory = require('../models/inventory');
const { Clothing, Electronics } = require('../models/product');
const axios = require('axios');

const inventory = new Inventory(); // Create an instance of Inventory

exports.index = (req, res) => {
  try {
    const products = inventory.getAllProducts();
    res.render('index', { products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products.");
  }
};

exports.create = (req, res) => {
  try {
    const { id, name, price, quantity, type, size, material, brand, warranty } = req.body;

    let product;
    if (type === 'clothing') {
      product = new Clothing(id, name, price, quantity, size, material);
    } else if (type === 'electronics') {
      product = new Electronics(id, name, price, quantity, brand, warranty);
    } else {
      return res.status(400).send("Invalid product type.");
    }

    inventory.addProduct(product);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating product.");
  }
};

// ... (Add other actions: update, delete, getStock) ...

exports.convertCurrency = async (req, res) => {
    const { id } = req.params; 
    const targetCurrency = req.query.currency; 
  
    try {
      const product = inventory.getProduct(id);
  
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/GBP`); 
  
      const exchangeRate = response.data.rates[targetCurrency];
      const convertedPrice = product.getPrice() * exchangeRate;
  
      res.render('details', { product: product, convertedPrice: convertedPrice, targetCurrency: targetCurrency }); 
  
    } catch (error) {
      console.error('Error fetching exchange rates or product:', error);
      res.status(500).send("Error converting currency.");
    }
  };