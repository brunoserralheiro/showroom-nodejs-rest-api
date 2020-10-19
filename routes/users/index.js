var express = require("express");
const mySQLcon = require("../../db/mysql");

// var routes = require("../index");

const usersRouter = require("express").Router();

/* GET users listing. */
usersRouter.get("/", function (req, res, next) {
  res.send("200 OK");
});
usersRouter.get("/:id", function (req, res, next) {
  const id = req.params.id;

  res.send("200 OK");
});
usersRouter.post("/:id", function (req, res, next) {
  const id = req.params.id;

  //TODO save user in user db module

  //POC create user's own db and save his username in contacts
  mySQLcon.createDB(id.split("@")[0]);
  res.send("200 OK");
});

module.exports = usersRouter;
