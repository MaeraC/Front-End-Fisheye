const contactTitle = document.querySelector(".contact-title");
const label = document.querySelectorAll("label");
const myInputs = document.querySelectorAll(".input-form");
const closeImg = document.querySelector(".close-modale");
const submitBtn = document.querySelector(".submit-btn");

const form = document.querySelector('form');
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputEmail = document.getElementById('email');
const textarea = document.getElementById('textarea');

const errorFirstname = document.querySelector(".error-firstname");
const errorLastname = document.querySelector(".error-lastname");
const errorEmail = document.querySelector(".error-email");
const errorTextarea = document.querySelector(".error-textarea");


contactTitle.style.fontSize = "50px";

closeImg.style.width = "50px";
closeImg.style.cursor = "pointer";

textarea.style.width = "100%";
textarea.style.height = "150px";

submitBtn.style.marginTop = "20px";

label.forEach((label) => {
    label.style.fontSize = "30px";
    label.style.color = "#312E2E";
});

myInputs.forEach((myInputs) => {
    myInputs.style.height = "60px";
    myInputs.style.width = "100%";
    myInputs.style.marginBottom = "10px";
    myInputs.style.fontSize = "25px";
    myInputs.style.borderRadius = "5px";
    myInputs.style.border = "none";
    myInputs.style.paddingLeft = "10px";
});

// Ouverture de la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.querySelector("main");
	modal.style.display = "block";
    main.style.filter = "blur(5px)";
};

// Fermeture de la modale 
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.filter = "blur(0px)";
}; 

// Insertion du nom du photographe dans la modale
function contactFactory(data) {
    const { name } = data;

    function getContactCardDOM() {
        const modal = document.querySelector(".modal");

        const photographerName = document.createElement('p');
            photographerName.textContent = name;
            photographerName.style.order = "2";
            photographerName.style.fontSize = "50px";
            photographerName.style.textAlign = "left";
            photographerName.style.marginBottom = "20px";

        modal.appendChild(photographerName);
    };

    return { name, getContactCardDOM }
};

// Validation du formulaire 
form.addEventListener("submit", (e) => {

    let isInputFirstnameValid = false;
    let isInputLastnameValid = false;
    let isInputEmailValid = false;
    let isTextareaValid = false;

    // Validation du champs Prénom
    if(inputFirstname.value == "") {
        inputFirstname.style.border = "solid 5px #901C1C";
        errorFirstname.textContent = "Veuillez entrer votre prénom";
        errorFirstname.style.color = "#901C1C";
        isInputFirstnameValid = false;
        e.preventDefault();
    }
    else {
        isInputFirstnameValid = true;
    }

    // Validation du champs Nom  
    if(inputLastname.value == "") {
        inputLastname.style.border = "solid 5px #901C1C";
        errorLastname.textContent = "Veuillez entrer votre nom";
        errorLastname.style.color = "#901C1C";
        isInputLastnameValid = false;
        e.preventDefault();
    }
    else {
        isInputLastnameValid = true;
    }

    // Validation du champs E-mail 
    if(inputEmail.value == "") {
        inputEmail.style.border = "solid 5px #901C1C";
        errorEmail.textContent = "Veuillez entrer un e-mail valide";
        errorEmail.style.color = "#901C1C";
        isInputEmailValid = false ;
        e.preventDefault();
    }
    else {
        isInputEmailValid = true;
    }

    // Validation du champs Message
    if(textarea.value == "") {
        textarea.style.border = "solid 5px #901C1C";
        errorTextarea.textContent = "Veuillez entrer votre message";
        errorTextarea.style.color = "#901C1C";
        isTextareaValid = false ;
        e.preventDefault();
    }
    else {
        isTextareaValid = true;
    }

    if(isInputFirstnameValid &&
        isInputLastnameValid &&
        isInputEmailValid &&
        isTextareaValid) {
            form.reset();
        }
})