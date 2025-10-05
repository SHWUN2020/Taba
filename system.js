
// const fs = require("fs");
// const http = require("http");
// const os = require("os");
// const mysql = require("mysql");
// const phpmyadmin = require("phpmyadmin");

// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error("Error reading file : " + err);
//         return;
//     }
//     console.log("File content : " + data);

// });
// console.log("Reading file ... (this runs first!)");

// let conn2 = phpmyadmin.createConnection({
//     host: "localhost",
//     username: "root",
//     password: ""
// })

// let con = mysql.createConnection({
//     host: "localhost",
//     username: "",
//     password: ""
// })

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// })

// server.js
// نصب: npm i express mysql2 dotenv
import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,     // e.g. "localhost"
    user: process.env.DB_USER,     // e.g. "root"
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// نمونه endpoint امن که از prepared statement استفاده می‌کند
app.get("/api/users/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "invalid id" });
    console.log(error);
    try {
        const [rows] = await pool.execute("SELECT id, username, email FROM users WHERE id = ?", [id]);
        if (rows.length === 0) return res.status(404).json({ error: "not found" });
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "server error" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on :${port}`));


