
// Full Stack Mern project
//Node express backend
//Mongodb database
//npm init
// npm install express mongoose nodemon

const express = require("express");
const app = express();
const path = require("path")
//Bring in the model
const Habit = require("./models/habit")

// The middleware of choice is ejs
// npm install ejs




// create a .env file add add ATLAS_URI as the variable with the

//connection string from mongodb

//npm install dotenv

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection establised")
})



//Time to make the model that will be loaded
const item = new Habit({
    title: "running",
    number: "20",
    category: "Fitness"
})
item.save().then(item => {
})
.catch(e => {
    console.log(e)
})

//lets setup the first get route to make sure we can speak

// from the backend to the front

app.get("/habit", async(req, res) => {
    const habits = await Habit.find({})
    res.render("home.ejs", {habits})
})


app.listen(5500, () => {
    console.log("We are up and going!")
})