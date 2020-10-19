const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// URL to the root of MongoDB Server and not a particular db
const url = "mongodb://localhost:27017";

// Database Names
const dbName1 = "myproject1";
const dbName2 = "myproject2";

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db1 = client.db(dbName1);
  const db2 = client.db(dbName2);

  client.close();
});
