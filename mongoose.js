//require library
const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/todo_db');

//aquire the connection, to check if it is successfull
const db = mongoose.connection;

//if error
db.on("error", console.error.bind(console, 'error connecting to db'));

//if not then run
db.once('open', function () {
    console.log("successfully connected to database");
})