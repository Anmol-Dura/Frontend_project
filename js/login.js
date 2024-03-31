/* LOG IN FORM JAVASCRIPT */
/* Java Script to hide some fields from the create for to Log in Form */
let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let dobField = document.getElementById("dobField");
let password2Field = document.getElementById("password2Field");
let submitBtn = document.getElementById("submit2");
let resetBtn2 = document.getElementById("resetBtn");

loginBtn.onclick = function(){
    LoginBtn();
}

createBtn.onclick = function() {
    nameField.style.maxHeight = "4.1em";
    dobField.style.maxHeight = "4.1em";
    password2Field.style.maxHeight = "4.1em"; 
    nameField.style.border = "2px";
    dobField.style.border = "2px";
    password2Field.style.border = "2px";
    submitBtn.innerHTML = "Submit";
}

function LoginBtn() {
    nameField.style.maxHeight = "0";
    dobField.style.maxHeight = "0";
    password2Field.style.maxHeight = "0";
    nameField.style.border = "0";
    dobField.style.border = "0";
    password2Field.style.border = "0";
    submitBtn.innerHTML = "Log In";
}


// Form Validation

const form = document.getElementById("userForm"); 
const username = document.getElementById("name");
const useremail = document.getElementById("useremail");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
let validUser = true;

// To avoid default event when click submit
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

function resetFields(input) {
    const entryField = input.parentElement;
    entryField.className = 'entry-field';
}

function checkInputs() {
    const usernameValue = username.value.trim();
    const useremailValue = useremail.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    let operation = submitBtn.innerHTML;
    console.log(operation);

    if (operation === 'Log In'){

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

        let validUser = document.getElementsByClassName('entry-field error');

        // If the validUser.lenght is 0 that means there are no error classes
        if(validUser.length === 0) {
            logIn(useremailValue);
        
        }
    } else {

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

        let validUser = document.getElementsByClassName('entry-field error');

        // If the validUser.lenght is 0 that means there are no error classes
        if(validUser.length === 0) {
            addUser(useremailValue,password1Value);
        
        }
        
    }
}

// JS to reset form 

form.addEventListener('reset', (e) => {
    resetFields(username);
    resetFields(useremail);
    resetFields(password1);
    resetFields(password2); 
});




function nameTaken(useremail){
    let nameTaken = localStorage.getItem(useremail);
    if (nameTaken !== null){
        return false;
    } else{
        return true;
    }


}

function addUser(useremail, password1)
{
    let validation = nameTaken(useremail);
    if (validation) {
        localStorage.setItem(useremail, password1);
        alert('Your account has been created. Please log in!')
        LoginBtn();
        resetBtn2.click();
    } 
    else{
        alert('You already have an account. Please log in!')
        LoginBtn();
        resetBtn2.click(); 
    }
        
}

function logIn(useremail) {
    let validation = nameTaken(useremail);
    if (!validation) {
        let storepassword = localStorage.getItem(useremail);
        console.log(storepassword);
        console.log(password1);
        if (storepassword === password1.value){
            alert('You successfully Log in!')
            window.location.href = 'packages.html';
        }
        else {
            alert('Invalid Password!')
        }
    } 
    else{
        console.log(3);
        alert('Your email is not register. Please create an account!!');
        createBtn.click();
    }
    
}


// JavaScript For Packages Page 

function changeIcon(input) {
    let iconElement = document.getElementById(input);
    let iconClass = iconElement.className; 

    if(iconClass === "fa-regular fa-heart") {
        iconElement.className = "fa-solid fa-heart";
    } else {
        iconElement.className = "fa-regular fa-heart";
    }

}

function ShowDayDescription(id) {
    document.getElementById(id).style.display = "block";
}

function HideDayDescription(id) {
    document.getElementById(id).style.display = "none";
}
