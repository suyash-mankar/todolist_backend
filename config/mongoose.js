const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todolist");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to MongoDB"));

db.once("open", function () {
  console.log("connected to database::MongoDB");
});

module.exports = db;
