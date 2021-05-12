const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");
const cTable = require("console.table");
const fs = require("fs");
/////

let allAppointments;

const db = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "HOTdog123456",
  database: "cal_appts_db",
});

db.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
/////
// Express middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

const port = process.env.PORT || 3000;
////
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
////
app.post("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/calendar.html"));
  const sql = "INSERT INTO users (username, password) VALUES (?,?)";

  let username = req.body.username;
  let password = req.body.password;

  const params = [username, password];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
  });
});
////

app.post("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/pages/calendar.html"));
  const sql = "INSERT INTO users (username, password) VALUES (?,?)";

  let username = req.body.username;
  let password = req.body.password;

  const params = [username, password];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
  });
});

////
app.post("/calendar", (req, res) => {
  const sql =
    "INSERT INTO appointments (appointment, date, holiday) VALUES (?,?,?)";

  let appointment = req.body.appointment;
  let date = req.body.date;

  console.log(appointment);
  console.log(date);

  const params = [appointment, date, 0];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
  });

  const sql2 = "SELECT * FROM appointments;";

  db.query(sql2, (err, result) => {
    console.table(result);
    allAppointments = result;

    fs.writeFile(
      "./public/js/appts.json",
      JSON.stringify(allAppointments),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    if (err) {
      res.status(400).json({ error: err.message });
    }
  });
  res.sendFile(path.join(__dirname, "/public/pages/calendar.html"));
});

app.get("/appts.json", (req, res) => {
  res.send({ data: allAppointments });
});

////////////////////////////////
app.use((req, res) => {
  res.status(404).end();
});

app.listen(port, function () {
  console.log("Listening on port ", port);
});
module.exports = "allAppointments";
