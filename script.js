var numero01;
var numero02;
numero01 = parseInt(prompt("Ingrese el número 1"));
numero02 = parseInt(prompt("Ingrese el número 2"));
if (numero01 > numero02) {
  document.write("El número mayor es: " + numero01 + " (Número 1)");
} else {
  document.write("El número mayor es: " + numero02 + " (Número 2)");
}