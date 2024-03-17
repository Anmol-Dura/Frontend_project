/* Java Script for Log in Form*/
let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let dobField = document.getElementById("dobField");
let password2Field = document.getElementById("password2Field");

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    dobField.style.maxHeight = "0";
    password2Field.style.maxHeight = "0";
    nameField.style.border = "0";
    dobField.style.border = "0";
    password2Field.style.border = "0";
}

createBtn.onclick = function() {
    nameField.style.maxHeight = "4.1em";
    dobField.style.maxHeight = "4.1em";
    password2Field.style.maxHeight = "4.1em"; 
    nameField.style.border = "2px";
    dobField.style.border = "2px";
    password2Field.style.border = "2px";
}

const form = document.getElementById("userForm"); 
const username = document.getElementById("name");
const useremail = document.getElementById("useremail");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message; 
}

function ErrorFunction(input,message) {
    const entryField = input.parentElement;
    const div = entryField.querySelector('div');

    div.innerText = message;
    
    //add error class
    entryField.className = 'entry-field error';
}

function SuccessFunction(input) {
    const entryField = input.parentElement;
    entryField.className = 'entry-field success';
}

function checkInputs() {
    const usernameValue = username.value.trim();
    const useremailValue = useremail.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {

        ErrorFunction(username,"Name is Mandatory");
    }
    else {
        SuccessFunction(username);
    }

    if (useremailValue === '') {

        ErrorFunction(useremail,"Email is Mandatory");
    }
    else {
        SuccessFunction(useremail);
    }

    if (password1Value === '') {

        ErrorFunction(password1,"Password is Mandatory");
    }
    else {
        SuccessFunction(password1);
    }
    
    if (password2Value === '') {

        ErrorFunction(password2,"Password is Mandatory");
    }
    else if (password1Value !== password2Value){
        ErrorFunction(password2, "Passwords do not match");
    }
    else {
        SuccessFunction(password2);
    }
}
