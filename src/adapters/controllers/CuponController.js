const CreateCoupon = require('../../application/useCases/CreateCoupon');
const ValidateCoupon = require('../../application/useCases/ValidateCupon');

class CuponController {
    constructor({ createCouponUseCase, validateCouponUseCase }) {
        this.createCouponUseCase = createCouponUseCase;
        this.validateCouponUseCase = validateCouponUseCase;
        this.createCupon = this.createCupon.bind(this);
        this.validateCupon = this.validateCupon.bind(this);
    }

    async createCupon(req, res) {
        try {
            const coupon = await this.createCouponUseCase.execute(req.body);
            res.status(201).json(coupon);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async validateCupon(req, res) {
        try {
            const coupon = await this.validateCouponUseCase.execute(req.params.code);
            if (!coupon || !coupon.isActive) {
                return res.status(404).json({ error: 'Coupon not found or expired' });
            }
            res.json(coupon);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CuponController;