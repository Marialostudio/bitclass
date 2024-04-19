"use strict"

/* const userName = prompt("Ingrese su nombre");
console.log (userName)

switch (userName) {
    case "":
        document.write("Hola")
  break;
  default:
    document.write("Hola " + userName + ", llegaste!")
  break;
} */

//Programa que pida nombre y apellido

/* const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
console.log (nombre + " " + apellido)

switch (nombre + apellido) {
    case "":
        document.write("Hola")
  break;
  default:
    document.write("Hola " + nombre + " " + apellido + ", llegaste!")
  break;
} */

// Programa que reciba un numero del usuario y diga si es igual a 0, de lo contrario si es positivo o si es negativo

/* const numero = prompt ("Ingrese un número");
console.log (numero);

if (numero == 0){
    document.write ('el numero es igual a 0');
}  else if (numero > 0) {
    document.write ("el numero es positivo");
}   else {
    document.write ("el numero es negativo");
} */

// Hacer un programa que reciba del usuario dos numeros y que muestre cual es el numero mayor y cual es el numero menor

let numero1 = prompt ("Ingrese un numero");
let numero2 = prompt ("Ingrese otro numero");
numero1 = parseFloat (numero1);
numero2 = parseFloat (numero2);
console.log (numero1 + " y " + numero2)

document.write ("El primer numero es " + numero1 + " y el segundo numero es " + numero2 + ", ")
if (numero1 > numero2) {
    document.write ("el numero " + numero1 + " es mayor y el numero " + numero2 + " es menor");
}
    else {
        document.write ("el numero " + numero2 + " es mayor y el numero " + numero1 + " es menor");
    }
