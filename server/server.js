const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const db = require("./config/db");//creates a new db instance with the db configuration

//required to read data from frontend
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//pulls all events from the database
app.get("/api/events", (req, res) => {
    const sqlSelect = "SELECT * FROM events"
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });
});

//inserts ne events created by the user from the frontend
app.post("/api/newEvent", (req, res) => {
    const name = req.body.name;
    const details = req.body.details;
    const date = req.body.date;
    const time = req.body.time;
    const location = req.body.location;
    const type = req.body.type;

    const sqlInsert = "INSERT INTO events (event_name, event_details, event_date, event_time, event_location, type) VALUES (?, ?, ?, ?, ?, ?);"
    db.query(sqlInsert, [name, details, date, time, location, type], (err, result) => {
        if(err){
            res.send({err: err});
        } else {
            
            res.send({message: "Successfully added Event"});
        }
    });
});

//pulls all the courses from the database
app.get("/api/courses", (req, res) => {
    const sqlSelect = "SELECT * FROM courses";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//pulls all the surveys from the database
app.get("/api/survey", (req, res) => {
    const sqlSelect = "SELECT * FROM survey"
    db.query(sqlSelect, (err, result) => {
        res.send(result); 
    });
});

//stores the survey infromation pass from the frontend guidance page
app.post("/api/surveyIn", (req, res) => {
    const formID= req.body.formID;
    const name= req.body.name;
    const year= req.body.year;
    const term= req.body.term;
    const major= req.body.major;
    const courses= req.body.courses;
    // const courses = "4990"

    const sqlInsert = "INSERT INTO survey (FormID, Name, Year, Term, Major, Courses) VALUES (?, ?, ?, ?, ?, ?);"
    db.query(sqlInsert, [formID, name, year, term, major, courses], (err, result) => {
        if(err){
            res.send({err: err});
        }
    });
});

//inserts the data of a user passed from the frontend registration page, into the database
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
            //checks if user credentials are already used 
            //there can be at most 2 users returned from the query, 1 with 
            //the username or email and another with the remaining
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
});

//checks if the user is already registered using the passed credentials from the frontend
app.post("/api/SignIn", (req, res) => {
    const usern = req.body.usern;
    const pwd = req.body.pwd;

    const sqlSelect = "SELECT * FROM student_users WHERE username = ? AND password = ?;"
    db.query(sqlSelect, [usern, pwd], (err, result) => {
        if (err) {
            res.send({err: err});
        }
        if (result.length > 0) {
            //creates a token and returns it to start the users session
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
    });
});

//starts the server on port 4000
app.listen(4000, () => { 
    console.log("Server started on port 4000")
});
