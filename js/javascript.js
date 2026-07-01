//1
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


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
