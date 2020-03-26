const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (Error) {
        listadoPorHacer = [];
    }
}
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer); //Convierto en formato JSON 
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar');
        }
    })
}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}
const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index => 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (nuevoListado.length===listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer=nuevoListado;
        guardarDB();
        return true;
    }
    
    return false;
}
module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrarTarea
}