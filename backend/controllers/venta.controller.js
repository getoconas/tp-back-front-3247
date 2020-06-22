const Venta = require('../models/venta'); 

const VentaCtrl = {}

VentaCtrl.getVentas = async (req, res) => {
    venta = await Venta.find().populate("Adelanto");
    res.json(venta);
}

VentaCtrl.createVenta = async (req, res) => {
    const venta = new Venta (req.body);
    await venta.save();
    res.json({
        'status': 'Venta saved',
        'venta': venta
    });
}

VentaCtrl.editVenta = async (req, res) => {
    const vVenta =  new Venta (req.body);

    await Venta.findByIdAndUpdate(req.params.id, {$set: vVenta}, {new: true});
    res.json({
        'status': 'Venta updated'
    })
}

VentaCtrl.getVenta = async (req, res) => {
    const venta = await (await Venta.findById(req.params.id)).populate("venta");
    res.json(venta);
}

VentaCtrl.deleteVenta = async (req, res)=>{
    await Venta.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Venta removed'
    })
}

module.exports = VentaCtrl;