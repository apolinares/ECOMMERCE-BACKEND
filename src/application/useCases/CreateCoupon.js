class CreateCoupon {
    constructor(couponRepository) {
        this.couponRepository = couponRepository;
    }

    async execute({ code, discount, expiresAt }) {
        if (!code || !discount || !expiresAt) {
            throw new Error('Missing required coupon fields');
        }

        // Check if coupon code already exists
        const existing = await this.couponRepository.findByCode(code);
        if (existing) {
            throw new Error('Coupon code already exists');
        }

        const coupon = {
            code,
            discount,
            expiresAt: new Date(expiresAt),
            createdAt: new Date(),
            isActive: true,
        };

        return await this.couponRepository.create(coupon);
    }
}

module.exports = CreateCoupon;