import {MakeNewProj, Task} from './projects.js';
import {projectsStored} from './local-storage.js';


const newTask = new Task("My title", "My Desc", "12-10-2024", false, "Important", "My Notes")
export const newProj = new MakeNewProj("Home", newTask)

export function defaultHome() {
    projectsStored.projects = [newProj];
    
}
