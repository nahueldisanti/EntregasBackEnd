const fs = require('fs');
const PRODUCTS = './productos.json'

class Contenedor {

    constructor(file) {
        this.file = file;
    }

    getAllFront =(req, res, next) => {
        try{
            const items = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
            res.send(items);
    }   catch(error) {
        res.send(error)
    }}

    getAll = async () => {
        try{
            const items = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
            return items;
    } catch(error){
        console.log(error);
    }}

    getById = (req, res, next) => {
        const {id} = req.params
        const items = this.getAll()
        const foundItem = items.find( i => i.id === parseInt(id));
        console.log(`Este es el articulo encontrado: ${foundItem}`);
        res.send(foundItem);
    }

    getRandom = (req, res, next) => {
        const items = this.getAll();
        const randomObject = items[Math.floor((Math.random() * items.length))];
        console.log(randomObject)
        res.send(randomObject);
    }

    save = async (req, res, next) => {
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

    deleteById = async (req, res, next) => {
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

    deleteAll = async () => {
        try{
            fs.writeFileSync(this.file,'');
            console.log('Elementos eliminados');
        }catch(error){
            res.send(error);
        }
    }
    
    updateItemById = async (req, res, next) => {
        try{
            const items = this.getAll();
            const {id} = req.params;
            const {title, price, thumbnail} = req.body;
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