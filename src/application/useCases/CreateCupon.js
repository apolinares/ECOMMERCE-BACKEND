const CouponRepository = require('../../domain/entities/Coupon');

module.exports = {
    async execute(couponData) {
        // Validaciones y lógica de negocio aquí
        const coupon = await CouponRepository.create(couponData);
        return coupon;
    }
};