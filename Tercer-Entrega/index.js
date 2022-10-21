const fs = require('fs');
const PRODUCTS = './productos.txt'

class Contenedor {

    constructor(file) {
        this.file = file;
    }

    getAll = () => {
        const items = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
        console.log(`Estos son todos los articulos encontrados en la lista: ${items}`);
        return items
    }

    getById = (id) => {
        const items = this.getAll()
        const foundItem = items.find( i => i.id === id);
        console.log(`Este es el articulo encontrado: ${foundItem}`);
        return foundItem
    }

    save = (object) => {
        try {
            if (fs.existsSync(this.file)) {
                const data = this.getAll()
                const lastId = data[data.length-1].id;
                object.id = lastId + 1;
                data.push(object);
                const dataJson = JSON.stringify(data);
                fs.writeFileSync(this.file, dataJson);
                console.log(`El articulo ${title} ha sigo agregado con exito con el ID ${lastId}`)
                return lastId

            } else {
                object.id = 1
                const items = [];
                items.push(object);
                const itemsJson = JSON.stringify(items);
                fs.writeFileSync(this.file, itemsJson);
                console.log(`El articulo ${title} ha sigo agregado con exito`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = (id) => {
        try{    
            const info = this.getAll()
            const newInfoFiltered = info.filter((i) => i.id !== id);
            const newInfoFilteredJson = JSON.stringify(newInfoFiltered);
            fs.writeFileSync(this.file, newInfoFilteredJson);
            console.log(`El articulo con id ${id} ha sido eliminado con exito!`);
        } catch(error) {
            console.log(error)
        }
    }

    deleteAll = () => {
        try{
            fs.writeFileSync(this.file,'');
        }catch(error){
            console.log(error)
        }
    }
}

//Instancia Contenedor
const contenedor = new Contenedor(PRODUCTS);
//Obteniendo producto ID 3
contenedor.getById(3);
//Obteniendo productos originales
contenedor.getAll();
//Agregando algunos productos a productos.txt.
const productoAAgregar = {
    name:"Piedra afliadora",
    price: 65856.65,
    thumbnail: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQh1LJUO_93RECipIhwoMxdT0SmY3QL5TNr9a94pXk62T2Wyp_8XN8WhCigLtdRAqoZsq_MqMCZQQ&usqp=CAc",
    id: undefined
}
contenedor.save(productoAAgregar);
//Eliminando producto ID 2
contenedor.deleteById(2);
//Eliminando todos los productos
contenedor.deleteAll()


module.exports = Contenedor;