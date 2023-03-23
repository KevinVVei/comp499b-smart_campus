const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'vertigo-531',
    database: 'cm_4990',
    dateStrings: 'date'
});

module.exports = db;
