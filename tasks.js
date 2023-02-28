// TASK MANAGER


// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

let showTasks = ``; // For displaying tasks to the user

let newTask; // For storing the value of a new task

let num; // For storing the number of the task to be removed

let removed; // For storing the value of the removed task


// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
// ???
let userInput = prompt(menu);

// Loops and continues to the menu until the user ends/closes the Task Manager 
//  (AKA Until the user enters CLOSE (???))
while (userInput.toUpperCase() !== "CLOSE"){

    // display tasks to user
    if (userInput.toUpperCase() === "TASKS"){
        showTasks = "";
        for (t = 0; t < tasks.length; t++){
            showTasks += (tasks[t] + "\n");
        }
        alert(showTasks);
    }
    // add a task
    else if (userInput.toUpperCase() === "NEW"){
        newTask = "";
        while (newTask === ""){ // error handling: while nothing is entered as the new task
            newTask = prompt("Enter the new task:");
        }
        tasks.push(newTask);
        alert("\"" + newTask + "\" has been added.");
    }
    // remove a task
    else if (userInput.toUpperCase() === "REMOVE"){
        showTasks = "";
        for (r = 0; r < tasks.length; r++){
            showTasks += ((r + 1) + ": " + tasks[r] + "\n");
        }

        num = parseInt( prompt("Enter the number for a task to remove:\n" + showTasks) );
        while ( !( (num >= 1) && (num <= tasks.length) ) ){ // error handling: while the number inputted is NOT from 1 to the length of the array
            alert("Not a valid option.");
            num = prompt("Enter the number for a task to remove:\n" + showTasks);
        }
        num--;

        removed = tasks.splice(num, 1);
        alert("\"" + removed[0] + "\" has been removed.");
    }
    // user enters something that isn't an option
    else {
        alert("Not a valid option.");
    }

    userInput = prompt(menu); // Displays the menu again

    // break;   break can be commented out when userInput = CLOSE is set up
}


alert(`Thank you for using the Task Manager`); // Alerts the user that they have closed the program
