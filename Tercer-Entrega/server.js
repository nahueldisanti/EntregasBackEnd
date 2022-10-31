
const express = require('express');
const Contenedor = require('./index.js');
const app = express();
const PORT = 8080; 
const contenedor = require('./index.js')

app.listen(PORT, () =>

    {try {
        console.log(
            `Servidor inicializado en el puerto ${PORT} el ${new Date().toLocaleString()}`
        )
    }catch(error){
        console.log(`Error:${error}.No se pudo levantar el servidor.`)
    }
});

app.get('/productos', (request, response) => {
    try {
        const path = new Contenedor('./productos.json');
        const getProducts = path.getAll(path);
        const products = JSON.stringify(getProducts);
        response.send(`Productos:${products}`)

        response.send(`Estos son los items: ${products}`);

    }catch(error){
        console.log(error);
    }
});

app.get('/randomProduct', (request, response) => {
    try {
        const path = new Contenedor('./productos.json');
        const getRandomProduct = path.getRandom(path);
        console.log(getRandomProduct)
        const randomProduct = JSON.stringify(getRandomProduct);
        response.send(`Este es tu item random: ${randomProduct}`);
        
    }catch(error){
        console.log(error);
    }
});