// Import the functions and tasks array from  ES module
import { tasks, displayTasks, addTask, deleteTask, updateTaskStatus } from './final-project.js';

// Function to fetch the current time and display it in the footer
function fetchCurrentTime() {
    const currentTimeSpan = document.getElementById("currentTime");

    // Fetch the current time from an external source (e.g., Google Time API)
    // You can use the previous code I provided to fetch the time

    // For demonstration purposes, we'll use a placeholder time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();
    currentTimeSpan.textContent = formattedTime;
}

// Fetch the current time and display it in the footer when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchCurrentTime();
});

document.addEventListener('DOMContentLoaded', () => {
    // Add a task when the "Add Task" button is clicked
    document.getElementById("addTask").addEventListener("click", () => {
        const taskInput = document.getElementById("task");
        addTask(taskInput.value);
        taskInput.value = ''; // Clear the task input field
        displayTasks(); // Update the displayed tasks
    });

    // Delete a task when the "Delete" button is clicked
    document.getElementById("taskList").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = e.target.dataset.index; // Get the index of the task to delete
            deleteTask(index); // Remove the task from the 'tasks' array
            displayTasks(); // Update the displayed tasks
        }
    });

    // Mark a task as done when the checkbox state changes
    document.getElementById("taskList").addEventListener("change", (e) => {
        if (e.target.tagName === "INPUT") {
            const index = e.target.dataset.index; // Get the index of the task to update
            updateTaskStatus(index, e.target.checked); // Update the 'done' status
            displayTasks(); // Update the displayed tasks
        }
    });

    // Initial display of tasks
    displayTasks();
});
