class Usuario {
    constructor(name, lastname) {

        this.name = name;
        this.lastname = lastname;
        this.books = [];
        this.pets = [];
    }

    getFullName() {
        return `Nombre completo:${this.name} ${this.lastname}`;
    }

    addPets(pet) {
        this.pets.push(pet);
        return this.pets
    }

    countPets() {
        return this.pets.length;
    }

    addBookNames(name, author) {

        const addbook = {
            name: name,
            author: author
        };
        this.books.push(addbook);
        return this.books;
    }

    getBooksNames() {
        const namesbooks = []
        this.books.forEach(book => namesbooks.push(book.name))
        return namesbooks
    }
}

const usuarioNahuel = new Usuario("Nahuel", "Di Santi", [{
    "nombre": "El senior de los anillos",
    "autor": "Tolkien"
}, {
    "nombre": "El suenio de los heroes",
    "autor": "Adolfo Bioy Casares"
}], ["perro", "gato"]);


usuarioNahuel.addBookNames("El Desempleo", "Fernando Bogado");
usuarioNahuel.countPets();
usuarioNahuel.getFullName();
usuarioNahuel.addPets("loro");
usuarioNahuel.getBooksNames();