import { NameModal } from "./dom.js";

const newModal = new NameModal();

function getName() {
  localStorage.setItem("user", newModal.firstNameInput.value);
  let firstName = newModal.firstNameInput.value;
  return firstName;
}

function displayProfName() {
  if (localStorage.getItem("user")) {
    newModal.profName.textContent = localStorage.getItem("user");
  } else if (localStorage.getItem("user") == null) {
    newModal.profName.textContent = "User";
  }
}

export function closeBtn() {
  newModal.modalCloseBtn.addEventListener("click", function () {
    if (localStorage.getItem("user")) {
      newModal.nameModal.style.display = "none";
    } else {
      newModal.profName.textContent = "User";
      newModal.nameModal.style.display = "none";
    }
    newModal.firstNameInput.style.border = "none";
  });
}

export function subBtn() {
  newModal.modalSubBtn.addEventListener("click", function (e) {
    if (newModal.firstNameInput.value == "") {
      e.preventDefault();
      newModal.firstNameInput.style.border = "5px solid red";
    } else {
      newModal.firstNameInput.style.border = "none";
      e.preventDefault();
      getName();
      displayProfName();

      if (localStorage.getItem("user") == null) {
        newModal.profName.textContent = "User";
        newModal.nameModal.style.display = "none";
      } else {
        newModal.nameModal.style.display = "none";
      }
    }
  });
}

export function modalFunctions() {
  newModal.profName.textContent = localStorage.getItem("user");
  checkForUserName();
  closeBtn();
  subBtn();
  changeNameBtn();
}

export function checkForUserName() {
  window.addEventListener("load", () => {
    if (localStorage.getItem("user")) {
        //do nothing
    } else {
      newModal.nameModal.style.display = "block";
    }
  });
}

export function changeNameBtn() {
  newModal.profName.addEventListener("click", function () {
    newModal.nameModal.style.display = "block";
  });
}
