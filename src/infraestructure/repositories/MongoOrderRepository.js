const Order = require('../../domain/entities/Order');

class MongoOrderRepository {
  async create(orderData) {
    try {
      const order = new Order({
        userId: orderData.userId,
        items: orderData.items,
        total: orderData.total,
        status: 'pending', // Estado por defecto
        couponCode: orderData.couponCode || null,
      });
      await order.save();
      return order;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  async findById(orderId) {
    try {
      return await Order.findById(orderId).populate('items.productId');
    } catch (error) {
      throw new Error(`Error finding order: ${error.message}`);
    }
  }

  // Otros métodos necesarios (updateStatus, findByUser, etc.)
}

module.exports = MongoOrderRepository;