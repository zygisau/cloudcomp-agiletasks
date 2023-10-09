var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var tasksRouter = require("./routes/tasks");

module.exports = () => {
  var app = express();

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "..", "client", "dist")));
  app.use(express.static(path.join(__dirname, "..", "client", "public")));

  app.use(/^(?!\/tasks($|\/)).*$/, indexRouter);
  app.use("/tasks", tasksRouter);

  return app;
};
