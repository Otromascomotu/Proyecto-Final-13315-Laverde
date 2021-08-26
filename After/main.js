//Declaración y acceso al array
//const miArray = [1,'Juan', "Maria", true, {id: 1, nombre: 'Luis'}];
//console.log(miArray);

/* const numeros = [1, 2, 3, 4, 5]; */

/* for (let i = 0; i < 5; i++) {
    console.log((miArray[i]));
} */

//Método .length
/* const strings = ['Juan', "Sandra", 'Pedro', "Maria", 'Fran'];
console.log( strings.length ); */

//Método .toString
/* const array1 = ["Juan", 4 ,"Maria"];
console.log(array1.toString()); */

//Método .push
/* let miVariable = '200'

const arrayEjemplo = ["Tambor", 6, true, 'Calle', {id: 1, nombre: 'Luis'}];
arrayEjemplo.push("elemento nuevo");
arrayEjemplo.push(10);
arrayEjemplo.push(false);
arrayEjemplo.push({id: 2, nombre: 'Francisco'});
arrayEjemplo.push(miVariable)
console.log(arrayEjemplo); */


/* //Método .join
const otroArray = ["estamos", "en", "un", "after"];
console.log(otroArray.join("*")); */

//Métdodo .concat
/* const miArray    = ["toyota", 63];
const otroArray  = ["ford", 22, "renault", 50];
const nuevoArray = miArray.concat(otroArray);
console.log(nuevoArray); */

//Método .slice
/* const nombres = ['Juan', 'Pedro', 'Francisco', 'Sandra', 'Maria', 'Julieta'];
const masculinos = nombres.slice(0, 3); 
console.log(masculinos); */


//Recorrido del array
/* const productos = [
  { id: 1, producto: "pasta" },
  { id: 2,  producto: "carne" },
  { id: 3,  producto: "lacteos" }
];

for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.producto);
} */


//type of (conocer el tipo de dato)
/* let miFuncion = (a,b) => a + b;
let color = " azul ";
let tamano = 50;
console.log ( typeof miFuncion );
console.log ( typeof color );
console.log ( typeof tamano ); */

/* class Producto {
  constructor(nombre, precio, vendido) {
    this.nombre  = nombre.toUpperCase();
    this.precio  = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

for (const producto of productos)
producto.sumaIva();

console.log(productos);
 */

//METODOS PARA RECORRER EL ARRAY

//Método .find
/* const numeros    = [1, 2, 3, 4, 5];
const encontrado = numeros.find(elemento => elemento > 3); //Encuentra 4
console.log(encontrado); */

/* const nombres     = ["Ana", "Ema", "Juan"];
const encontrado2 = nombres.find(elemento => elemento === "Ema");
const encontrado3 = nombres.find(elemento => elemento === "Alan");
console.log(encontrado3);
 */

//Método .filter
/* const numeros = [1, 2, 3, 4, 5];
const filtro1 = numeros.filter(elemento => elemento > 3);
const filtro2 = numeros.filter(elemento => elemento < 4);
console.log(filtro2); */

/* const nombres = ["Ana", "Ema", "Juan", "Elia"];
const filtro3 = nombres.filter(elemento => elemento.includes("m"));
console.log(filtro3); */

//Método .map
//const numeros  = [1, 2, 3, 4, 5];
/* const porDos   = numeros.map(x => x * 2);
const masCien  = numeros.map(x => x + 100);
console.log(masCien); */

/* const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);
console.log(lengths); */




