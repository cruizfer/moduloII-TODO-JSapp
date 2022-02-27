// Capturing values from the HTML

const inputTyping = document.getElementById('new-task');
const addBtn = document.getElementById('btn-add');
const ul = document.querySelector('ul');
const empty = document.getElementById('empty');

// Save and display tasks function

addBtn.addEventListener('click', printTask);

function printTask(event) {
    event.preventDefault();

    // Displaying tasks
    const task = inputTyping.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = task;

    // Delete task button + remove function
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('btn-delete');
    removeBtn.addEventListener('click', (event) => {
        const item = event.target.parentNode;
        ul.removeChild(item);
    })

    // Appending elements
    li.appendChild(p);
    li.appendChild(removeBtn);
    ul.appendChild(li);

    inputTyping.value = ""

};



/* function deleteTaskBtn() {

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('btn-delete');
    removeBtn.addEventListener('click', (event) => {
        const item = event.target.parentNode;
        ul.removeChild(item);
    })
    return deleteTaskBtn;
}
 */