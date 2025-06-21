const OrderRepository = require('../../domain/entities/Order');

module.exports = {
    async execute(orderData) {
        // Validaciones y lógica de negocio aquí
        const order = await OrderRepository.create(orderData);
        return order;
    }
};