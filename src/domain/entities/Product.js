class Product {
  constructor({ name, description, price, stock, category, imageUrl }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.category = category;
    this.imageUrl = imageUrl;
    this.validate();
  }
  validate() {
    if (!this.name || typeof this.name !== 'string') {
      throw new Error('Invalid product name');
    }
    if (typeof this.description !== 'string') {
      throw new Error('Invalid product description');
    }
    if (typeof this.price !== 'number' || this.price < 0) {
      throw new Error('Invalid product price');
    }
    if (typeof this.stock !== 'number' || this.stock < 0) {
      throw new Error('Invalid product stock');
    }
    if (!this.category || typeof this.category !== 'string') {
      throw new Error('Invalid product category');
    }
    if (this.imageUrl && typeof this.imageUrl !== 'string') {
      throw new Error('Invalid product image URL');
    }
  }
}

module.exports = Product;
