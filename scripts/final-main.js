// Import the functions and tasks array from  ES module
import { tasks, displayTasks, addTask, deleteTask, updateTaskStatus } from './final-project.js';

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
