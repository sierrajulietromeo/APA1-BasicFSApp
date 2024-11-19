const { Product, Clothing, Electronics } = require('./product');

class Inventory {
  constructor() {
    this.products = new Map(); 
  }

  addProduct(product) {
    if (this.products.has(product.getId())) {
      throw new Error(`Product with ID ${product.getId()} already exists.`);
    }
    this.products.set(product.getId(), product);
  }

  updateQuantity(id, newQuantity) {
    const product = this.products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    product.setQuantity(newQuantity); 
  }

  getProduct(id) {
    const product = this.products.get(id);
    if (!product) {
      throw new Error(`Product with ID ${id} not found.`);
    }
    return product;
  }

  removeProduct(id) {
    if (!this.products.delete(id)) {
      throw new Error(`Product with ID ${id} not found.`);
    }
  }

  getAllProducts() {
    return Array.from(this.products.values());
  }
}

module.exports = Inventory;