//DESESTRUCTURACION
// Tenemos un array con un nombre y apellido
let arr = ["John", "Smith"]

// Asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

let numeros = [1, 2, 3];
let [num1,num2,num3] = numeros;
console.log(num1,num2,num3);

let personas = ["Juan","Maria","Carlos","Roman"];
let [person1,, person3, person4] = personas;
console.log(person3)



const ciudades=[["La Paz","Tarija","Oruro"],["Lima","Puno","Arequipa"]];

const [Bolivia,Peru] = ciudades;

console.log(Peru)
const [ciudad1,ciudad2,ciudad3]= Bolivia;
const [dep1,dep2,dep3]= Peru;
console.log(dep2,ciudad1);

let numPares = [2,4,6,8]
let copiaPares = numPares;

console.log(copiaPares);
copiaPares.push(12);
console.log(copiaPares);
console.log(pares)

  // DESESTRUCTURACION DURANTE LA ITERACION
  let paises = [["Bolivia","Oruro"],["Chile","Santiago"],["Peru","Lima"]];
//   let [primero, segundo,tercero]=paises;
//   let [p1,c1]=primero;
//   let [p2,c2]=segundo;
//   let [p3,c3]=tercero;
//   console.log(`Pais: ${p1} --> ciudad: ${c1}`)
//   console.log(`Pais: ${p2} --> ciudad: ${c2}`)
//   console.log(`Pais: ${p3} --> ciudad: ${c3}`)

  for (const [pais,ciudad] of paises){
    console.log(`Pais: ${pais} -- ciudad: ${ciudad}`)
  }

  //Desestructuracion de objetos 

const rectangulo = {altura:"20", base:"10", area:"200"};
let {altura,base,area} = rectangulo;
console.log(altura, base, area);

 // Si la clave no se encueenta en el objeto la variable se le asignara indefenido
 // En ocasiones la clave podria no estar en el objeto en ese caso podemos asignar un valor predeterminado durante la declaracion

 //let {altura, base, area, perimetro=60} = rectangulo;

 // Desestructuracion de objetos durante la iteracion
const planExamen = [
    {
    tarea:"Preparar Examen",
    hora:"8:00",
    estado:false
    },
    {
        tarea:"Realizar Examen",
        hora:"14:00",
        estado:false
    },
    {
        tarea:"Evaluar Examen",
        hora:"18:00",
        estado:false
    },

]

for (const {tarea, hora, estado} of planExamen){
    console.log(tarea, hora, estado);
}


//PROPAGACION ...
// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// Arreglos


const nums=[1,2,3,4,5,6,7,8,9,10]
let [nu1,nu2,nu3,...rest]=nums
console.log(nu1,nu2,nu3,...rest);

const pares=[0,2,4,6,8,10]
const impares=[1,3,5,7,9]
//   const paresCopia= [...pares]
//   paresCopia.push(12)
//   console.log(paresCopia);
//   const imparesCopia= [...impares]
//   imparesCopia.push(11)
//   console.log(imparesCopia);
  // console.log(imparesCopia);
  // console.log(pares);
  // console.log(impares);

  const todos= [...pares, ...impares]
  console.log(todos);
  
  // Objetos
  const usuario={
    nombre:'Roberto',
    pais:'Colombia',
    ciudad:'Bogota'
  }
  
  let usuarioCopia= {...usuario}
  usuarioCopia.telefono='123123'
  console.log(usuarioCopia);
  console.log(usuario);

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


