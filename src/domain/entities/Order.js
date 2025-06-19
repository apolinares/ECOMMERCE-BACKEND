class Order {
    constructor({ customerId, items = [], total = 0, status = 'pending' }) {
    this.customerId = customerId;
    this.items = items; // [{ productId, quantity, price }]
    this.total = total;
    this.status = status;
    }

    //pensar en una funcion para calcular el total y actualizar el estado de la orden
}

module.exports = Order;
