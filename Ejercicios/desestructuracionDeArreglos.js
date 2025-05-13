
//                                                      EJERCICIOS
// DESESTRUCTURAR LOS SIGUIENTES ARREGLOS Y MOSTRAR EN CONSOLA TODAS LA REPUESTAS DEBEN TENER FORMATO CON BACKTIC Y ALGUNA DESCRIPCION:

// 1. let lenguajes= [["React","Xpress,"Node"],["MongoDB","MySQL","Postgres"]] sin iterar

let lenguajes= [["React","Xpress","Node"],["MongoDB","MySQL","Postgres"]];

let [frontend, backend] = lenguajes;
let [l1, l2, l3] = frontend;
let [db1, db2, db3] = backend;

console.log(`Frontend: ${l1}, ${l2}, ${l3}`);
console.log(`Bases de Datos: ${db1}, ${db2}, ${db3}`);

// 2. let alimentos = [["fruta","papaya",],["verdura","zanahoria"],["legumbre","habas"]] con iteracio for..of

let alimentos = [["fruta","papaya"],["verdura","zanahoria"],["legumbre","habas"]];

for (const [categoria, nombre] of alimentos){
    console.log(`Categoria: ${categoria} -- Nombre: ${nombre}`);
}

// 3. let persona = {nombre: "Sara", edad:25, pais: "Colombia",  trabajo: "Desarrollador"}; sin iterar

let persona = {nombre: "Sara", edad:25, pais: "Colombia",  trabajo: "Desarrollador"};
let {nombre, edad, pais, trabajo} = persona;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`País: ${pais}`);
console.log(`Trabajo: ${trabajo}`);

// 4. Crear un arreglo de objetos que guarde 3 objetos de la clase Carro y mostrar  en consola con iteracion for..of

const Carros = [
    {marca: "Toyota", modelo: "Corolla", año: 2020},
    {marca: "Honda", modelo: "Civic", año: 2019},
    {marca: "Ford", modelo: "Focus", año: 2021}
];

for (const {marca, modelo, año} of Carros){
    console.log(`Marca: ${marca} | Modelo: ${modelo} | Año: ${año}`);
}


