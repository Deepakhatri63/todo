const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://deepakkhatri16d:86b17ZyCjHgpwvMR@cluster0.gefq3qe.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}