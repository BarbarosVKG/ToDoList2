const todoInput=document.querySelector('.todo-input');
const todoButon=document.querySelector('.todo-buton');
const todoList=document.querySelector('.todo-list');



todoButon.addEventListener("click", addTodo);







function addTodo(event){
event.preventDefault();
//todoDiv Creacion
const todoDiv=document.createElement("div");
todoDiv.classList.add="todo";
//create Li
const newTodo=document.createElement("li");
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
}