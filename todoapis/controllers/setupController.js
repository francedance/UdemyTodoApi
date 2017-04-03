var Todos = require('../models/todoModel'); //retrieving Schema model that I set up before. 

//never run this twice unless DB is empty.

module.exports = function(app) {
    //localhost:port//api/setupTodos will generate seed data.
    app.get('/api/setupTodos',function(req,res){
            //seed database , there's random json formatted data generator like JSON Generator.

            var starterTodos = [
                {
                    username: 'test',
                    todo: 'Buy milk',
                    isDone: false,
                    hasAttachment: false
                },
                {
                    username: 'test',
                    todo: 'feed dog',
                    isDone: false,
                    hasAttachment: false
                },
                {
                    username: 'test',
                    todo: 'Learn Node',
                    isDone: false,
                    hasAttachment: false
                }

            ];

            //just creating seed data inside MongoDB
            Todos.create(starterTodos, function(err,results){
                res.send(results);
            });

    });


}