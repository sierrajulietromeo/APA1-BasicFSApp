class Product {
    constructor(id, name, price, quantity, type) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.type = type; // Add type to the base Product class
    }
  
    // Getters and setters (You can add more as needed)
    getId() { 
      return this.id; 
    }
  
    getName() { 
      return this.name; 
    }
  
    getPrice() { 
      return this.price; 
    }
  
    getQuantity() { 
      return this.quantity; 
    }
  
    setQuantity(newQuantity) { 
      this.quantity = newQuantity; 
    }
  
    getProductDetails() {
      // This will be implemented in the subclasses
      throw new Error("Method 'getProductDetails()' must be implemented.");
    }
  }
  
  class Clothing extends Product {
    constructor(id, name, price, quantity, size, material) {
      super(id, name, price, quantity, 'clothing'); // Pass 'clothing' as the type
      this.size = size;
      this.material = material;
    }
  
    getProductDetails() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        type: this.type, // Include the type in the details
        size: this.size,
        material: this.material,
      };
    }
  }
  
  class Electronics extends Product {
    constructor(id, name, price, quantity, brand, warranty) {
      super(id, name, price, quantity, 'electronics'); // Pass 'electronics' as the type
      this.brand = brand;
      this.warranty = warranty;
    }
  
    getProductDetails() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        type: this.type, // Include the type in the details
        brand: this.brand,
        warranty: this.warranty,
      };
    }
  }
  
  module.exports = { Product, Clothing, Electronics };