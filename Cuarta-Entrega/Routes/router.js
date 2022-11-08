const express = require('express');
const app = express()
const { Router } = express;
const Contenedor = require('../index.js');
const routerProductos = new Router();
const ProductosController = new Contenedor('productos.json');

routerProductos.get('/', ProductosController.getAllFront);
routerProductos.get('/:id', ProductosController.getById);
routerProductos.post('/', ProductosController.save);
routerProductos.put('/:id', ProductosController.updateItemById);
routerProductos.delete('/:id', ProductosController.deleteById);

module.exports = routerProductos