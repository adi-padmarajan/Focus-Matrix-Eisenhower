const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);
    inputElement.value = ''; //To Clear the input text box once the task has been added
}