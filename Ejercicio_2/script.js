/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup
y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]).
 Mostrar en consola dicho resultado.*/

 let open

 let usuario = prompt("Ingresa tus palabras");

 let array= usuario.split(",");

 console.log(array);