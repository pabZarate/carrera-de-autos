/* Consigna
En una prueba, un piloto tiene que completar
4 vueltas
Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el
promedio de vuelta
*/

let vuelta1: number | null = Number(
  prompt("Tiempo de la primer vuelta (en minutos)", "ejemplo")
);
let vuelta2: number | null = Number(
  prompt("Tiempo de la segunda vuelta (en minutos)", "ejemplo")
);
let vuelta3: number | null = Number(
  prompt("Tiempo de la tercer vuelta (en minutos)", "ejemplo")
);
let vuelta4: number | null = Number(
  prompt("Tiempo de la cuarta vuelta (en minutos)", "ejemplo")
);

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let promedioVueltas: number = tiempoTotal / 4;

console.log("El tiempo total fue: " + tiempoTotal, "minutos.");
console.log("El promedio entre vueltas fue: " + promedioVueltas, "minutos.");
