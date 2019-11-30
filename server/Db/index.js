const mysql = require('mysql');



var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sigcoinserverdb',
    port: 3306,
    database: 'kanboard'
});




module.exports = pool;
