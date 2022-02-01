const todoInput=document.querySelector('.todo-input');
const todoButon=document.querySelector('.todo-buton');
const todoList=document.querySelector('.todo-list');




todoButon.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteTodo);









function addTodo(event){
event.preventDefault();
//todoDiv Creacion
const todoDiv=document.createElement("li");
todoDiv.setAttribute("id",`li`)
const div=document.createElement("div");
        div.classList.add("divertido");


//create Li
const newTodo=document.createElement("span");
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);


const completedButon=document.createElement("button");
      completedButon.innerHTML= '<i class="fas fa-check"></i>';
      completedButon.classList.add("complete-btn");
      div.appendChild(completedButon);
      

const trashButton=document.createElement("button");
      trashButton.classList.add("delete-btn");
      trashButton.innerHTML='<i class="fas fa-trash"></i>';
      div.appendChild(trashButton);  
      todoDiv.appendChild(div)
      todoList.appendChild(todoDiv);
      todoInput.value="";



    //   trashButton.addEventListener("click",function(){
    //       todoDiv.parentNode.removeChild(todoDiv);
    //   });
      

}

function deleteTodo(e){
     console.log(e.target);  
     const item=e.target;
     //eliminar
     if (item.classList[0]==="delete-btn"){
         item.parentElement.parentElement.remove(); //ELIMINAMOS EL PADRE,VAMOS DE ATRAS HACIA DELANTE. 
     }
     else if (item.classList[0]==="complete-btn"){
         item.parentElement.parentElement.classList.toggle("completed");

     }
}