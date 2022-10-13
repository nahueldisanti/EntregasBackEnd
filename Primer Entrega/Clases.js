class Usuario {
    constructor(nombre, apellido, libros, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return `Nombre completo:${nombre} ${apellido}`;
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota);
        return mascotas
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBookNames(nombre, autor) {

        libroagregar = {
            "nombre": nombre,
            "autor": autor
        };
        this.libros.push(libroagregar);
        return this.libros;
    }

    getBooksNames() {
        const nombreslibros = []
        this.libros.forEach(libro => nombreslibros.push(libro.nombre))
        return libros
    }
}

const usuarioNahuel = new Usuario("Nahuel", "Di Santi", [{
    "nombre": "El senior de los anillos",
    "autor": "Tolkien"
}, {
    "nombre": "El suenio de los heroes",
    "autor": "Adolfo Bioy Casares"
}], ["perro", "gato"]);


usuarioNahuel.addBookNames("El Desempleo", "Fernando Bogado")
usuarioNahuel.countMascotas()
usuarioNahuel.getFullName()
usuarioNahuel.addMascotas("loro")
usuarioNahuel.getBooksNames()