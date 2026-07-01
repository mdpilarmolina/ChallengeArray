//1. Bucle del 1 al 20: Crea un bucle que imprima los números del 1 al 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//2. Tabla de multiplicar del 5: Escribe un bucle que imprima la tabla de multiplicar del 5.

//3. Filtrar números mayores a 10. Dado el array: let numerosMayoresA10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; Usar un bucle para crear un nuevo array con solo los números mayores a 10.

//4. Estación del año: Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).

//5. Switch de idiomas: Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas).

//6. Array de animales: Crear un array con 5 animales. Añadir 2 más (uno al inicio y otro al final). 
// Eliminar el que está en la tercera posición.
// Mostrar la cantidad total de animales.

//7. Cálculo de IMC: Diseñar un algoritmo que calcule el IMC con peso (kg) y altura (m).
// Mostrar el resultado con su categoría: Menos de 18.5 → Peso bajo. Entre 18.5 y 24.99 → Peso normal 25 o más → Sobrepeso
// Fórmula: imc = peso / (altura ** 2);


//arrayMundial
const equipos = [
  "Argentina", "Francia", "Brasil", "Croacia",
  "Marruecos", "Inglaterra", "Portugal", "Países Bajos",
  "México", "Polonia", "Australia", "Suiza",
  "Senegal", "Japón", "España", "Estados Unidos",
  "Arabia Saudita", "Túnez", "Camerún", "Serbia",
  "Dinamarca", "Uruguay", "Ghana", "Corea del Sur",
  "Ecuador", "Qatar", "Irán", "Costa Rica",
  "Bélgica", "Canadá", "Gales", "Alemania"
];

//Buscar si un país está en el mundial (includes, find)
let pais = "Venezuela";
let esta = equipos.includes(pais)
console.log(equipos.includes("Venezuela"));

//Ordenar alfabéticamente (sort)
const equiposOrdenados = [...equipos].sort((a, b) => a.localeCompare(b));
console.log("Lista ordenada alfabéticamente:", equiposOrdenados);

//Obtener los primeros N equipos (slice)
const primerosCinco = equipos.slice(0, 5);
console.log("Los primeros 5 equipos son:", primerosCinco);

//Contar cuántos hay (length)
const cuantosHay = equipos.length
console.log("Cantidad de equipos en el array: ", equipos.length)

//Transformar a mayúsculas o minúsculas (map)
const enMayusculas = equipos.map(function(pais) {
    return pais.toUpperCase();
});
console.log("Todos en mayúsculas:", enMayusculas);

const enMinusculas = equipos.map(function(pais) {
    return pais.toLowerCase();
});
console.log("Todos en minúsculas:", enMinusculas);

//Filtrar por letra inicial (filter)
const empiezanConC = equipos.filter(pais => pais.startsWith("C"));
console.log("Equipos que empiezan con la letra C:", empiezanConC);


const pantalla = document.getElementById("pantalla");
pantalla.innerHTML =`<h2>Paises Mundial 2026: </h2><p>${equipos}</p>`
