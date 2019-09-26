const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sigcoinserverdb',
    port: 3306,
    database: 'test'
})

module.exports = db;