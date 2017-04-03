var Todos = require('../models/todoModel'); //retrieving Schema model that I set up before. 
var bodyParser = require('body-parser'); //using bodyParser 

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //get todos for individual users
    app.get('/api/todos/:uname', function(req,res) {

        Todos.find({username: req.params.uname}, 
        function(err,todos) {
            if(err) throw err;

                res.send(todos);
        });

    });

    //get todos for individual id
    app.get('/api/todo/:id', function(req,res){

        Todos.findById({_id: req.params.id }, function(err,todo){
            if(err) throw err;

            res.send(todo); //return todos
        });
    });

    //adding todos
    app.post('/api/todo', function(req,res){

        //if it has Id in body then update todos
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachement 
            }, function(err, todo){
                if(err) throw err;

                res.send('Success');
            });
        }

        //adding new todos
        else {

            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            //saving data
            newTodo.save(function(err){
                if (err) throw err;

                res.send('Success');
            });

        }

    });

    //delete todos
    app.delete('/api/todo', function(req,res){

        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        })
    });

}