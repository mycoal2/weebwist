const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "weebdb",
});
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', (req,res) => {
    
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO Accounts (username, password) VALUES (?,?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
    res.send("hello world")
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})