const fs = require('fs');

class Contenedor {

    constructor() {
        this.title=undefined,
        this.price=undefined, 
        this.thumbnail=undefined, 
        this.id=undefined
    }

    getById = (id) => {
        const items = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        const foundItem = items.find( i => i.id === id);
        console.log(foundItem)
    }

    getAll = () => {
        const items = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        console.log(items)
    }

    save = (title, price, thumbnail, object) => {
        try {
            if (fs.existsSync('./productos.txt')) {
                this.title = title;
                this.price = price;
                this.thumbnail = thumbnail;
                const data = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
                const lastId = data[data.length-1].id;
                this.id = lastId + 1;
                data.push(object);
                const dataJson = JSON.stringify(data);
                fs.writeFileSync('./productos.txt', dataJson);

            } else {
                this.title = title;
                this.price = price;
                this.thumbnail = thumbnail;
                this.id = 1
                const items = [];
                items.push(object);
                const itemsJson = JSON.stringify(items);
                fs.writeFileSync('./productos.txt', itemsJson);
            }
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = (id) => {
        const info = JSON.parse(fs.readFileSync('./productos.txt', 'utf-8'));
        const newInfoFiltered = info.filter((i) => i.id !== id);
        const newInfoFilteredJson = JSON.stringify(newInfoFiltered);
        fs.writeFileSync('./productos.txt', newInfoFilteredJson)
    }

    deleteAll = () => {
        fs.writeFileSync('productos.txt','');
    }
}

//Instancia Contenedor
const contenedor = new Contenedor ();
//Obteniendo producto ID 3
contenedor.getById(3);
//Obteniendo productos originales
contenedor.getAll();
//Agregando algunos productos a productos.txt.
contenedor.save('Pinzas precision', 6549.25,"Imagen", contenedor);
contenedor.save('Batidor de mano', 3654.87,"Imagen", conteendor);
contenedor.save('Espatula de plastico', 5647.89,"Imagen", contenedor);
contenedor.save('Cuchillo pan', 78984.64,"Imagen", contenedor);
//Eliminando producto ID 2
contenedor.deleteById(2);
//Eliminando todos los productos
contenedor.deleteAll()
