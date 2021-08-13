const express = require('express');
const path = require('path');
const port = 9200;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var List = [
    {
        description: "create a todo web application",
        category: "work",
        dueDate: "2021-06-17"
    }
]

app.get('/', function (req, res) {
    Todo.find({}, function (err, tasks) {
        if (err) {
            console.log('error in fetching tasks');
            return;
        }
        return res.render('home', {
            title: "To do List",
            toDo: tasks
        });
    })

    // return res.render('home', {
    //     title: "To do List",
    //     toDo: List
    // });
})

app.get('/practice', function (req, res) {
    return res.render('practice', {
        title: "Checking"
    })
})

app.post('/create-todo', function (req, res) {
    // return res.redirect('/practice');
    // console.log(req.body);
    // List.push({
    //     description: req.body.description,
    //     category: req.body.category,
    //     dueDate: req.body.dueDate
    // })
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, newTodo) {
        if (err) {
            console.log('err in creating a task');
            return;
        }
        return res.redirect('back');
    })
})

app.get('/delete-todo', function (req, res) {
    //get id
    let id = req.query.id;

    Todo.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    })

})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server is running up and on port: ", port);
})