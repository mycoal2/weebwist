const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'weeb_db',
  socketPath: '/var/run/mysqld/mysqld.sock',
});

app.use(cors());
app.use(express.json());

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get("/account", (req, res) => {
    const sqlSelect = "SELECT * FROM accounts";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/signup", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO accounts (username, password) VALUES (?,?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})