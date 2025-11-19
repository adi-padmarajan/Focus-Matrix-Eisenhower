const todoList = [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const toDo = todoList[i];
        const html = `
            <p> 
                ${toDo} 
                <button onclick = "
                    todoList.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button> 
            </p>
        `;
        todoListHTML += html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    //console.log(todoList);
    inputElement.value = ''; //To Clear the input text box once the task has been added
    renderTodoList();
}