class GetOrderById {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderId) {
        if (!orderId) {
            throw new Error('Order ID is required');
        }
        const order = await this.orderRepository.getById(orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        return order;
    }
}

module.exports = GetOrderById;