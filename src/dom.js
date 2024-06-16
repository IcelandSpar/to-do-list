import {newProj, Task} from './projects.js'

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
    addTaskButton = document.querySelector(".add-task-btn")


}

export const classes = new ProjectsClasses;

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
        task.classList.add("tasks", `task${i}`)


        
        let taskInfoCont = document.createElement("div");
        taskInfoCont.classList.add("class-info-container")
        task.appendChild(taskInfoCont);


        
        let taskTitleDescCont = document.createElement("div");
        taskInfoCont.appendChild(taskTitleDescCont);
        taskTitleDescCont.style.cssText = "display: flex; flex-direction: column; gap: 1rem;  margin-right: 1rem; width: 90%"

        let taskTitleCont = document.createElement("div");
        taskTitleCont.classList.add(".task-title-cont")
        taskTitleCont.style.cssText = "display: flex; align-items: baseline;"
        taskTitleDescCont.appendChild(taskTitleCont);

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox")
        checkBox.style.cssText = "margin-left: -2rem;"
        taskTitleCont.appendChild(checkBox)

        if(project.tasks[i].completed) {
            checkBox.setAttribute("checked", "true")
        }

        checkBox.addEventListener('change', function() {
        project.tasks[i].completed = checkBox.checked
        console.log(project.tasks[i].completed)
        console.log(project.tasks[i])
        })

        let taskTitle = document.createElement("p");
        taskTitle.textContent = project.tasks[i].taskTitle;
        taskTitle.style.cssText = "display: inline; width: fit-content; margin-left: 1rem; font-size: 1.5rem;"
        taskTitleCont.appendChild(taskTitle)

        let priorityText = document.createElement("p");
        priorityText.textContent = project.tasks[i].priority;
        taskTitleCont.appendChild(priorityText)

        if (project.tasks[i].priority == "Urgent") {
            priorityText.style.cssText = "display: inline; color: red; margin-left: .5rem; opacity: 0.77; font-size: 1rem;"
        } else if (project.tasks[i].priority == "Important") {
            priorityText.style.cssText = "color: yellow; margin-left: .5rem; opacity: 0.77; font-size: 1rem;"
        } else if (project.tasks[i].priority == "Not Important") {
            priorityText.style.cssText = "color: green; margin-left: .5rem; opacity: 0.77; font-size: 1rem;"
        }

        let taskDescript = document.createElement("p");
        taskDescript.style.cssText = "line-height: 1.4; width: 100%"
        taskTitleDescCont.appendChild(taskDescript);
        taskDescript.textContent = project.tasks[i].taskDesc;

        let taskDueDate = document.createElement("div");
        taskTitleDescCont.appendChild(taskDueDate);
        taskDueDate.textContent = `Due Date: ${project.tasks[i].dueDate}`

        let modifyContainer = document.createElement("div");
        modifyContainer.classList.add("modify-container");
        
        task.appendChild(modifyContainer);

        let editDiv = document.createElement("div");
        editDiv.textContent = "Edit";
        modifyContainer.appendChild(editDiv)

        let deleteDiv = document.createElement("div");
        deleteDiv.textContent = "Delete";
        modifyContainer.appendChild(deleteDiv);

        deleteDiv.addEventListener('click', function() {
            project.tasks.splice(i, 1);
            
            MakeContent(project)


        })
    }
}



}

export function addTaskModal(project) {
    let modalBackground = document.createElement("div");
    
    modalBackground.style.cssText = "position: fixed; z-index: 1; left: 0;  top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
    document.body.appendChild(modalBackground);

    let modalCont = document.createElement("div");
    modalCont.style.cssText = "margin: auto; display: flex; border: 1px solid #888; color: white; min-width: 500px; max-width: 800px; width: 70%; margin-top: 5rem; background-color: rgb(24, 18, 43); padding: 20px; justify-content: space-between; align-items: flex-start; font-size: 1.8rem; border-radius: 15px;"

    let form = document.createElement("form");
    let addTitleLabel = document.createElement("label");
    let addTitleInput = document.createElement("input");
    let exitBtn = document.createElement("button");
    let addTaskDescLabel = document.createElement("label");
    let addTaskDescInput = document.createElement("textarea");
    let addTaskDueDateLabel = document.createElement("label");
    let addTaskDueDateInput = document.createElement("input");
    let addPriorityLabel = document.createElement("label");

    let addPriorityInput = document.createElement("select");
    let prioritySelect1 = document.createElement("option");
    let prioritySelect2 = document.createElement("option");
    let prioritySelect3 = document.createElement("option");

    let addTaskSubmit = document.createElement("button");

    addTitleLabel.setAttribute("for", "taskTitle");
    addTitleInput.setAttribute("name", "tasTitle");

    addTaskDueDateInput.setAttribute("type", "date");
    addTitleInput.setAttribute("type", "text");
    addTaskDescInput.setAttribute("type", "text");
    addTaskDescInput.style.cssText = "height: 100px; resize: vertical; padding: .5rem 0"
    
    


    exitBtn.textContent = "X";
    exitBtn.style.cssText = "padding: .2rem; background-color: rgb(24, 18, 43); color: white; font-weight: 600; cursor: pointer;"
    addTitleLabel.textContent = "Task Title:"

    modalBackground.appendChild(modalCont);
    modalCont.appendChild(form);
    modalCont.appendChild(exitBtn);

    form.appendChild(addTitleLabel);
    form.appendChild(addTitleInput);

    addTaskDescLabel.textContent = "Task Description:"
    form.appendChild(addTaskDescLabel);
    form.appendChild(addTaskDescInput);

    addTaskDueDateLabel.textContent = "Due Date:";
    form.appendChild(addTaskDueDateLabel);
    form.appendChild(addTaskDueDateInput);

    addPriorityLabel.textContent = "Priority:";
    prioritySelect1.textContent = "Not Important";
    prioritySelect2.textContent = "Important";
    prioritySelect3.textContent = "Urgent";

    form.appendChild(addPriorityLabel);
    form.appendChild(addPriorityInput);
    addPriorityInput.appendChild(prioritySelect1);
    addPriorityInput.appendChild(prioritySelect2);
    addPriorityInput.appendChild(prioritySelect3);

    addTaskSubmit.textContent = "+ Add Task";
    addTaskSubmit.style.cssText = "align-self: flex-start; padding: .5rem 1.5rem; font-weight: 600; cursor: pointer; border-radius: 15px;"
    form.appendChild(addTaskSubmit);

    addTaskSubmit.addEventListener('click', function(e) {
        e.preventDefault()
        modalBackground.style.display = "none";
        let addingTask = new Task(addTitleInput.value, addTaskDescInput.value, addTaskDueDateInput.value, false, addPriorityInput.value, "")
        project.tasks.push(addingTask)
        MakeContent(project)
        
    })

    exitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        modalBackground.style.display = "none";
    })


}
