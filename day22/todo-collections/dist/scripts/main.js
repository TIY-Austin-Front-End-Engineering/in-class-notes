// Listening for the jQuery ready event
// This happens when the page is fully loaded
$(document).ready(function() {

    // Creating a new (empty) collection from our ItemCollection class
    // (instantiating our toDoList object)
    var toDoList = new ItemCollection(); 
    toDoList.fetch();

    // Creating a underscore template that will help us to convert 
    // our model attributes into HTML later.
    var todoItemBuilder = _.template($('#list-template').html());

    // Listening for the submit event on the todo form
    $('#todo-form').on('submit', function(e) {            
        e.preventDefault();                                 // Prefvent the page from refreshing
        console.log('item submitted');

        // Create a new Item model
        // (instantiating the newTodo object)
        var newTodo = new Item({                             //adding a new instance of the model (Item)
            item: $('#item-input').val(),
            priority: $('#priority-select').val()
        });

        if(newTodo.isValid()) {
            console.log('the todo item is valid');
            // Add our new todo item into the toDoList collection
            toDoList.add(newTodo);
            newTodo.save(); 
        }
        else {
            console.log('there was an error');
            console.log(newTodo.validationError);
        }
    
                                        //adding new model to the collection (ItemCollection)
        console.log(toDoList);
    });


    // Listening for the add event on that toDoList collection
    toDoList.on('add', function(model) {
        // Build up a HTML string from that newly added model
        // using our underscore template that we created on line 11
        var todoHtml = todoItemBuilder(model.attributes);     //pass in an object with properties we used 
        console.log(todoHtml);

        // Adding the HTML string that our template gives back to us.
        // The string is added into the #my-list element
        $('#my-list').append(todoHtml);
    });


});