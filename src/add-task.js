import { addTaskModal } from "./dom.js";

export function addTask(project) {
  let addTaskBtn = document.querySelector(".add-task-btn");
  addTaskBtn.addEventListener("click", function () {
    addTaskModal(project);
  });
}
