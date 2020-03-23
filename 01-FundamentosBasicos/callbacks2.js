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


let getEmpleado = (id, callback) => {
    let empleadoBDD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBDD) {
        callback('No exite el empleado');
    } else {
        callback(null, empleadoBDD);
    }
}

let getSalario = (empleado, callback) => {

    let salarioBDD = salarios.find(salario => salario.id === empleado.id);
    if (!salarioBDD) {
        callback('No exite el salario del empleado ' + empleado.nombre);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBDD.salario,
            id: empleado.id

        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    } else {

        getSalario(empleado, (errSalario, respuesta) => {
            if (errSalario) {
                return console.log(errSalario);
            } else {
                console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
            }
        })
    }
});