const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");
console.log(taskList);

loadEventListeners();

function loadEventListeners(){
    
    // Adds a task event
    form.addEventListener('submit', addTask);

    // Removes tasks
    taskList.addEventListener('click', removeTask);

    // Clear all tasks
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filterInput.addEventListener('keyup', filterTasks);
}

function addTask(event){
    if (taskInput.value === ''){
        alert('Enter a task');
    }

    // Creates an li element
    const li = document.createElement('li');

    // Adds a class name
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // Creates an a element
    const link = document.createElement('a');

    // Adds a class to the a element
    link.className = 'delete-item secondary-content';
    link.innerHTML = 'X';
    li.appendChild(link);

    taskList.appendChild(li);


    event.preventDefault();
}

function removeTask(event){
    if (event.target.classList.contains('delete-item')){
        if (confirm('Are you sure you want to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}

function clearTasks(event){
    if (confirm('Clear the task list?')){
        while (taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTasks(event){
    const userFilter = event.target.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if (item.toLocaleLowerCase().indexOf(userFilter) != -1){
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}