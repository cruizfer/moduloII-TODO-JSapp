// Capturing values from the HTML
const inputTyping = document.getElementById('new-task');
const inputSearching = document.getElementById('filter-task')
const addBtn = document.getElementById('btn-add');
const searchBtn = document.getElementById('btn-find');
const priority = document.getElementById('get-priority');
const priorityFilter = document.getElementById('filter-priority');
const section = document.getElementById('listContainer'); // container

// Displaying tasks from array
function print1Task(pTask) {

    //capturing elements
    const pId = document.createElement('h4');
    pId.innerText = pTask.idTask;
    const pTitle = document.createElement('h3');
    pTitle.innerText = pTask.title;
    const pPriority = document.createElement('p');
    pPriority.innerText = pTask.priority;

    const div = document.createElement('div');
    const article = document.createElement('article');
    article.classList.add('items');

    //delete button
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('btn-delete');
    removeBtn.addEventListener('click', (event) => {
        tasksList = deleteBtn(event.target.id, tasksList)
        event.target.parentNode.remove();

    });

    //Changing background-color regarding priority
    if (pTask.priority === 'daily') {
        article.style.backgroundColor = 'rgb(151, 202, 108, 0.7)'
    } else if (pTask.priority === 'monthly') {
        article.style.backgroundColor = 'rgb(97, 189, 78,0.7)'
    } else if (pTask.priority === 'urgent') {
        article.style.backgroundColor = 'rgb(58, 123, 63,0.7)'
    }

    // Appending elements
    div.appendChild(pId);
    div.appendChild(pTitle);
    div.appendChild(pPriority);
    article.appendChild(div);
    article.appendChild(removeBtn);
    return article



}

// Create Task List function
function printTaskList(pTasks, pSection) {
    pSection.innerHTML = ''; // clear task List
    for (let task of pTasks) {
        const article = print1Task(task);
        pSection.appendChild(article);
    }
}

printTaskList(tasksList, listContainer);

//Removing task button + updating the array function
function deleteBtn(pId, pTasks) {
    const newArray = [];
    for (let task of pTasks) {
        if (task.idTask != pId) {
            newArray.push(task)
        }
    }
    return newArray
}

//Adding new tasks function 
addBtn.addEventListener('click', printNewTask);
function printNewTask(event) {

    event.preventDefault();

    const newTask = {
        idTask: tasksList.length + 1,
        title: inputTyping.value.toLowerCase(),
        priority: priority.value.toLowerCase()

    }
    tasksList.push(newTask);
    const articleNewTask = print1Task(newTask);
    section.appendChild(articleNewTask);

    inputTyping.value = ""; // clear input text


}

//Filter by priority
priorityFilter.addEventListener('change', (event) => {
    if (event.target.value === 'Select') {
        printTaskList(tasksList, section);
    } else {
        const filteredTasks = [];
        for (let task of tasksList) {
            if (task.priority === event.target.value) {
                filteredTasks.push(task);
            }
        }
        printTaskList(filteredTasks, section);
    }
});

//Filter by word
inputSearching.addEventListener('input', (event) => {
    const filteredbyWord = tasksList.filter(task => {
        return task.title.toLowerCase().startsWith(event.target.value)
    });
    printTaskList(filteredbyWord, section);
});