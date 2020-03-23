//Destructuracion
// objeto literal
let superhero = {
    nombre: 'brian',
    apellido: 'montenegro',
    poder: 'fuerza',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(superhero.getNombre());

//Obtener los datos forma tradicional
let nombre1 = superhero.nombre;
let apellido1 = superhero.apellido;
let poder1 = superhero.poder;

//Obtener datos mediante la destructuracion 
let { nombre, apellido, poder } = superhero;
//Con esto obtenemos todos los valores en una sola linea - para lo cual los nombres de la variable declarada
//tiene que coincidir con los nombres asignados dentro del objeto literal
console.log(nombre, apellido, poder);


//En caos de querer cambiar el nombre de la variable se debe hacer de la siguiente forma 
//Obtener datos mediante la destructuracion 
let { nombre: primerNombre, apellido: primerApellido, poder: poderHeroe } = superhero;
console.log(primerNombre, primerApellido, poderHeroe);