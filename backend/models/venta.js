const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const { Schema } = mongoose;

const VentaSchema = new Schema({
  dni: { type: Number, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  adelanto: { type: [Adelanto.schema], required: false }
})
//   adelanto: { type: Schema.Types.ObjectId, ref: Adelanto, required: true }
module.exports = mongoose.model('Venta', VentaSchema);