"use strict";


//Business Logic in Plain English

//User is shown form
//In case User doesn't give valid input/s and submits form; s/he is shown proper error message/s


//-----------------  DOM Elements  -----------------

let firstName = document.getElementsByClassName("user-input__form-firstname")[0];
let lastName = document.getElementsByClassName("user-input__form-lastname")[0];
let email = document.getElementsByClassName("user-input__form-email")[0];
let password = document.getElementsByClassName("user-input__form-password")[0];
let submit = document.getElementsByClassName("user-input__form-button")[0];
const form = document.getElementsByClassName("user-input__form")[0];

const firstNameError = document.querySelector(".user-input__form-firstname-error");
const lastNameError = document.querySelector(".user-input__form-lastname-error");
const emailError = document.querySelector(".user-input__form-email-error");
const passwordError = document.querySelector(".user-input__form-password-error");

const firstNameErrorIcon = document.querySelector(".user-input__form-error-icon-1");
const lastNameErrorIcon = document.querySelector(".user-input__form-error-icon-2");
const emailErrorIcon = document.querySelector(".user-input__form-error-icon-3");
const passwordErrorIcon = document.querySelector(".user-input__form-error-icon-4");




//-----------------  Functions  -----------------

const hideAllErrorMessages = () => {
    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    firstNameErrorIcon.style.display = "none";
    lastNameErrorIcon.style.display = "none";
    emailErrorIcon.style.display = "none";
    passwordErrorIcon.style.display = "none";

}

const clearAllInputValues = () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
}

const errorStyling = (el) => {
    el.style.marginBottom = "0rem";
    el.style.border = "1px solid hsl(0, 100%, 74%)";
    el.removeAttribute("placeholder");
}

//hide all error messages at page load
window.onload = () => {

    //email.type = "email";

    hideAllErrorMessages();
    clearAllInputValues();
}

//get values from each of the fields
//check if value is null / empty
//show / hide error message against each of the fields
const checkInputFields = (e) => {

    //https://wesbos.com/javascript/05-events/prevent-default-and-form-events
    //Prevent Default and Form Events

    e.preventDefault();

    //console.log(firstName.value + "  " + lastName.value + "   " + email.value + "  " + password.value);


    if (firstName.value.trim() === "") {
        firstNameError.style.display = "block";
        firstNameErrorIcon.style.display = "block";

        errorStyling(firstName);
    }

    if (lastName.value.trim() === "") {
        lastNameError.style.display = "block";
        lastNameErrorIcon.style.display = "block";

        errorStyling(lastName);
    }

    //https://stackoverflow.com/a/13975255/2607372
    //http://jsfiddle.net/boldewyn/2b6d5/
    email.type = "email";
    console.log("email " + email.value + "  " + email.checkValidity());

    //https://stackoverflow.com/questions/73799704/why-checkvalidity-is-returning-true-for-input-field-of-type-email-with-empty
    if (email.checkValidity() === false || email.value.trim() === "") {
        emailError.style.display = "block";
        emailErrorIcon.style.display = "block";

        errorStyling(email);
    }

    if (password.value.trim() === "") {
        passwordError.style.display = "block";
        passwordErrorIcon.style.display = "block";

        errorStyling(password);
    }

    console.log("form is submitted");

}


//-----------------  Event Listeners  -----------------

form.addEventListener("submit", checkInputFields);
