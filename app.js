//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);

        break;
    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);

        }

        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado == true) {
            console.log(`Tarea actualizada correctamente`.green);
        } else {
            console.log(`Tarea no encontrada`.red);
        }

        break;
    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado == true) {
            console.log(`Tarea borrada correctamente`.green);
        } else {
            console.log(`Tarea no encontrada`.red);
        }

        break;
    default:
        console.log('Comando no es reconocido');

}