import {addTaskModal} from './dom.js'
import {newProj} from './home.js'



export function addTask() {
    let addTaskBtn = document.querySelector(".add-task-btn")
    addTaskBtn.addEventListener('click', function() {
        addTaskModal(newProj)
    })
}


