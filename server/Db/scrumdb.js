const mysql = require('mysql');

var spool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sigcoinserverdb',
    port: 3306,
    database: 'scrumboard'
});

module.exports = spool;