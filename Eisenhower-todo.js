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
        <div class="flex w-full items-center justify-between gap-4 bg-white border border-slate-200 rounded-lg px-4 py-3 shadow-sm">
            <div class="flex flex-col text-left">
            <div class="text-sm font-semibold text-slate-800">
                ${name}
            </div>

            <div class="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>${dueDate || 'No due date'}</span>
                <span class="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                ${priority}
                </span>
            </div>
            </div>

            <div class="flex items-center gap-2">
            <button
                onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                "
                class="text-xs bg-rose-600 hover:bg-rose-700 text-white rounded px-3 py-1.5 font-medium"
            >
                Delete
            </button>

            <button
                onclick="addToMatrix(${i});"
                class="text-xs bg-amber-500 hover:bg-amber-600 text-white rounded px-3 py-1.5 font-medium"
            >
                Add to Matrix
            </button>
            </div>
        </div>
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
        addToQuadrant1();
    }
    else if(todoObject.priority === 'Important but Not Urgent'){
        quadrant2.push(todoObject);
        addToQuadrant2();
    }
    else if(todoObject.priority === 'Urgent but Not Important'){
        quadrant3.push(todoObject);
        addToQuadrant3();
    }
    else if(todoObject.priority === 'Not Urgent and Not Important'){
        quadrant4.push(todoObject);
        addToQuadrant4();
    }
}

function addToQuadrant1(){
    let quadListHTML = '';
    for(let i = 0; i < quadrant1.length; i++){
        const quadObject = quadrant1[i];
        const {name, dueDate, priority} = quadObject;
        const html = `
            <div class="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
                <div>
                    <div class="text-sm font-medium text-slate-800">
                        ${name}
                    </div>
                    <div class="text-xs text-slate-500">
                        ${dueDate || 'No due date'}
                    </div>
                </div>

                <button
                    class="text-xs bg-rose-600 hover:bg-rose-700 text-white rounded px-2 py-1"
                    onclick="
                        quadrant1.splice(${i}, 1);
                        addToQuadrant1();
                    "
                >
                    Remove
                </button>
            </div>
        `;
        quadListHTML += html;
    }
    document.querySelector('.js-quad1-input').innerHTML = quadListHTML;
}

function addToQuadrant2(){
    let quadListHTML = '';
    for(let i = 0; i < quadrant2.length; i++){
        const quadObject = quadrant2[i];
        const {name, dueDate, priority} = quadObject;
        const html = `
            <div class="flex w-full items-center justify-between gap-3 bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
                <div class="flex flex-col text-left">
                <div class="text-sm font-medium text-slate-800">
                    ${name}
                </div>
                <div class="text-xs text-slate-500">
                    ${dueDate || 'No due date'}
                </div>
                </div>

                <button
                class="shrink-0 text-xs bg-rose-600 hover:bg-rose-700 text-white rounded px-3 py-1.5"
                onclick="
                    quadrant2.splice(${i}, 1);
                    addToQuadrant2();
                "
                >
                Remove
                </button>
            </div>
        `;
        quadListHTML += html;

    }
    document.querySelector('.js-quad2-input').innerHTML = quadListHTML;

}

function addToQuadrant3(){
    let quadListHTML = '';
    for(let i = 0; i < quadrant3.length; i++){
        const quadObject = quadrant3[i];
        const {name, dueDate, priority} = quadObject;
        const html = `
            <div class="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
                <div>
                    <div class="text-sm font-medium text-slate-800">
                        ${name}
                    </div>
                    <div class="text-xs text-slate-500">
                        ${dueDate || 'No due date'}
                    </div>
                </div>

                <button
                    class="text-xs bg-rose-600 hover:bg-rose-700 text-white rounded px-2 py-1"
                    onclick="
                        quadrant3.splice(${i}, 1);
                        addToQuadrant3();
                    "
                >
                    Remove
                </button>
            </div>
        `;
        quadListHTML += html;
    }
    document.querySelector('.js-quad3-input').innerHTML = quadListHTML;
}

function addToQuadrant4(){
    let quadListHTML = '';
    for(let i = 0; i < quadrant4.length; i++){
        const quadObject = quadrant4[i];
        const {name, dueDate, priority} = quadObject;
        const html = `
            <div class="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-md px-3 py-2">
                <div>
                    <div class="text-sm font-medium text-slate-800">
                        ${name}
                    </div>
                    <div class="text-xs text-slate-500">
                        ${dueDate || 'No due date'}
                    </div>
                </div>

                <button
                    class="text-xs bg-rose-600 hover:bg-rose-700 text-white rounded px-2 py-1"
                    onclick="
                        quadrant4.splice(${i}, 1);
                        addToQuadrant4();
                    "
                >
                    Remove
                </button>
            </div>
        `;
        quadListHTML += html;
    }
    document.querySelector('.js-quad4-input').innerHTML = quadListHTML;
}