const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const db = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/api/events", (req, res) => {
    const sqlSelect = "SELECT * FROM events"
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });
})

app.get("/api/courses", (req, res) => {
    const sqlSelect = "SELECT * FROM courses";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
})

app.get("/api/survey", (req, res) => {
    const sqlSelect = "SELECT * FROM survey"
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });
})

app.post("/api/register", (req, res) => {
    const email = req.body.email;
    const usern = req.body.usern;
    const pwd = req.body.pwd;

    const sqlInsert = "SELECT * FROM student_users WHERE email = ? || username = ?;"
    db.query(sqlInsert, [email, usern], (err, result) => {
        if(err){
            res.send({err: err});
        }

        if(result.length > 0) {
            if(result.length === 1){
                if(result[0].email === email &&  result[0].username === usern){
                    res.send({message: "Email and Username already in use!"});
                } else if(result[0].email === email &&  result[0].username !== usern){
                    res.send({message: "Email already in use!"});
                } else if(result[0].email !== email &&  result[0].username === usern){
                    res.send({message: "Username already in use!"});
                }
            } else if(result.length === 2){
                if(result[0].email === email &&  result[1].username === usern || result[1].email === email &&  result[0].username === usern){
                    res.send({message: "Email and Username already in use!"});
                } else if(result[0].email === email &&  result[0].username === usern ){
                    res.send({message: "Email and Username already in use!"});
                } else if(result[0].email === email &&  result[0].username !== usern){
                    res.send({message: "Email already in use!"});
                } else if(result[0].email !== email &&  result[0].username === usern){
                    res.send({message: "Username already in use!"});
                }else if(result[1].email === email &&  result[1].username === usern){
                    res.send({message: "Email and Username already in use!"});
                } else if(result[1].email === email &&  result[1].username !== usern){
                    res.send({message: "Email already in use!"});
                } else if(result[1].email !== email &&  result[1].username === usern){
                    res.send({message: "Username already in use!"});
                }
            }
        } else {
            const sqlInsert = "INSERT INTO student_users (email, username, password) VALUES (?, ?, ?);"
            db.query(sqlInsert, [email, usern, pwd], (err, result) => {
                if(err){
                    res.send({err: err});
                }
        
                res.send({message1: "User registered successfully!"});
            });
        }
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
            const token = jwt.sign({ User: result[0][0] }, 'testdb', { expiresIn: '10s' })
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
