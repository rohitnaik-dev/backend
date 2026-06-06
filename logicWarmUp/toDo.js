const tasks = [];
function addTask( task) {
    if (task.trim() === "") {
        console.log("Task cannot be empty");
        return;
    }    
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log(`Entered index is invalid`);
        return;
    }

    let removed = tasks.splice(index, 1);
    console.log(`Task deleted: "${removed[0]}"`);
    
}

function showTask() {
    if (tasks.length === 0) {
        console.log(`No tasks to show`);
        return;
    }

    console.log("\n Your To-Do List:");
    tasks.forEach((task, index) => {
        console.log(`${index}: ${task}`);
        
    });
    
}
addTask("write");
addTask("read");
showTask();
deleteTask(1);

showTask();