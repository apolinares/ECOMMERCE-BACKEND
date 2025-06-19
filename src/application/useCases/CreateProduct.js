const Product = require("../../domain/entities/Product");

class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute({ name, price, stock = 0 }) { 
    const product = new Product({ name, price, stock });
    return await this.productRepository.create(product);
  }
}

module.exports = CreateProduct;
