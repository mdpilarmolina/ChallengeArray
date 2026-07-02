//1. Bucle del 1 al 20: Crea un bucle que imprima los números del 1 al 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//2. Tabla de multiplicar del 5: Escribe un bucle que imprima la tabla de multiplicar del 5.

//3. Filtrar números mayores a 10. Dado el array: let numerosMayoresA10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; Usar un bucle para crear un nuevo array con solo los números mayores a 10.

//4. Estación del año: Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).

//5. Switch de idiomas: Usar un switch para imprimir un saludo diferente según el idioma (mínimo 7 idiomas).

//6. Array de animales: Crear un array con 5 animales.
const animales = ["Leon", "Zorro", "Lobo", "Gato", "Pantera"];

// Añadir 2 más (uno al inicio y otro al final). 
animales.unshift("Oso");
animales.push("Elefante");
console.log("Array con nuevo animal al inicio", animales.unshift)
console.log("Array con nuevo animal al final de la lista", animales.push)

// Eliminar el que está en la tercera posición.
animales.splice(2,1)
console.log("Array después de eliminar la tercera posición:", [...animales]);

// Mostrar la cantidad total de animales.
console.log("Cantidad total de animales", animales.length)



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

//Transformar a mayúsculas o minúsculas (map) ia
const enMayusculas = equipos.map(function(pais) {
    return pais.toUpperCase();
});
console.log("Todos en mayúsculas:", enMayusculas);

const enMinusculas = equipos.map(function(pais) {
    return pais.toLowerCase();
});
console.log("Todos en minúsculas:", enMinusculas);

//Filtrar por letra inicial (filter) ia
const empiezanConC = equipos.filter(pais => pais.startsWith("C"));
console.log("Equipos que empiezan con la letra C:", empiezanConC);


const pantalla = document.getElementById("pantalla");
pantalla.innerHTML =`<h2>Paises Mundial 2026: </h2><p>${equipos}</p>`


const selecciones = [
  {
    pais: "Argentina",
    grupo: "J",
    puntos: 6,
    golesFavor: 5,
    golesContra: 1,
    jugadores: [
      "Julián Álvarez",
      "Enzo Fernández",
      "Alexis Mac Allister"
    ]
  },
  {
    pais: "Brasil",
    grupo: "C",
    puntos: 4,
    golesFavor: 4,
    golesContra: 2,
    jugadores: [
      "Vinicius Jr",
      "Rodrygo",
      "Bruno Guimarães"
    ]
  },
  {
    pais: "España",
    grupo: "H",
    puntos: 7,
    golesFavor: 8,
    golesContra: 3,
    jugadores: [
      "Pedri",
      "Lamine Yamal",
      "Nico Williams"
    ]
  },
  {
    pais: "Francia",
    grupo: "I",
    puntos: 5,
    golesFavor: 6,
    golesContra: 4,
    jugadores: [
      "Mbappé",
      "Camavinga",
      "Tchouaméni"
    ]
  },
  {
    pais: "México",
    grupo: "A",
    puntos: 2,
    golesFavor: 2,
    golesContra: 5,
    jugadores: [
      "Santiago Giménez",
      "Edson Álvarez",
      "Luis Chávez"
    ]
  }
];

//1.Mostrar por consola todos los países participantes.
const nombresPaises = selecciones.map(seleccion => seleccion.pais);
console.log("Los paises participantes son: ", nombresPaises);

//2.Mostrar la cantidad total de selecciones.
const MostrarLasSelecciones = selecciones.length
console.log(`Todas las Selecciones ${selecciones.length}`)

//3.Mostrar el nombre del primer jugador de Argentina.
const jugadores = [
      "Julián Álvarez",
      "Enzo Fernández",
      "Alexis Mac Allister"
    ]
console.log("Primer jugador de la seleccion argentina: ", jugadores[0])

//4.Mostrar todos los jugadores de España.
const mostrarjugadoresEspaña = [
      "Pedri",
      "Lamine Yamal",
      "Nico Williams"
    ]
console.log("Los Jugadores de España: ", mostrarjugadoresEspaña.length)

//5.Agregar una nueva selección utilizando push().
/*{
   pais: "Portugal",
   grupo: "K",
   puntos: 3,
   golesFavor: 3,
   golesContra: 2,
   jugadores: [
      "Cristiano Ronaldo",
      "Bruno Fernandes",
      "Bernardo Silva"
   ]
}*/

const NuevaSeleccion = {pais: "Portugal",
   grupo: "K",
   puntos: 3,
   golesFavor: 3,
   golesContra: 2,
   jugadores: [
      "Cristiano Ronaldo",
      "Bruno Fernandes",
      "Bernardo Silva"
   ]}
   console.log(selecciones.push(NuevaSeleccion))

/* 6. Mostrar por consola todos los países participantes.Resultado esperado
Argentina
Brasil
España
Francia
México*/

const paises = ["Argentina", "Brasil", "España", "Francia", "Mexico", "Portugal"]


//7.Obtener únicamente las selecciones con 5 puntos o más.


//8. filter(): Obtener únicamente las selecciones con 5 puntos o más.

//9. filter():Mostrar las selecciones que tengan más goles a favor que en contra.

//10. find(): Buscar la selección de Brasil. Mostrar el objeto completo.

//11. some(): ¿Existe alguna selección con 7 puntos?
// Debe mostrar: true

//12. every(): ¿Todas las selecciones tienen al menos 2 jugadores?

//13. reduce(): Calcular el total de goles convertidos entre todas las selecciones.

//14. sort(): Ordenar las selecciones de mayor a menor cantidad de puntos.

//15. sort(): Ordenar alfabéticamente por país.
