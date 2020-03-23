let crearParametros = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    }
}

let actualizarParametros = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Estado de la tarea'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', crearParametros)
    .command('actualizar', 'Actualizar el estado de la tarea', actualizarParametros)
    .command('listar', 'Actualizar el estado de la tarea', {})
    .help()
    .argv;


module.exports = {
    argv
}