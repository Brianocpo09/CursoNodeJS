//DIferencias en var y let
// ambas sirven para declarar variables  pero var permite crear una y otra ves una variable con el mismo nombre y el ultimo valor
//que tome se vera reflejado en el resultado
//Let --  permite ser creada una sola ves dentro de su instancia, si la misma variable se la crea dos veces nos arroja un error 
// pero si let la creamos dentro de una nueva instancia que seria dentro de un ciclo for esta variable solo podra ser usada 
//dentro del ciclo y no fuera

let nombre = 'brian';
var mensaje = 'hola brian';

for (let i = 0; i < 10; i++) {
    var mensaje = 'hola ' + i;
    let nombre = 'hola ' + i;
}
console.log(nombre)
console.log(mensaje)

//para Ejecutar el codigo desde el terminal utilizando la palabra node al inicio 
// node app   - donde app es el nombre del archivo js que se desaea ejecutar