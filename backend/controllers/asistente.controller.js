const Asistente = require('../models/asistente');

const asistenteCtrl = {}

asistenteCtrl.getAsistentes = async(req, res) => {
  asistentes = await Asistente.find();
  res.json(asistentes);
}

asistenteCtrl.getAsistente = async(req, res) => {
  const asistente = await Asistente.findById(req.params.id);
  res.json(asistente);
}

asistenteCtrl.createAsistente = async(req, res) => {
  const asistente = new Asistente(req.body);
  await asistente.save();
  res.json({
    'status': 'Asistente saved'
  })
}

asistenteCtrl.editAsistente = async(req, res) => {
  const vAsistente = new Asistente(req.body);

  await Asistente.findByIdAndUpdate(req.params.id, {$set: vAsistente}, {new: true});
  res.json({
    'status': 'Asistente updated'
  })
}

asistenteCtrl.deleteAsistente = async(req, res) => {
  await Asistente.findByIdAndRemove(req.params.id);
  res.json({
    'status': 'Asistente removed'
  })
}

module.exports = asistenteCtrl;