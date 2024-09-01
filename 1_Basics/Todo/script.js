const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

function addTask() {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const task = { description: taskText, completed: false };
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description;
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.backgroundColor = '#28a745';
        completeBtn.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}

addTaskBtn.addEventListener('click', addTask);
