let db;
const form = document.querySelector('#userForm')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#useremail');
const password1Input = document.querySelector('#password1');
const password2Input = document.querySelector('#password2');
const maleInput = document.querySelector('#male');
const femaleInput = document.querySelector('#female');
const dateOfBirthInput = document.querySelector('#dob');
const progressDiv = document.querySelector('#progressBar')
let formElements = document.querySelectorAll('#userForm input');
let progressBar = document.getElementById('progress');

// Initiate our db in our app or web browser, we use the 
// window object and the onload event. 

window.onload = function() {
    // Request to open a DB, which we will call users, version 1
    let request = window.indexedDB.open('usersAccount',1);

    // If an error occurred an the DB can not openned
    request.onerror = function() {
        console.log('Database failed to opened');
    }

    //If the DB opened successfully we will pass the values in the DB to db variable
    request.onsuccess = function() {
        console.log('Database opened successfully');
        db = request.result;
        console.log(db)
    }

    //This function will run just once, unless someone delete the DB
    // so it will run again the next time we start the application
    // The next steps are done to create the DB squema

    request.onupgradeneeded = function(e) {
        // Grab a reference to the DB
        let db = e.target.result;

        // Create Primary Key
        let objectStore = db.createObjectStore('usersAccount', {keyPath: 'id', autoIncrement: true});

        // DB squema
        objectStore.createIndex ('UserName', 'userName', {unique:false});
        objectStore.createIndex ('Email', 'userEmail', {unique:true});
        objectStore.createIndex ('Password', 'userPassword', {unique:false});
        objectStore.createIndex ('Female', 'userFemale', {unique:false});
        objectStore.createIndex ('DateOfBirth', 'userDOB', {unique:false});
        objectStore.createIndex ('Pack1', 'pack1' , {unique:false});
        objectStore.createIndex ('Pack2', 'pack2' , {unique:false});
        objectStore.createIndex ('Pack3', 'pack3' , {unique:false});

        console.log('DB setup Complete!')
    }

}


/* LOG IN FORM JAVASCRIPT */
/* Java Script to hide some fields from the create for to Log in Form */
let createBtn = document.getElementById("createBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let password2Field = document.getElementById("password2Field");
let genderField = document.getElementById('genderField');
let dobField = document.getElementById("dobField");

let submitBtn = document.getElementById("submit-Login");
let resetBtn2 = document.getElementById("resetBtn");

loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    dobField.style.maxHeight = "0";
    password2Field.style.maxHeight = "0";
    genderField.style.maxHeight = "0";
    nameField.style.border = "0";
    dobField.style.border = "0";
    password2Field.style.border = "0";
    genderField.style.border = "0";
    submitBtn.innerHTML = "Log In";
    progressDiv.style.visibility = "hidden";

}

createBtn.onclick = function() {
    nameField.style.maxHeight = "4.1em";
    dobField.style.maxHeight = "4.1em";
    password2Field.style.maxHeight = "4.1em"; 
    genderField.style.maxHeight = "4.1em";
    nameField.style.border = "2px";
    dobField.style.border = "2px";
    password2Field.style.border = "2px";
    genderField.style.border = "2px";
    submitBtn.innerHTML = "Submit";
    progressDiv.style.visibility = "visible";
}


// // Form Validation

let validUser = true;

// To avoid default event when click submit

form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('islogged',false);
    checkInputs();
});

function checkInputs() {
    const usernameValue = nameInput.value.trim();
    const useremailValue = emailInput.value.trim();
    const password1Value = password1Input.value.trim();
    const password2Value = password2Input.value.trim();

    let operation = submitBtn.innerHTML;

    if (operation === 'Log In'){

        if (useremailValue === '') {

            ErrorFunction(emailInput,"Email is Mandatory");
        }
        else {
            SuccessFunction(emailInput);
        }
    
        if (password1Value === '') {
    
            ErrorFunction(password1Input,"Password is Mandatory");
        }
        else {
            SuccessFunction(password1Input);
        }

        let validUser = document.getElementsByClassName('entry-field error');

        // If the validUser.lenght is 0 that means there are no error classes
        if(validUser.length === 0) {
            logIn(useremailValue,password1Value);
        }

} else {

        if (usernameValue === '' && window.matchMedia("(min-width: 768px)").matches){
            ErrorFunction(nameInput,"Name is Mandatory");
        }
        else if (window.matchMedia("(min-width: 768px)").matches) {
            SuccessFunction(nameInput);
        }

        if (useremailValue === '') {

            ErrorFunction(emailInput,"Email is Mandatory");
        }
        else {
            SuccessFunction(emailInput);
        }

        if (password1Value === '') {

            ErrorFunction(password1Input,"Password is Mandatory");
        }
        else {
            SuccessFunction(password1Input);
        }
        
        if (password2Value === '') {

            ErrorFunction(password2Input,"Password is Mandatory");
        }
        else if (password1Value !== password2Value){
            ErrorFunction(password2Input, "Passwords do not match");
        }
        else {
            SuccessFunction(password2Input);
        }

        let validUser = document.getElementsByClassName('entry-field error');

        // If the validUser.lenght is 0 that means there are no error classes
        if(validUser.length === 0) {
            addUser();
        }
        
    }
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

form.addEventListener('reset', (e) => {
    resetFields(nameInput);
    resetFields(emailInput);
    resetFields(password1Input);
    resetFields(password2Input);
    updateProgressBar();
});

// Function to add users to the database
function addUser(){

    // Create a new object that will hold the values that are inside the form
    
    let newUser = {userName: nameInput.value, userEmail: emailInput.value, userPassword: password1Input.value, userFemale: femaleInput.checked, userDOB: dateOfBirthInput.value, pack1 : false, pack2: false, pack3: false}

    // Create a new object that will hold the DB and the transaction
    let transaction = db.transaction(['usersAccount'],'readwrite');

    // Create a new object that will hold the DB usersAccount
    let objectStore = transaction.objectStore('usersAccount');

    //Passing to the objectStore the new user
    let request = objectStore.add(newUser);

    // clear inputs if the request is succes
    request.onsuccess = function(){
        let resetBtn = document.querySelector('#resetBtn');
        resetBtn.click();
        maleInput.checked =  false;
        femaleInput.checked = false;
        dateOfBirthInput.value = "";
    }

    // Print a success msg if the transaction is completed successfully
    transaction.oncomplete =  function() {
        alert('Your account has been created. Please log in!')
        progressBar.style.width = '0%'; 
        progressBar.textContent = '0%'; 
        loginBtn.click();
    }

    // Print an error if the transaction was not able to complet
    transaction.onerror = function(){
        alert('Your already have an account. Please log in!')
        progressBar.style.width = '0%'; 
        progressBar.textContent = '0%'; 
        loginBtn.click();
    }

}

// Function to login a already register user
function logIn(email, password)  {
    let transaction = db.transaction(['usersAccount'], 'readonly');
    let objectStore = transaction.objectStore('usersAccount');

    //Use an index to look the user by its email
    let index = objectStore.index('Email');
    let request = index.get(email);

    request.onsuccess = function(e) {
        let user = e.target.result;
        if(user) {
            //Check if the password matches
            if(user.userPassword === password){
                alert('You successfully Log in!')
                localStorage.setItem('islogged',true);
                localStorage.setItem('user', emailInput.value);
                localStorage.setItem('name', user.userName);
                localStorage.setItem('dob', user.userDOB);
                localStorage.setItem('pack1', user.pack1);
                localStorage.setItem('pack2', user.pack2);
                localStorage.setItem('pack3', user.pack3);
                window.location.href = 'packages.html';
            }
            else {
                alert('Invalid Password!')
            }
        }
        else {
            alert('Your email is not register. Please create an account!!');
            createBtn.click();
        }

    }

}

function updateProgressBar() {
    let filledElements = 0;
    let totalElements = 0;

    formElements.forEach(function(element) {
        // Get the computed style of the element
        let computedStyle = window.getComputedStyle(element);
        
        // Check if the element is visible
        if (computedStyle.display !== 'none' && computedStyle.visibility !== 'hidden') {
            // Count # of elements in the form without radio buttons
            if (element.type !== 'radio') {
                totalElements++;
                if (element.value) {
                    filledElements++;
                }
            }
        }
    });

    // Count radio buttons as just one field
    let radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    if (radioButtons.length > 0) {
        totalElements++;
        filledElements++;
    }

    // Calculate the percentaje to fill the progress Bar
    let progressPercentage = (filledElements / totalElements) * 100;
    progressBar.style.width = progressPercentage + '%';
    progressBar.textContent = progressPercentage.toFixed(0) + '%';
}

formElements.forEach(function(element){
    element.addEventListener('input',updateProgressBar)
})


