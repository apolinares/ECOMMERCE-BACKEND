const mongoose = require('mongoose');

const CuponSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descuento: {
        type: Number,
        required: true,
        min: 0
    },
    fechaExpiracion: {
        type: Date,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    usosRestantes: {
        type: Number,
        default: 1,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cupon', CuponSchema);