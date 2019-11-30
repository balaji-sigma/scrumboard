const express = require('express');
const db = require('../Db/scrumdb')
const mysql = require('mysql')

const router = express.Router();

router.post('/addnewproj', (req, res) => {
    res.send("<h1> Hello in Board </h1>");
    console.log(req.body);

    anpsql = 'INSERT INTO projects SET ?';

    ranpsql = db.query(anpsql, [req.body], function (err, res) {
        if (err) {
            console.log(ranpsql.sql);
            throw err;
        }
    })

});

router.post('/addnewuser', (req, res) => {
    res.send("<h1> Hello in Board </h1>");
    console.log(req.body);

    anusql = 'INSERT INTO users SET ?';

    ranusql = db.query(anusql, [req.body], function (err, res) {
        if (err) {
            console.log(ranusql.sql);
            throw err;
        }
    });

});

router.get('/getprojects', (req, res) => {
    var gprojsql = 'SELECT * FROM projects';
    let result;
    rgprojsql = db.query(gprojsql, (err, result) => {
        if (err) {
            console.log(rgprojsql.sql);
            throw err;
        }
        res.send(result);
        console.log(result);
    })

});

router.post('/addnewdsumeet', (req, res) => {
    console.log(req.body);
    indssql = 'INSERT INTO dsmeet SET ?';

    rindssql = db.query(indssql, [req.body], function (err, res) {
        if (err) {
            console.log(rindssql.sql);
            throw err;
        }
    });
})

router.get('/getdsmeets', (req, res) => {
    var gprojsql = 'SELECT * FROM dsmeet';
    let result;
    rgprojsql = db.query(gprojsql, (err, result) => {
        if (err) {
            console.log(rgprojsql.sql);
            throw err;
        }
        res.send(result);
        console.log(result);
    })

});

router.post('/updatedsmeet', (req, res) => {
    console.log(req.body);
    udsmsql = 'UPDATE dsmeet SET `desc` = ? , `status` = ? WHERE `id` = ?';
    rudsmsql = db.query(udsmsql, [req.body.desc, req.body.status, req.body.id], err => {
        if (err) {
            console.log(rudsmsql.sql);
            throw err;
        }
    });
});


module.exports = router;