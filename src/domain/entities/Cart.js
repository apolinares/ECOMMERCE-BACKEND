class Cart {
  constructor({
    id,
    userId,
    items = [],
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    this.id = id;
    this.userId = userId;
    this.items = items; // [{ productId, quantity }]
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Cart;
