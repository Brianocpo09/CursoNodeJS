let nombre = 'Brian';
let real = 'Eduardo';


//Concatenacion antigua
let nombre_completo = nombre + ' ' + real;
console.log(nombre_completo);

//Template literales 
let nombre_completo2 = `${nombre} ${real}`;
console.log(nombre_completo2);


//Ejemplo 2

function getNombreCompleto() {
    return `${nombre} ${real}`;
}
console.log(`Yo me llamo : ${getNombreCompleto()}`);