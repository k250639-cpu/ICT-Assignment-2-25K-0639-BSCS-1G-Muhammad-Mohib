const prompt = require("prompt-sync")();
let tasks = [];
function addTask() {
    let task = prompt("Enter a new task: ");
    tasks.push(task);
    console.log("Task added!");
}
function removeTask() {
    let index = parseInt(prompt("Enter task index to remove: "));
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid index!");
        return;
    }
    tasks.splice(index, 1);
    console.log("Task removed!");
}
function displayTasks() {
    console.log("\nYour Tasks:");
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    tasks.forEach((task, i) => {
        console.log(`${i}: ${task}`);
    });
    console.log("");
}
function clearTasks() {
    tasks = [];
    console.log("All tasks cleared!");
}
while (true) {
    console.log("\nCommands: add | remove | view | clear | exit");
    let cmd = prompt("Enter command: ").toLowerCase();
    if (cmd === "add") addTask();
    else if (cmd === "remove") removeTask();
    else if (cmd === "view") displayTasks();
    else if (cmd === "clear") clearTasks();
    else if (cmd === "exit") break;
    else console.log("Invalid command!");
}
console.log("Program exited.");
