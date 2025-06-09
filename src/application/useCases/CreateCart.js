const Cart = require("../../domain/entities/Cart");

class CreateCart {
    constructor(cartRepository) {
    this.cartRepository = cartRepository;
    }

    async execute(cartData) {
    const cart = new Cart(cartData);
    return await this.cartRepository.create(cart);
    }
}

module.exports = CreateCart;
