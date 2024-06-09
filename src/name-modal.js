

class NameModal {
    modalCloseBtn = document.querySelector(".close-btn");
    nameModal = document.querySelector(".name-modal");
    modalSubBtn = document.querySelector(".modal-sub-btn");
    firstNameInput = document.querySelector(".first-name-input");
    profName = document.querySelector(".prof-name");
}

const newModal = new NameModal;

function getName() {
    let firstName = newModal.firstNameInput.value;
    return firstName
}

function displayProfName() {
    if(getName() == "") {
        newModal.profName.textContent = "User";
    } else {
        newModal.profName.textContent = getName();
    }
    
}

export function closeBtn() {
newModal.modalCloseBtn.addEventListener('click', function() {
    newModal.profName.textContent = "User";
    newModal.nameModal.style.display = "none";
})
}

export function subBtn() {
    newModal.modalSubBtn.addEventListener('click', function(e) {
        e.preventDefault();
        getName()
        displayProfName()
        newModal.nameModal.style.display = "none";
    })
    
}

export function modalFunctions() {
    closeBtn()
    subBtn()
}

