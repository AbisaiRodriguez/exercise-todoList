
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    var input = "";
    var array = [];

    input = prompt("What would you like to do");

    while( input !== "quit")
    {
    
        if (input === "new")
        {
            var newTodo = prompt("Enter a new todo: ");
            array.push(newTodo);
        }
    
        else if (input === "list")
        {
            console.log(array);
        }
        input = prompt("What would you like to do");

    }
    console.log("Ok, you quit the app")
  }, 500);