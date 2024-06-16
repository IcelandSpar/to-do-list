import {addTaskModal} from './dom.js'
import {newProj} from './home.js'
import {projectsStored} from './local-storage.js';


export function addTask(project) {
    let addTaskBtn = document.querySelector(".add-task-btn")
    addTaskBtn.addEventListener('click', function() {
        addTaskModal(project)
        
        
    })
}


