//Permiten ejecutar trabajos sincrono o asincrono
//Promesas de script6
//es una funcion que tiene dos callback que tiene resolve y reject
let empleados = [{
        id: 1,
        nombre: 'Brian'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Pedro'
    }
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoBDD = empleados.find(empleado => empleado.id === id);
        if (!empleadoBDD) {
            reject(`No exite el empleado con ID: ${id}`);
        } else {
            resolve(empleadoBDD);
        }
    })

}

let getSalario = (empleado) => {
    return new Promise((resolve, rejec) => {
        let salarioBDD = salarios.find(salario => salario.id === empleado.id);
        if (!salarioBDD) {
            rejec('No exite el salario del empleado ' + empleado.nombre);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBDD.salario,
                id: empleado.id

            });
        }
    })

}

//Primer ejemplo de Promesa
//Pero la anidacion de promesas el codigo de los errores se van incrementando y se hace dificil de mantener el código
getEmpleado(2).then(empleado => {
    getSalario(empleado).then(respuesta => {
        console.log(`El empleado ${respuesta.nombre} tiene un salario de ${respuesta.salario}`);
    }, err => console.log(err))
}, err => console.log(err))

//ejemplo 2 manejar de mejor forma las promesas y sus expeciones
getEmpleado(3).then(empleado => getSalario(empleado))
    .then(respuesta => console.log(`El empleado ${respuesta.nombre} tiene un salario de ${respuesta.salario}`))
    .catch(err => console.log(err))