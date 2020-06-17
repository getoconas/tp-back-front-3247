var express = require('express');
var app = express();

const { mongoose } = require('./database');
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/asistentes', require('./routes/asistentes.routes'));

// Setting
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server started on port', app.get('port'));
});