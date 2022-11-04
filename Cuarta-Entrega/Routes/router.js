const express = require('express');
const app = express()
const { Router } = express;
const Contenedor = require('../index.js');
const routerProductos = new Router();
const ProductosController = new Contenedor('productos.json');

routerProductos.get('/api/productos', ProductosController.getAllFront);
routerProductos.get('/api/productos/:id', ProductosController.getById);
routerProductos.post('/api/productos', ProductosController.save);
routerProductos.put('/api/productos/:id', ProductosController.updateItemById);
routerProductos.delete('/api/productos/:id', ProductosController.deleteById);

module.exports = routerProductos