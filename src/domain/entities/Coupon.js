class Coupon {
constructor({ code, discount, expiresAt, used = false, createdAt = new Date() }) {
    this.code = code;
    this.discount = discount; // El cliente puede solicitar poner un monto por ejemplo 0.10 (10%) o monto fijo
    this.expiresAt = expiresAt;
    this.used = used;
    this.createdAt = createdAt;
}

// se debe validar si el cupon es valido o no esta vencido, 
//una funcion para aplicar el descuento y marcar el cupon como usado

}

module.exports = Coupon;
