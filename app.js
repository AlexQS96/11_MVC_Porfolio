const express = require('express');
const path = require('path');
const app = express();
const mainRoute = require('./routers/main')
const port = 3000;

// MiddleWare
app.use(express.static('public'));

// Rutas
app.use('/', mainRoute);

//Server
app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto : '+port);
});