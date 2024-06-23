import {} from "./home.js";


export function MakeNewProj(projName, tasks) {
  this.projName = projName;
  this.tasks = [];
}

export function Task(
  taskTitle,
  taskDesc,
  dueDate,
  completed = false,
  priority,
  notes
) {
  this.taskTitle = taskTitle;
  this.taskDesc = taskDesc;
  this.dueDate = dueDate;
  this.completed = completed;
  this.priority = priority;
  this.notes = notes;
}