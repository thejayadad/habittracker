// Create the schema for the model that will be in the mern app

const mongoose = require("mongoose")
const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        enum: ["Fitness", "Learning", "Nutrition"]
    }

})
const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit