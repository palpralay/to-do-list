document.querySelector(".animated-button1").onclick = function () {
    if(document.querySelector(".new-task input").value.length === 0){
        alert("Please enter a task");
    }
    else {
        document.querySelector(".task").innerHTML += `
        <div class = "task-item">
        <span id = "taskname">${document.querySelector(".new-task input").value}</span>
        </div>
        `
    }
}