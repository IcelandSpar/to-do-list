import NameModal from './name-modal.js';

export function MakeNewProj(projName, tasks) {
    this.projName = projName;
    this.tasks = [];
    

}

export function Task(taskTitle, taskDesc, dueDate, completed, priority, notes) {
    this.taskTitle = taskTitle;
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;
    this.completed = completed;
    this.priority = priority;
    this.notes = notes;
}





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



