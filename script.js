window.onload = function(){
loadTasks();
};

function addTask()
{
const input= document.getElementById("taskInput");
const taskText= input.value.trim();

if(taskText===""){
alert("please enter a task");
return;
}

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push(taskText);
localStorage.setItem("tasks" , JSON.stringify(tasks));
loadTasks();
}


function loadTasks()
{
var taskList = document.getElementById("taskList");
taskList.innrtHTML = "";
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(function(task) {
var li = document.createElement("li");
li.textContent = task;
taskList.appendChild(li);
});
}