class Cupon {
     constructor({ code, discount, expiresAt, isActive = true }) {
        this.code = code;
        this.discount = discount;
        this.expiresAt = expiresAt;
        this.isActive = isActive;
    }
}

module.exports = Cupon;