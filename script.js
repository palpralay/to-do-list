document.addEventListener("DOMContentLoaded", function () {
  let section = document.getElementById("background-effect"); 

  for (let i = 0; i < 600; i++) { 
      let span = document.createElement("span");
      section.appendChild(span);
  }
});



document.querySelector(".animated-button1").onclick = function () {
  if (document.querySelector(".new-task input").value.length === 0) {
    alert("Please enter a task");
  } else {
    document.querySelector(".task").innerHTML += `
        <div class = "task-item">
        <span id = "taskname">${
          document.querySelector(".new-task input").value
        }</span>
        <button class = "delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
  }
};
