const tasks = [];

function createTask() {
    const taskName = document.getElementById('taskName').value;
    const taskValue = document.getElementById('taskValue').value;

    if (taskName && taskValue) {
        const task = {
            name: taskName,
            value: taskValue,
            claimed: false
        };

        tasks.push(task);
        displayTasks();

        document.getElementById('taskName').value = '';
        document.getElementById('taskValue').value = '';
    }
}

function displayTasks() {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        
        const taskInfo = document.createElement('span');
        taskInfo.textContent = `${task.name} - $${task.value}`;
        
        const claimButton = document.createElement('button');
        claimButton.textContent = 'Claim';
        claimButton.onclick = () => claimTask(index);

        taskItem.appendChild(taskInfo);
        taskItem.appendChild(claimButton);
        
        taskList.appendChild(taskItem);
    });
}

function claimTask(index) {
    tasks[index].claimed = true;
    displayTasks();
}
