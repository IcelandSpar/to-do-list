import NameModal from './name-modal.js';

function MakeNewProj(projName, tasks, description, priority, dueDate, completed) {
    this.projName = projName;
    this.tasks = tasks;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = completed;
}


export const newProj = new MakeNewProj("Chores", ["Dishwashing", "Vacuuming", "Laundry", "clean dishes"], ["Description: Dishwashing involves cleaning and sanitizing dishes, utensils, and cookware used for cooking and eating. This typically includes scrubbing off food residue, applying dish soap, rinsing with water, and then drying and putting away the dishes.", "Description: Vacuuming is the process of using a vacuum cleaner to remove dirt, dust, and debris from floors, carpets, and upholstery. It usually involves moving the vacuum cleaner back and forth over the surface to effectively suck up the dirt, and may also include using attachments to clean corners and edges.", "Description: Laundry involves washing, drying, folding, and sometimes ironing or hanging clothes and other fabric items such as towels and bed linens. The process typically includes sorting clothes by color and fabric type, selecting appropriate laundry detergent and settings, and ensuring that clothes are properly dried and folded or hung afterward.", "use soap"], "important", "12-13-2024", false)




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



