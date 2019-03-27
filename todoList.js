
window.setTimeout(function() {

    var array = [];

    var input = prompt("What would you like to do");


    while( input !== "quit"){
        //handles input
        if (input === "new"){
            addTodo();
        }
        else if (input === "list"){
            listToDos();
        }
        else if ( input === "delete"){
           deleteToDo();
        }
        //ask again for new input
        input = prompt("What would you like to do");
    }
    console.log("Ok, you quit the app")

    //lists all todos
    function listToDos() {
        console.log("***********");
        array.forEach(function(el, i){
        console.log(i +": " + el);
        });
        console.log("***********");
    }
    //adds a new todo
    function addTodo() {
        var newTodo = prompt("Enter a new todo: "); 
        //added todo to the array
        array.push(newTodo);
        console.log(newTodo + " was added to the list")
    }
    //deletes a todo
    function deleteToDo(){
        var indexToDelete = prompt("Enter index of todo to delete");
        //removed todo from the array
        var removed = array.splice(indexToDelete, 1);
        console.log(removed + " was Removed");
    }

  }, 500);