const {config} = require('../routes/config');
const mysql = require('mysql2');
const { promisify } = require('util');

const connect = mysql.createPool(
   config);
//Aqui se crea la respectiva conexion a la base de datos
connect.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('CONEXION PERDIDA CON BASE DE DATOS');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DEMASIADAS CONSULTAS A LA BASE DE DATOS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA BASE DE DATOS RECHAZO CONEXION');
        }
        if (err.code === 'ER_NOT_SUPPORTED_AUTH_MODE') {
            console.error('FALLA EN EL PAQUETE DE GESTION');
        } else {
            console.log(err);
        }
    }
    if (connection) connection.release();
    console.log('CONEXION ALCANZADA');
    return;

});

connect.query = promisify(connect.query);

module.exports = connect;