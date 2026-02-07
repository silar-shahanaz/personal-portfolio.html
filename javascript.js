let tasks= JSON.parse(localStorage.getItems("tasks"))||[];

function addTask()
{
const input= document.getElementById("taskInput");
const taskText= input.value.trim();

if(taskText==="")
return;
tasks.push(taskText);
localStorage.setItem("tasks", JSON.stringfy(tasks));
displayTasks();
input.value="";
}


function displatTasks() {
const list= document.getElementBuId("taskList");
list.innerHtml="";


tasks.forEach(task,index)=>{
const li= createElement("li");
li.textContent= task;
const delBtn= document.createElement("button");
delBtn.textContent="Delete";
delBtn.onclick=()=>deleteTask(index);
li.appendChild(delBtn);
list.appendChild(li);
});
}
function deleteTask(index){
tasks.splice(index,1);
localStorage.setItem("taska",JSON.stringify(tasks));
displayTasks();
}
displayTasks();
