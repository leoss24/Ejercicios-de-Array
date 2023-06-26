/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, 
muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el 
mayor y menor elemento de un arreglo.*/

const array = [10,40,30,20,15,5];

array.sort((a, b) => a - b);

console.log(array);


let menor = Math.min(...array);
let mayor = Math.max(...array);

console.log(`El valor minio es ${menor}`);
console.log(`El valor mayor es ${mayor}`);