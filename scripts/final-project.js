

// Fetch the current time and display it in the footer when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchCurrentTime();
});


// Exported tasks array and functions

// Define an array to store tasks
export const tasks = [];

// Function to display tasks in the HTML
export function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    // Iterate through tasks and create list items
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        const taskStatus = task.done ? 'done' : '';

        // Create the HTML structure for each task
        listItem.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.done ? 'checked' : ''}>
            <span class="${taskStatus}">${task.text}</span>
            <button data-index="${index}">Delete</button>
        `;

        // Add the list item to the task list
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
export function addTask(taskText) {
    const trimmedText = taskText.trim();
    if (trimmedText) {
        // Push a new task object to the 'tasks' array
        tasks.push({ text: trimmedText, done: false });
    }
}

// Function to delete a task by index
export function deleteTask(index) {
    tasks.splice(index, 1);
}

// Function to update the status of a task by index
export function updateTaskStatus(index, status) {
    tasks[index].done = status;
}
