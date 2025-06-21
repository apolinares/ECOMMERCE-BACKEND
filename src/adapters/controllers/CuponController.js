const CreateCoupon = require('../../application/useCases/CreateCoupon');
const ValidateCoupon = require('../../application/useCases/ValidateCoupon');

module.exports = {
    async createCoupon(req, res) {
        try {
            const coupon = await CreateCoupon.execute(req.body);
            res.status(201).json(coupon);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async validateCoupon(req, res) {
        try {
            const coupon = await ValidateCoupon.execute(req.params.code);
            if (!coupon || !coupon.isActive) {
                return res.status(404).json({ error: 'Coupon not found or expired' });
            }
            res.json(coupon);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
   
};