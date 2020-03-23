/*Vamos a crear un nuevo proyecto npm con  package.json */
/* npm init    Comando para iniciar un proyecto npm*/
/* npm install    Comando para descargar los paquenes necesarios o dependencias de mi proyecto*/
/* npm install yargs --save   comando para manejo de argumentos enviados desde la linea de comando*/
/* npm install colors --save   comando para manejo de colores en los textos de la linea de comando*/
/* npm install --save--dev nodemon  comando para instalar la dependencia solo en la instancia de mi proyecto*/
/* npm uninstall nodemon  comando para des instalar la dependencia*/

const { argv } = require('./config/yargs');
const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');



let comamndo = argv._[0];
switch (comamndo) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}