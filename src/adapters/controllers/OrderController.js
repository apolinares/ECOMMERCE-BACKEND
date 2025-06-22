const CreateProduct = require('../../application/useCases/CreateOrder');
const ProductDTO = require('../../application/dtos/OrderDTO');
class OrderController {
    constructor({ orderService, userService }) {
        this.orderService = orderService;
        this.userService = userService;
    }

    async createOrder(req, res) {
        try {
            const userId = req.user.id;
            const orderData = req.body;
            const order = await this.orderService.createOrder(userId, orderData);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOrderById(req, res) {
        try {
            const orderId = req.params.id;
            const order = await this.orderService.getOrderById(orderId);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Agrega más métodos según sea necesario
}

module.exports = OrderController;