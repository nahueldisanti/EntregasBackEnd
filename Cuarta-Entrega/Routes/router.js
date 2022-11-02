const express = require('express');
const app = express();
const { Router } = express;
const Contenedor = require('../index.js');
const routerProductos = new Router();
const ProductosController = new Contenedor('productos.json');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

routerProductos.get('/api/productos', ProductosController.getAll);
routerProductos.get('/api/productos/:id', ProductosController.getById);
routerProductos.post('/api/productos', ProductosController.save);
routerProductos.put('/api/productos/:id', ProductosController.updateItemById);
routerProductos.delete('/api/productos/:id', ProductosController.deleteById);

module.expors = routerProductos