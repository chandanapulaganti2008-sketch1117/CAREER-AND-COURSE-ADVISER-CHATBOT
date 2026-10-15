script.js (example)
function addTask() {
const input • document.getElementById('taskInput');
const taskText = input.value.trim();
if (taskText a•. '*) return;
const li = document.createElement("li");
11. textContent = taskText;
li. innerTML += " <button onclick="renoveTask(this)">X</button»';
document.getElesentById('taskList').appendChild(11);
input.value = "*;
}
function removeTask(button) {
button.parentElement.remove();
}
