const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const {name, dueDate, priority} = todoObject;
        const html = `
            <div class="text-slate-700">${name}</div> 
            <div class="text-slate-500">${dueDate}</div>
            <div class="text-slate-600">${priority}</div>
            <button
                onclick="
                    todoList.splice(${i}, 1);
                    renderTodoList();
                "
                class="delete-todo-button bg-rose-600 hover:bg-rose-700 text-white rounded px-3 py-2 text-xs font-medium"
            >
                Delete
            </button> 
            <button
                class="add-to-matrix bg-amber-500 hover:bg-amber-600 text-white rounded px-3 py-2 text-xs font-medium"
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