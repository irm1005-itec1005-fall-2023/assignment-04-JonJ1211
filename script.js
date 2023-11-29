/* Assignment 04: Finishing a Todo List App */
 
function addTask() {
  const inputBox = document.getElementById("input-box");
  const taskList = document.getElementById("task-list");

  if (inputBox.value === '') {
    alert("Please type a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
  }
}