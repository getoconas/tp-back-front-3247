const Empresa = require('../models/empresa');

const EmpresaCtrl = {}

EmpresaCtrl.getEmpresas = async (req, res) => {
  empresas = await Empresa.find();
  res.json(empresas);
}

EmpresaCtrl.createEmpresa = async(req, res) => {
  const empresa = new Empresa(req.body);
  await empresa.save();
  res.json({
    'status': 'Empresa saved'
  })
}

module.exports = EmpresaCtrl;