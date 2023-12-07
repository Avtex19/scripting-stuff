function handleAddTask() {
    const taskInput = document.querySelector("input");
    if(taskInput.value.trim().length === 0) {
        alert("Please don't leave task field empty");
    }else{
        handleAddingTask(taskInput.value);
        handleListHeight();
    }
    
}

function handleListHeight(){
    const tasksDiv = document.querySelector(".tasks");
    if(tasksDiv.children.length > 2){
        tasksDiv.classList.add("tasksHeight")
    }else{
        tasksDiv.classList.remove("tasksHeight");
    }
}



function handleAddingTask(task){
    const tasksDiv = document.querySelector(".tasks");
    const newTaskDiv = document.createElement("div");
    const newCheckbox = document.createElement("input");


    const deleteTask = document.createElement("button");
    deleteTask.innerText = "Delete";
   
    newCheckbox.type = "checkbox";
    const newPtag = document.createElement("p");
    newPtag.innerText = task;
   

    newTaskDiv.appendChild(
        Object.assign(
            newCheckbox,
            newCheckbox.addEventListener("change", (e) => {
                if(e.target.checked){
                    newPtag.classList.add("text-line-through")
                    deleteTask.classList.add("text-line-through");
                }else{
                    newPtag.classList.remove("text-line-through");
                    deleteTask.classList.remove("text-line-through");
                }
            })
        )
    )

    newTaskDiv.appendChild(
        Object.assign(
            newPtag,
        )
    )

    newTaskDiv.appendChild(
        Object.assign(
            deleteTask,
            deleteTask.addEventListener("click", () => {
                tasksDiv.removeChild(newTaskDiv);
                handleListHeight();
            })

        )
    )

    tasksDiv.appendChild(newTaskDiv);
}