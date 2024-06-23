import "./styles.css";
import { newProj, defaultHome } from "./home.js";
import { modalFunctions } from "./name-modal.js";
import {} from "./projects.js";
import { MakeContent } from "./dom.js";
import { addTask } from "./add-task.js";

JSON.parse(localStorage.getItem("home"));
defaultHome();

modalFunctions();

export function checkForLocalStorage(project) {
  if (JSON.parse(localStorage.getItem("home"))) {
    MakeContent(JSON.parse(localStorage.getItem("home")));
    addTask(JSON.parse(localStorage.getItem("home")));
  } else {
    MakeContent(project);
    addTask(project);
  }
}
checkForLocalStorage(newProj);
