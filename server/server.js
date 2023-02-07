const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '499',
    dateStrings: 'date'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/events", (req, res) => {
    const sqlSelect = "SELECT * FROM events"
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });
})

app.get("/api/courses", (req, res) => {
    const sqlSelect = "SELECT * FROM courses"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.get("/api/student_users", (req, res) => {
    const sqlSelect = "SELECT * FROM student_users"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.post("/api/insertuser", (req, res) => {
    const email = req.body.email;
    const usern = req.body.usern;
    const pwd = req.body.pwd;

    const sqlInsert = "INSERT INTO student_users (email, username, password) VALUES (?, ?, ?);"
    db.query(sqlInsert, [email, usern, pwd], (err, result) => {
       console.log(err); 
    });
})

app.post("/api/SignIn", (req, res) => {
    const usern = req.body.usern;
    const pwd = req.body.pwd;

    const sqlSelect = "SELECT * FROM student_users WHERE username = ? AND password = ?;"
    db.query(sqlSelect, [usern, pwd], (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result.length > 0) {
            const token = jwt.sign({ User: result[0][0] }, '499', { expiresIn: '10s' })
            const UserInfo = {
                token: token,
                user: result[0][0],
            }
            res.json(UserInfo);
            // res.send(result);
        } else {
            res.send({message: "Wrong username/password combination!"});
        }
        console.log(result);
    });
})

app.listen(4000, () => { 
    console.log("Server started on port 4000")
});
