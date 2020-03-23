//Ejemplo 2 con Salarios y aplicando el Async Await
// Con sel async podemos convertir nuestras funciones en promesas automaticamente 
// y con el await nuestras funcion la podemos hacer sincrona
// y retorne el resultado nuestra función al terminar de ejecutar todas las funciones internas
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

let getEmpleado = async(id) => {
    let empleadoBDD = empleados.find(empleado => empleado.id === id);
    if (!empleadoBDD) {
        throw  Error(`No exite el empleado con ID: ${id}`);
    } else {
        return empleadoBDD;
    }
}

let getSalario = async(empleado) => {

    let salarioBDD = salarios.find(salario => salario.id === empleado.id);
    if (!salarioBDD) {
        throw  Error(`No exite el salario del empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBDD.salario,
            id: empleado.id

        };
    }

}

let getInfomacion= async(id)=>{

    try{
        let empleado= await getEmpleado(id);
        let respuesta = await getSalario(empleado);
        return `${respuesta.nombre}  Tiene un salario de  ${respuesta.salario}`;
    }catch(Error){
         return 'Alerta '+Error;
    }
    
}

getInfomacion(1)
.then(mensaje=>console.log(mensaje))
.catch(erro=>console.log(erro))