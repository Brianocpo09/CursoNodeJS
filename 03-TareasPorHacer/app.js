const colors = require("colors/safe");
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];
switch (comando) {
  case "crear":
    let tareas = porHacer.crear(argv.descripcion);
    console.log(tareas);
    break;
  case "actualizar":
    let estadoActua = porHacer.actualizarTarea(argv.descripcion, argv.completado);
    console.log((estadoActua = true ? "Tarea Actualizada" : "Error"));
    break;

  case "listar":
    let listado = porHacer.getListado();

    for (let tareas of listado) {
      console.log(colors.green("========Tareas Por Hacer========"));
      console.log(tareas.descripcion);
      console.log("Estado: " + tareas.completado);
      console.log(colors.green("==============================="));
    }
    break;
  case "borrar":
    let estadoBorrado = porHacer.borrarTarea(argv.descripcion);
    console.log((estadoBorrado = true ? "Tarea Borrada" : "Error"));
   
    break;
  default:
    "No se encontro el comando ";
}
