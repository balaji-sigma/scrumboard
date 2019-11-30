const express = require('express');
const db = require('../Db/scrumdb')
const mysql = require('mysql')

const router = express.Router();

let i = 0;

router.get('/', (req, res) => {
    res.send("<h1> Hello in Router </h1>");
    creprosql = `CREATE TABLE IF NOT EXISTS \`projects\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title\` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,  
  \`description\` mediumtext COLLATE utf8mb4_unicode_ci,
 \`created_date\` bigint(20) DEFAULT NULL,
  \`start_date\` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT '',
  \`end_date\` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT '',
  \`owner_id\` int(11) DEFAULT '0',
  \`is_active\` tinyint(4) DEFAULT '1',  
  \`is_public\` tinyint(1) DEFAULT '1',
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci` ;

    rcreprosql = db.query(creprosql, function (err, res) {
        if (err) {
            console.log(rcreprosql.sql);
            throw err;
        }
    });


    creusrsql = `CREATE TABLE IF NOT EXISTS \`users\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`first_name\` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`last_name\` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`username\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`password\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,  
  \`email\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,  
  \`role\` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'app-user',
  \`is_active\` tinyint(1) DEFAULT '1',
  \`avatar_path\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,  
  PRIMARY KEY (\`id\`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci` ;

    rcreusrsql = db.query(creusrsql, function (err, res) {
        if (err) {
            console.log(rcreusrsql.sql);
            throw err;
        }
    });



    creusrsql = `CREATE TABLE IF NOT EXISTS \`projuser\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`proj_id\` int(11) NOT NULL,
  \`user_id\` int(11) NOT NULL,  
  PRIMARY KEY (\`id\`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci` ;

    rcreusrsql = db.query(creusrsql, function (err, res) {
        if (err) {
            console.log(rcreusrsql.sql);
            throw err;
        }
    });


    cdsmsql = `CREATE TABLE IF NOT EXISTS \`dsmeet\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`in1\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`in2\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`in3\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`in4\` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  \`desc\`  mediumtext COLLATE utf8mb4_unicode_ci,
  \`agenda\`  mediumtext COLLATE utf8mb4_unicode_ci,
  \`created_by\` int(11) NOT NULL, 
  \`status\` int(11) NOT NULL,  
  \`meetdate\` int(11) NOT NULL,  
  PRIMARY KEY (\`id\`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci` ;

    rcdsmsql = db.query(cdsmsql, function (err, res) {
        if (err) {
            console.log(rcdsmsql.sql);
            throw err;
        }
    });


});

module.exports = router;