// ===== PARTE A: array de valores simples =====
console.log("--- PARTE A ---");
console.log("Ejercicio 1");
const categorias = ['Ford', 'Chevrolet', 'Renault', 'Volkswagen'];
console.log("Ejercicio 2");
console.log(categorias, categorias.length);
console.log("Ejercicio 3");
console.log(categorias[0],categorias[categorias.length-1]);
console.log("Ejercicio 4");
categorias.push('Fiat');
console.log(categorias);
console.log("Ejercicio 5");
console.log(categorias.pop());
const elementoPopeado = categorias.pop();
console.log(elementoPopeado);

// ===== PARTE B: objeto =====
console.log("--- PARTE B ---");

console.log("Ejercicio 6");
const usuario = {
    nombre: 'Jose',
    edad: '34',
    ciudad: 'Posadas',
    temaFavorito: 'Patience - Guns N Roses'
};
console.log("Ejercicio 7");
console.log(`El Usuario ${usuario.nombre}, tiene ${usuario.edad}, reside en la ciudad de ${usuario.ciudad} y su tema favorito es ${usuario.temaFavorito}`);
console.log("Ejercicio 8");
usuario.nombre = 'Pedro';
console.log(usuario);
console.log("Ejercicio 9");
usuario['ciudadNacimiento'] = 'El Dorado';
console.log(usuario);

// ===== PARTE C: array de objetos =====
console.log("--- PARTE C ---");

console.log("Ejercicio 10");
const catalogo = [
    {
        titulo: 'Interestelar',
        categoria: 'Ciencia ficcion',
        puntaje: 10,
        visto: true
    },
    {
        titulo: 'Superbad',
        categoria: 'Comedia',
        puntaje: 8,
        visto: true
    },
    {
        titulo: 'El Conjuro',
        categoria: 'Terror',
        puntaje: 0,
        visto: false
    },
    {
        titulo: 'Avatar',
        categoria: 'Ciencia ficcion/Accion',
        puntaje: 10,
        visto: true
    },
]
console.log(catalogo);
console.log("Ejercicio 11");
console.log(
    "El titulo del primer elemento es: " + catalogo[0].titulo + "\n" +
    "El puntaje del tercer elemento es: " + catalogo[2].puntaje
);
console.log("Ejercicio 12");
if (catalogo[1].visto == true){
    console.log(
        catalogo[1].titulo + " - " + 
        catalogo[1].categoria + " - " +
        catalogo[1].puntaje + "/10 - Visto"
    );
}
else {
    console.log(
        catalogo[1].titulo + " - " + 
        catalogo[1].categoria + " - " +
        catalogo[1].puntaje + "/10 - Pendiente"
    );
};
console.log("Ejercicio 13");
catalogo[1].puntaje = 7
console.log(catalogo[1])
console.log("Ejercicio 14");
const nuevoElemento = {
    titulo: 'The Prestige',
    categoria: 'Suspenso',
    puntaje: 0,
    visto: false
};
catalogo.push(nuevoElemento);
console.log('El Catalogo tiene ' + catalogo.length + ' elementos');

// ===== PARTE D: destructuring =====
console.log("--- PARTE D ---");

console.log("Ejercicio 15");
const {titulo,categoria,puntaje,visto} = catalogo[0];
if (visto == true){
    console.log(
        titulo + " - " + 
        categoria + " - " +
        puntaje + "/10 - Visto"
    );
}
else {
    console.log(
        titulo + " - " + 
        categoria + " - " +
        puntaje + "/10 - Pendiente"
    );
};
console.log("Ejercicio 16");
const {nombre, ciudad} = usuario;
console.log(
    "\n El nombre del usuario es: " + nombre + "\n La ciudad donde reside es: " + ciudad
);
console.log("Ejercicio 17");
const [primero, segundo] = catalogo;
console.log(primero.titulo, '\n', segundo.titulo);

// ===== PARTE E: opcional =====
console.log("--- PARTE E ---");

console.log("Ejercicio 18");
const [{titulo: titulo1}, {titulo: titulo2}] = catalogo;
console.log(titulo1 + ' \n ' + titulo2);
console.log("Ejercicio 19");
const {apellido = "Gutierrez"} = usuario;
console.log(apellido);
console.log("Ejercicio 20");
let uno = 10, dos = 20;
[uno, dos] = [dos, uno];
console.log(uno, dos);