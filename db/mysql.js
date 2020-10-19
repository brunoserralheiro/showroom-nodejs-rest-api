const { NetworkAuthenticationRequire } = require("http-errors");
var mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

const createDB = (dbName) => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE " + dbName, function (err, result) {
      if (err) throw err;
      console.log("Database %s created", dbName);
    });
    con.query("USE  `" + dbName + "`", function (err, result) {
      if (err) throw err;
    });
    con.query(
      "CREATE TABLE contacts(`id` int(11) NOT NULL AUTO_INCREMENT, " +
        " `username` varchar(256) DEFAULT NULL," +
        // "`created_date` datetime DEFAULT NULL," +
        // "`last_modified_date` datetime DEFAULT NULL, "+
        " PRIMARY KEY (`id`))ENGINE=InnoDB; ",
      function (err, result) {
        if (err) throw err;
        console.log("Database %s created", dbName);
      }
    );
    // const creationDate = new Date()
    //   .toISOString()
    //   .slice(0, 22)
    //   .replace("T", " ");
    con.query(
      "INSERT INTO contacts (username)" + "VALUES(' " + dbName + "');",

      function (err, result) {
        if (err) throw err;
        console.log("Database %s created", dbName);
      }
    );
    con.end();
  });
};

exports.createDB = createDB;
