import './styles.css';
import {} from './home.js';
import {modalFunctions} from './name-modal.js';
import Icon from './account_circle.svg';
import {newProj} from './projects.js'
import {MakeContent} from './dom.js'



modalFunctions()

MakeContent(newProj)
console.log(newProj)