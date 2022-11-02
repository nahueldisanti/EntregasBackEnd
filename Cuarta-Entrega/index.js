const fs = require('fs');
const PRODUCTS = './productos.json'

class Contenedor {

    constructor(file) {
        this.file = file;
    }

    getAll = (req, res, next) => {
        const items = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
        res.send(items);
    }

    getById = (req, res, next) => {
        const {id} = req.params
        const items = this.getAll()
        const foundItem = items.find( i => i.id === id);
        console.log(`Este es el articulo encontrado: ${foundItem}`);
        res.send(foundItem);
    }

    getRandom = (req, res, next) => {
        const items = this.getAll();
        const randomObject = items[Math.floor((Math.random() * items.length))];
        console.log(randomObject)
        res.send(randomObject);
    }

    save = (req, res, next) => {
        try {
            if (fs.existsSync(this.file)) {
                const data = this.getAll()
                const lastId = data[data.length-1].id;
                object.id = lastId + 1;
                data.push(object);
                const dataJson = JSON.stringify(data);
                fs.writeFileSync(this.file, dataJson);
                console.log(`El articulo ${title} ha sigo agregado con exito con el ID ${lastId}`)
                res.send(lastId);

            } else {
                object.id = 1
                const items = [];
                items.push(object);
                const itemsJson = JSON.stringify(items);
                fs.writeFileSync(this.file, itemsJson);
                res.send(`El articulo ${title} ha sigo agregado con exito`)
            }
        } catch (error) {
            res.send(error)
        }
    }

    deleteById = (req, res, next) => {
        try{   
            const {id} = req.params;
            const info = this.getAll()
            const newInfoFiltered = info.filter((i) => i.id !== id);
            const newInfoFilteredJson = JSON.stringify(newInfoFiltered);
            fs.writeFileSync(this.file, newInfoFilteredJson);
            res.send(`El articulo con id ${id} ha sido eliminado con exito!`);
        } catch(error) {
            res.send(error)
        }
    }

    deleteAll = (req, res, next) => {
        try{
            fs.writeFileSync(this.file,'');
            res.send(`Productos eliminados`);
        }catch(error){
            res.send(error);
        }
    }
    
    updateItemById = (req, res, next) => {
        try{
            const items = this.getAll();
            const {id} = req.params;
            const {title, price, thumbnail} = req.body;
            const item = this.getById(id);
            const newItem = {
                title:title,
                price:price,
                thumbnail:thumbnail,
                id: id
            };
            items[id] = newItem;
            const itemsJson = JSON.stringify(items);
            fs.writeFileSync(this.file, itemsJson);
            res.send(`Producto con id:${id} actualizado correctamente`)

        }catch(error){
            res.send(error)
        }
    }

}
module.exports = Contenedor;