class ValidateCupon {
    constructor(cuponRepository) {
        this.cuponRepository = cuponRepository;
    }

    /**
     * Valida un cupón por su código.
     * @param {string} code - Código del cupón a validar.
     * @returns {Promise<Object>} - Información del cupón si es válido.
     * @throws {Error} - Si el cupón no es válido o está expirado.
     */
    async execute(code) {
        if (!code) {
            throw new Error('El código del cupón es requerido');
        }

        const cupon = await this.cuponRepository.findByCode(code);

        if (!cupon) {
            throw new Error('Cupón no encontrado');
        }

        if (cupon.expired || (cupon.expirationDate && new Date(cupon.expirationDate) < new Date())) {
            throw new Error('El cupón está expirado');
        }

        if (cupon.used) {
            throw new Error('El cupón ya fue utilizado');
        }

        return {
            code: cupon.code,
            discount: cupon.discount,
            expirationDate: cupon.expirationDate,
            valid: true
        };
    }
}

module.exports = ValidateCupon;