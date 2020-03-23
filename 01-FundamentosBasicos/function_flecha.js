// funciones tradicionales 

function suma(a, b) {
    return a + b;
}
console.log(suma(5, 4));

//Remplazo si la funcion retorna una sola linea se puede hacer de la siguiente forma
//ejemplo1: funcion con argumentos
let sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(10, 4));
//ejemplo 2: funcion sin argumentos
let saludar = () => 'hola Brian';
console.log(saludar());
//ejemplo 3: funcion con un solo argumento 
let saludarUnArgumento = nombre => `hola ${nombre}`;
console.log(saludarUnArgumento('Carlos'));