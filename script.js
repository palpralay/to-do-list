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
  //text decoration line through
  document.querySelectorAll(".task-item").forEach((item) => {
    item.addEventListener("click", function () {
      this.style.textDecoration = "line-through";
    });
  });
  //delete button
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
  //clear inputfield
  document.querySelector(".new-task input").value = "";
};
