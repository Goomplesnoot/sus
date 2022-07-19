const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser') 
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cruddatabase",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res)=> {
res.send(hello)
    })

app.post("/api/insert", (req, res) =>{
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const password = req.body.password

    const sqlInsert = "INSERT INTO new_table (fname, lname, email, password) VALUES (?,?,?,?)"
    db.query(sqlInsert, [fname, lname, email, password], (err, result)=>{
        console.log(err)
    })
});

app.listen(5500, () =>{
    console.log("running on port 5500");
});