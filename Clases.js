class Usuario {
    constructor(nombre, apellido, libros, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
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


console.log(usuarioNahuel.addBookNames("El Desempleo", "Fernando Bogado"))
console.log(usuarioNahuel.countMascotas());
console.log(usuarioNahuel.getFullName());
console.log(usuarioNahuel.addMascotas("loro"));
console.log(usuarioNahuel.getBooksNames());

console.log(usuarioNahuel);