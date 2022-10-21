
const express = require('express');
const app = express();
const PORT = 8080; 
const contenedor = require('./index.js')

app.listen(PORT, () =>
    console.log(
        `Servidor inicializado en el puerto ${PORT} el ${new Date().toLocaleString()}`
    )
);

app.get('/productos', (req, res) => {

});