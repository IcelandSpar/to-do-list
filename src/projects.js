import NameModal from './name-modal.js';

function MakeNewProj(projName, tasks) {
    this.projName = projName;
    this.tasks = [tasks];
    

}

function Task(taskTitle, taskDesc, dueDate, completed, priority, notes) {
    this.taskTitle = taskTitle;
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;
    this.completed = completed;
    this.priority = priority;
    this.notes = notes;
}
const newTask = new Task("My title", "My Desc", "12-10-2024", false, "Important", "My Notes")
export const newProj = new MakeNewProj("My Project", newTask)




// export function printProj() {

//     for(let property in newProj) {
//         if(typeof newProj[property] == "string") {
//             console.log(newProj[property])
//         }

//     }

//     for(let i = 0; i < newProj.tasks.length; i++) {
//         console.log(newProj.tasks[i])
//         console.log(newProj.description[i])
//     }

// }



