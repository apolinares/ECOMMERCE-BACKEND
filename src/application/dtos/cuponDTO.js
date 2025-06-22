class CuponDTO {
    constructor({
        id = null, codigo = '', descripcion = '', descuento = 0, tipoDescuento = 'porcentaje', fechaInicio = null, fechaFin = null,
        cantidadMaxima = 0, cantidadUsada = 0, activo = true,   usuarioCreacion = '', fechaCreacion = null, usuarioModificacion = '', fechaModificacion = null
    } = {}) {
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.descuento = descuento;
        this.tipoDescuento = tipoDescuento;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cantidadMaxima = cantidadMaxima;
        this.cantidadUsada = cantidadUsada;
        this.activo = activo;
        this.usuarioCreacion = usuarioCreacion;
        this.fechaCreacion = fechaCreacion;
        this.usuarioModificacion = usuarioModificacion;
        this.fechaModificacion = fechaModificacion;
    }
}

module.exports = CuponDTO;