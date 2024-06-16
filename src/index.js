import './styles.css';
import {newProj, defaultHome} from './home.js';
import {modalFunctions} from './name-modal.js';
import Icon from './account_circle.svg';
import {} from './projects.js';
import {MakeContent} from './dom.js';
import {addTask} from './add-task.js';
import {projectsStored} from './local-storage.js';

JSON.parse(localStorage.getItem("home"))
defaultHome()

modalFunctions()

export function checkForLocalStorage(project) {


if (JSON.parse(localStorage.getItem("home"))) {
    MakeContent(JSON.parse(localStorage.getItem("home")))
} else {
    MakeContent(project)
}

}
checkForLocalStorage(newProj)

addTask(newProj)



