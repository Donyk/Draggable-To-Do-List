function saveTasks() {
    var tasks = [];
    document.querySelectorAll('#taskList li').forEach(function(li) {
        var taskContent = li.firstChild.nodeValue || li.childNodes[0].nodeValue; // Get the text content safely
        tasks.push({
            content: taskContent.trim(), // Trim the text content
            id: li.id,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save the JSON string to local storage
}

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')); // Get the tasks from local storage
    if (tasks) {
        tasks.forEach(function(task) {
            addTask(task.content, task.id, task.completed);
        });
    }
}

// Make sure to call loadTasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);
