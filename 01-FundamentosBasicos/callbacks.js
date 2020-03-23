// Ejemplo 1

setTimeout(() => {
    console.log('hola Brian');
}, 3000)

//Ejemplo 2
//declaracion de mi funcion
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'brian',
        id
    }

    //manejo de errores dentro de un callback - siempre declarar el callback con dos parametros
    if (id === 20) {
        callback(`El usuario de BDD ${id} no existe`);
    } else {
        callback(null, usuario);
    }

}

//ejecucion de mi funcion 
getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
})

//Ventasjas de trabajar con Callbacks