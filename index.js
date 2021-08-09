const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//crear el servidor de express
const app = express();

// base de datos
dbConnection();

//CORS
app.use(cors())

//directorio publico
app.use(express.static('public'));

// Leactura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen(process.env.PORT, () => {
   console.log(`Servidor en puerto ${process.env.PORT}`); 
});