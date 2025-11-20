const todoList = [];
const quadrant1 = []; //Important and Urgent
const quadrant2 = []; //Important but Not Urgent
const quadrant3 = []; //Urgent but Not Important
const quadrant4 = []; //Not Urgent and Not Important

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    checkEmptyTaskList();
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, dueDate, priority} = todoObject;
        const html = `
            <div class="text-slate-700 text-center">${name}</div> 
            <div class="text-slate-500 text-center">${dueDate}</div>
            <div class="text-slate-600 text-center">${priority}</div>
            <button
                onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                    checkEmptyTaskList();
                "
                class="w-full delete-todo-button bg-rose-600 hover:bg-rose-700 text-white rounded px-3 py-2 text-xs font-medium"
            >
                Delete
            </button> 
            <button
                class=" w-full add-to-matrix bg-amber-500 hover:bg-amber-600 text-white rounded px-3 py-2 text-xs font-medium"
                onclick = "addToMatrix(${i});"
            >
                Add to Matrix
            </button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const priorityElement = document.querySelector('.js-prioritize-tag');

    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    const priority = priorityElement.value;

    todoList.push({name, dueDate, priority});
    inputElement.value = ''; //To Clear the input text box once the task has been added
    renderTodoList();
}

function checkEmptyTaskList(){
    if(todoList.length === 0){
        document.querySelector('.js-default-text').innerHTML = '<p class = "text-slate-500 text-sm italic text-center"> No Tasks Scheduled </p>';
    }
    else{
        document.querySelector('.js-default-text').innerHTML = '';
    }
}

function addToMatrix(index){
    const todoObject = todoList[index];
    if(todoObject.priority === 'Important and Urgent'){
        quadrant1.push(todoObject);
    }
    else if(todoObject.priority === 'Important but Not Urgent'){
        quadrant2.push(todoObject);
    }
    else if(todoObject.priority === 'Urgent but Not Important'){
        quadrant3.push(todoObject);
    }
    else if(todoObject.priority === 'Not Urgent and Not Important'){
        quadrant4.push(todoObject);
    }
}
