// Capturing values from the HTML

const inputTyping = document.getElementById('new-task');
const addBtn = document.getElementById('btn-add');
const ul = document.getElementById('listContainer');
const empty = document.getElementById('empty');

// Save and display tasks function

addBtn.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const task = inputTyping.value;
    const li = document.createElement('li');
    const p = document.createElement('p');

    p.textContent = task;

    li.appendChild(p);
    li.appendChild(deleteTaskBtn());
    ul.appendChild(li);
    inputTyping.value = ""

};

// Delete task button 

function deleteTaskBtn() {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn-delete');

    removeBtn.addEventListener('click', removeTask);
    function removeTask(event) {
        const task = event.target.parentElement;
        ul.removeChild(task);

    }
    return deleteTaskBtn
}
