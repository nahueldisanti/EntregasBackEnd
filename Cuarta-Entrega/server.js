const express = require('express');
const Contenedor = require('./index.js');
const routerProductos = require('./Routes/router.js');
const app = express();
const PORT = 8080; 


app.listen(PORT, () =>

    {try {
        console.log(
            `Servidor inicializado en el puerto ${PORT} el ${new Date().toLocaleString()}`
        )
    }catch(error){
        console.log(`Error:${error}.No se pudo levantar el servidor.`)
    }
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', routerProductos);
