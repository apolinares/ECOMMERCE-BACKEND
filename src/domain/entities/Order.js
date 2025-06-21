class Order {
   constructor({ userId, items, total, couponCode, status = 'pending' }) {
        this.userId = userId;
        this.items = items;
        this.total = total;
        this.couponCode = couponCode;
        this.status = status;
        this.createdAt = new Date();
    }
}

module.exports = Order;