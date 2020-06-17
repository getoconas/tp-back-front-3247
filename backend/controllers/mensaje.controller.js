const Mensaje = require('../models/mensaje');

const MensajeCtrl = {}

MensajeCtrl.getMensajes = async (req, res) => {
  mensajes = await Mensaje.find();
  res.json(mensajes);
}

MensajeCtrl.createMensaje = async(req, res) => {
  const mensaje = new Mensaje(req.body);
  await mensaje.save();
  res.json({
    'status': 'Mensaje saved'
  })
}

module.exports = MensajeCtrl;