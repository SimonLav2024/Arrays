// bucles

// for (indice de Inicio, condicion, incremento){
//     codigo a ejecutar
// }

// for (let i = 10; i <= 20; i+=1) {
//     console.log(i);   
// }

// let frutas = ["manzanas", "pera", "fresa", "sandia", "cereza"];

// frutas.forEach(fruta => {
//     console.log(fruta);
// });

// frutas.forEach((fruta, indice, array) => {
//     console.log(`${indice}: ${fruta}`);
// }); //con este modo se ve todos los elementos del array con su posicion o indice, van numerados y asi sabes cual es el orden que tiene

// //random es un metodo que te saca un valor numerico aleatorio

 
//  console.log(aleatorio);

//  console.log(`el numero ganador es: ${numeros[aleatorio]}`)

//  //frases aleatorias

 
 
 function fraseAl() {
    let frases = [
        "El único modo de hacer un gran trabajo es amar lo que haces",
        "Nunca pienso en las consecuencias de fallar un gran tiro... cuando se piensa en las consecuencias se está pensando en un resultado negativo",
        "El dinero no es la clave del éxito; la libertad para poder crear lo es",
        "Cuanto más duramente trabajo, más suerte tengo",
        "La inteligencia consiste no solo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica",
        "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu",
        "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro",
        "Cuéntamelo y me olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé",
        "La inteligancia de persigue, pero tu eres más rapido",
        "No busques los errores, busca un remedio"
    ];
 let aleatorio = Math.random()*frases.length;
 aleatorio = Math.floor(aleatorio); //esto es para quitar los decimales de los numeros aleatorios que salen (lo redondea)

 document.getElementById("texto").textContent = frases[aleatorio];
 }
