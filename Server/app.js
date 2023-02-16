const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'weebdb',
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/insert', (req,res) => {
    
    const title = req.body.title;
    const rating = req.body.rating;
    const type = req.body.type;
    const status = req.body.status;

    const sqlInsert = "INSERT INTO weebdb (id, title, type, averageScore, status, description) VALUES (?,?)"
    db.query(sqlInsert, [title, rating, type, status], (err, result) => {
        console.log(err);
    });
    res.send("hello world")
});

app.listen(3001, () => {
    console.log("Running on port 3001")
})