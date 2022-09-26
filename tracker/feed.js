


const express = require("express");
const app = express();
const path = require("path");
const Habit = require("./models/habit")



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const item = new Habit({
    title: "running",
    number: "20",
    category: "Fitness"
})
item.save().then(item => {
    console.log(item)
})
.catch(e => {
    console.log(e)
})


app.listen(5500, () => {
    console.log("We are going on the port")
})