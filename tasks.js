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

    break; // break can be commented out when userInput = CLOSE is set up
}

alert(`Thank you for using the Task Manager`); // Alerts the user that they have closed the program
