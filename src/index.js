import './styles.css';
import {newProj} from './home.js';
import {modalFunctions} from './name-modal.js';
import Icon from './account_circle.svg';
import {} from './projects.js'
import {MakeContent} from './dom.js'
import {addTask} from './add-task.js'



modalFunctions()

MakeContent(newProj)
console.log(newProj)
addTask()

