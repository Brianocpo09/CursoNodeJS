const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimer en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crear tabla de multiplicar', opciones)
    .help()
    .argv; //Permite obtener los datos de la linea de comandos

module.exports = {
    argv
}