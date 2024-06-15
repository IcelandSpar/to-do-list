import {newProj} from './projects.js'

export class NameModal {
    modalCloseBtn = document.querySelector(".close-btn");
    nameModal = document.querySelector(".name-modal");
    modalSubBtn = document.querySelector(".modal-sub-btn");
    firstNameInput = document.querySelector(".first-name-input");
    profName = document.querySelector(".prof-name");
}

class ProjectsClasses {
    contentContainer = document.querySelector(".content-container");
    homeName = document.querySelector(".home-name");
    tasks = document.querySelector(".tasks");
    taskInfoContainer = document.querySelector(".task-info-container");


}

const classes = new ProjectsClasses;

export function MakeContent(project) {
        classes.contentContainer.textContent = ""

    let projTitle = document.createElement("input")
    projTitle.classList.add(".home-name");
    projTitle.style.cssText = "border: none; color: rgba(255, 255, 255, 0.877); border-radius: 7px; background: rgb(24, 18, 43); padding: 2rem .5rem; height: 1ch; font-size: 3rem;"
    projTitle.setAttribute("placeholder", project.projName)
    projTitle.setAttribute("value", project.projName)

    classes.contentContainer.appendChild(projTitle);

    if (project.tasks.length == 0) {
        let noTasks = document.createElement("h3")
        noTasks.textContent = "Looks like there are no tasks...";
        noTasks.style.cssText = "margin-left: .5rem; margin-top: 1rem;"
        classes.contentContainer.appendChild(noTasks);
        
    } else {

    

    for(let i = 0; i < project.tasks.length; i++) {
        let task = document.createElement("div");
        classes.contentContainer.appendChild(task);
        task.classList.add("tasks")


        
        let taskInfoCont = document.createElement("div");
        taskInfoCont.classList.add("class-info-container")
        task.appendChild(taskInfoCont);


        
        let taskTitleDescCont = document.createElement("div");
        taskInfoCont.appendChild(taskTitleDescCont);
        taskTitleDescCont.style.cssText = "display: flex; flex-direction: column; gap: 1rem;"

        let taskTitleCont = document.createElement("div");
        taskTitleCont.classList.add(".task-title-cont")
        taskTitleCont.style.cssText = "display: flex; gap: 1rem; align-items: center;"
        taskTitleDescCont.appendChild(taskTitleCont);

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox")
        checkBox.style.cssText = "margin-left: -2rem;"
        taskTitleCont.appendChild(checkBox)

        let taskTitle = document.createElement("h2");
        taskTitle.textContent = project.tasks[i].taskTitle;
        taskTitleCont.appendChild(taskTitle)

        let priorityText = document.createElement("div");
        priorityText.textContent = project.tasks[i].priority;
        taskTitleCont.appendChild(priorityText)

        let taskDescript = document.createElement("p");
        taskDescript.style.cssText = "line-height: 1.4; width: 100%"
        taskTitleDescCont.appendChild(taskDescript);
        taskDescript.textContent = project.tasks[i].taskDesc;

        let taskDueDate = document.createElement("div");
        taskTitleDescCont.appendChild(taskDueDate);
        taskDueDate.textContent = `Due Date: ${project.tasks[i].dueDate}`

        let modifyContainer = document.createElement("div");
        modifyContainer.classList.add("modify-container");
        modifyContainer.style.cssText = "display: flex; gap: 1rem; "
        task.appendChild(modifyContainer);

        let editDiv = document.createElement("div");
        editDiv.textContent = "Edit";
        modifyContainer.appendChild(editDiv)

        let deleteDiv = document.createElement("div");
        deleteDiv.textContent = "Delete";
        modifyContainer.appendChild(deleteDiv);
    }
}

    let addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn")
    addTaskBtn.textContent = "+ Add Task";
    classes.contentContainer.appendChild(addTaskBtn)

}


