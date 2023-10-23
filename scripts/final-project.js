// Initialize an empty array to store tasks
const tasks = [];

// Fetch data from a JSON file and populate the 'tasks' array
fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
        // Push the fetched data into the 'tasks' array
        tasks.push(...data);

        // Initialize the task list with the fetched tasks
        displayTasks();
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display tasks
function displayTasks() {
    // Get the task list element from the DOM
    const taskList = document.getElementById("taskList");
    
    // Clear the existing content of the task list
    taskList.innerHTML = '';

    // Iterate through each task and create a list item for it
    tasks.forEach((task, index) => {
        // Create a new list item element
        const listItem = document.createElement("li");

        // Determine the CSS class for the task status
        const taskStatus = task.done ? 'done' : '';

        // Set the inner HTML of the list item
        listItem.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.done ? 'checked' : ''}>
            <span class="${taskStatus}">${task.text}</span>
            <button data-index="${index}">Delete</button>
        `;

        // Add the list item to the task list
        taskList.appendChild(listItem);
    });
}

// Add a new task when the "Add Task" button is clicked
document.getElementById("addTask").addEventListener("click", () => {
    // Get the task input element from the DOM
    const taskInput = document.getElementById("task");

    // Trim and store the task text
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Push a new task object to the 'tasks' array
        tasks.push({ text: taskText, done: false });

        // Clear the input field
        taskInput.value = '';

        // Update the displayed tasks
        displayTasks();
    }
});

// Delete a task when the "Delete" button is clicked
document.getElementById("taskList").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        // Get the index of the task to be deleted from the button's data attribute
        const index = e.target.dataset.index;

        // Remove the task from the 'tasks' array
        tasks.splice(index, 1);

        // Update the displayed tasks
        displayTasks();
    }
});

// Mark a task as done when the checkbox state changes
document.getElementById("taskList").addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT") {
        // Get the index of the task to be marked as done from the checkbox's data attribute
        const index = e.target.dataset.index;

        // Update the 'done' status of the task in the 'tasks' array
        tasks[index].done = e.target.checked;

        // Update the displayed tasks
        displayTasks();
    }
});
