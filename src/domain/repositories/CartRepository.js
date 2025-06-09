class CartRepository {
    async getTotalPrice(product) { throw new Error('Method not implemented'); }
    async addItem(productId, quantity) { throw new Error('Method not implemented'); }
    async removeItem(productId) { throw new Error('Method not implemented'); }
    async clear() { throw new Error('Method not implemented'); }
}

module.exports = CartRepository;