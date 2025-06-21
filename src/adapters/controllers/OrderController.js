const CreateOrder = require('../../application/useCases/CreateOrder');
const GetOrderById = require('../../application/useCases/GetOrderById');

module.exports = {
    async createOrder(req, res) {
        try {
            const order = await CreateOrder.execute(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async getOrderById(req, res) {
        try {
            const order = await GetOrderById.execute(req.params.id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
   
};