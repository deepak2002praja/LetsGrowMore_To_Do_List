// Get the necessary DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    li.querySelector(".deleteButton").addEventListener("click", removeTask);
  }
}

// Function to remove a task from the list
function removeTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

// Event listener for the "Add" button click
addButton.addEventListener("click", addTask);

// Event listener for the "Enter" key press in the input field
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
