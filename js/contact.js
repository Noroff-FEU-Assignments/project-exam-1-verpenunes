const form = document.querySelector("#contactForm");
const enterName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const textBox = document.querySelector("#text-box");
const messageError = document.querySelector("#messageError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(enterName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 14) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(textBox.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }   
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkIfButtonIsDisabled() {
    if (checkLength(enterName.value, 5) && validateEmail(email.value) && checkLength(subject.value, 14) && checkLength(textBox.value, 24)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

enterName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
textBox.addEventListener("keyup", checkIfButtonIsDisabled);

function eventChange(event) {
    if (checkLength(enterName.value, 5) && checkLength(textBox.value, 25) && checkLength(subject.value, 15) && validateEmail(email.value)) {
        emailError.innerHTML = "";
        messageError.innerHTML = "";
        nameError.innerHTML = "";
        subjectError.innerHTML = "";
    } else {
        validateForm(event);
    }
}

enterName.addEventListener("keyup", eventChange);
email.addEventListener("keyup", eventChange);
textBox.addEventListener("keyup", eventChange);
subject.addEventListener("keyup", eventChange);

enterName.addEventListener("click", validateForm);
email.addEventListener("click", validateForm);
textBox.addEventListener("click", validateForm);
subject.addEventListener("click", validateForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = `<div class="message">Your message has been sent</div>`;
    form.reset();
    button.disabled = true;
}

form.addEventListener("submit", submitForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


