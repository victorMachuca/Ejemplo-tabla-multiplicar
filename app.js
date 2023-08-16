const {crearTabla} = require('./helper/multiplicar');
const argv = require('./config/yargs');  
require('colors');

console.clear();

// const[, , arg3 = 'base=5'] =process.argv;
// const[, base = 5 ] = arg3.split('=');
// console.log(process.argv)

crearTabla(argv.b,argv.l,argv.h) 
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));

