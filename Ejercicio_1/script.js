/*1. Crear un array vacío, luego generar 10 números al azar y guardarlos
 en un array. Mostrar en consola el resultado del array.*/


let numeros = [];

for (let num = 0; num < 10; num++){
    numeros.push(Math.floor(Math.random() * 100))
}

console.log(numeros);
