const ProductRepository = require('../../domain/repositories/ProductRepository');
const ProductModel = require('../database/models/ProductModel');
const Product = require('../../domain/entities/Product');

class MongoProductRepository extends ProductRepository {
    async getAll() {
        const products = await ProductModel.find();
        console.log('Products retrieved from MongoDB:', products);
        return products.map(p => new Product(p.toObject()));
    }
 async getById(id) {
        const product = await ProductModel.findById(id);
        if (!product) return null;
        return new Product(product.toObject());
    }
    async create(product) {
        const productData = {
            ...product,
            stock: product.stock !== undefined ? product.stock : 0
        };
        const newProduct = await ProductModel.create(productData);
        return new Product(newProduct.toObject());
    }
     async update(id, product) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { ...product },
            { new: true }
        );
        if (!updatedProduct) return null;
        return new Product(updatedProduct.toObject());
    }
    async delete(id) {
        const result = await ProductModel.findByIdAndDelete(id);
        return result !== null;
    }
    async updateStock(id, newStock) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { stock: newStock },
            { new: true }
        );
        if (!updatedProduct) return null;
        return new Product(updatedProduct.toObject());
    }
}

module.exports = MongoProductRepository;