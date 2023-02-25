var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");
const { response } = require("express");
var mysql = require("mysql");

mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project",
});

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "project",
  });

  con.query("SELECT * FROM products", (err, result) => {
    res.render("pages/index", { result: result });
  });
});
