//Permite usa el uso de librerias propias  NodeJS que se encuentra en us documentación en su página principal
const fs = require('fs'); //fs File System  permite el manejo de archivos en nustro sistema operativo
const colors = require('colors/safe'); //fs File System  permite el manejo de archivos en nustro sistema operativo
//Ejempli 1 
//Tabla de multiplicar
let nombreArchivo = '';
let crearTabla = async(tabla, limite) => {
    if (!Number(tabla)) {
        return `El dato ingresado ${tabla} no es un número`;
    } else {
        let tablaMultiplicar = '';
        for (let i = 1; i <= limite; i++) {
            tablaMultiplicar += `${tabla} x ${i}= ${tabla * i} \n`;
        }

        try {
            fs.writeFile(`tablas/tabla-${tabla}-al-${limite}.txt`, tablaMultiplicar, (err) => {

            })
            nombreArchivo = colors.green(`tabla - ${ tabla } - al - ${ limite }.txt`);
            return `Archivo Creado: ${nombreArchivo}`;
        } catch (Error) {
            throw Error(Error);
        }
    }
}

let listarTabla = async(tabla, limite) => {
    let titulo = colors.green(`===== TABLA DEL ${tabla} ===== `);
    console.log(titulo);


    if (!Number(tabla)) {
        return `El dato ingresado ${tabla} no es un número`;
    } else {
        let tablaMultiplicar = '';
        for (let i = 1; i <= limite; i++) {
            tablaMultiplicar += `${tabla} x ${i}= ${tabla * i} \n`;
        }

        return tablaMultiplicar;

    }
}
module.exports = {
    crearTabla,
    listarTabla
}