const express = require('express');
const db = require('../Db')

const router = express.Router();

router.get('/', (req, res) => {
    db.connect(err => {
        if (err) throw err;
        else console.log('Database successfully connected');
    })
    res.send("<h1> Hello in Router </h1>");
});

module.exports = router;