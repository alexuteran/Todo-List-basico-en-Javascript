
let idCounter=0;
const input=document.querySelector('input[type="text"]');

userInput.addEventListener("submit",(event)=>{
    event.preventDefault();
               addTask();
});

let addTask=()=>{
    idCounter++;
    let newValue=input.value;
    list.innerHTML+=`<div class="task-container" id="${idCounter}">
    <label>
      <input type="checkbox" />
     ${newValue}
    </label>
    <img src="./img/trash.png" class="closeBtn" />
  </div>`
  input.value="";
  updateStats();
};2
list.addEventListener("click",(event)=>{
  if(event.srcElement.nodeName=="INPUT"){
    updateStats();
    }else if(event.srcElement.nodeName=="IMG"){

      deleteTask(event.srcElement.parentNode.id);

    }
});

let updateStats=()=>{
  element=list.querySelectorAll("div");
let chekbox=list.querySelectorAll('input[type="checkbox"]:checked')
  stats.innerHTML=`<p>Tareas pendientes: ${element.length} Completadas:${chekbox.length}</p>`;
};
let deleteTask=(id)=>{
let taskToDelete=document.getElementById(id);
list.removeChild(taskToDelete);
updateStats();
};