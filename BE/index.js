const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'databasebh'
});

app.get("/", (req, res) => {
    console.log("Hello World")
});

app.listen(3001, () => {
    console.log("Running on port 3001");
});