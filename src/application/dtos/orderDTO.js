class OrderDTO {
    constructor(order) {
        this.id = order._id;
        this.user = order.user;
        this.products = order.products;
        this.total = order.total;
        this.status = order.status;
        this.shippingAddress = order.shippingAddress;
        this.paymentMethod = order.paymentMethod;
        this.createdAt = order.createdAt;
        this.updatedAt = order.updatedAt;
    }
}

module.exports = OrderDTO;