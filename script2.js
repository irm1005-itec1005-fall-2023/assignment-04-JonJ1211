const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-btn");

function addTask() {
  if (inputBox.value === '') {
    alert("Please type a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Delete";

    deleteBtn.addEventListener("click", function (e) {
      // Add functionality to delete the task when the delete button is clicked
      e.target.parentElement.remove();
    });

    li.appendChild(deleteBtn);
    inputBox.value = ""; // Clear the input after adding a task
  }
}

addBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("selected");
    }
  });