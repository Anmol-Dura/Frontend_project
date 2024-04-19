// Adding an event listener to Log in btn
let logTab = document.getElementById('logout');
document.addEventListener('DOMContentLoaded', function(){
    let userLogged = localStorage.getItem('islogged');

    let wishlistItems = document.querySelectorAll(".Wishlist");
    if (userLogged == 'true'){
        wishlistItems.forEach(function(item) {
            item.style.display = 'block';
        });
        logTab.textContent = "LogOut"
    }
    else {
        wishlistItems.forEach(function(item) {
            item.style.display = 'none';
        });
    }
})

logTab.addEventListener('click',function(e){
  e.preventDefault();
  let tabtext = logTab.textContent;
  console.log(tabtext)
  if (tabtext === 'LogOut'){
      localStorage.clear();
      localStorage.setItem('islogged',false)
      logTab.textContent = "LogIn"
  }
  window.location.href = './pages/login.html';
})

//creating a function that will change the checked status of the 3 radio buttons when we chick the labels
let radioButtons = document.querySelectorAll('input[type="radio"]');
let radioLabels = document.querySelectorAll(".service-type label");
let radioStatus = 0;

// adding an event listener to the labels
radioLabels.forEach((label, index) => {
  label.addEventListener("click", () => {
    changeRadioStatus(index);
    radioStatus = index;
    console.log(radioStatus);
  });
});

// creating a function that will change the checked status of the radio buttons
let changeRadioStatus = function (index) {
  for (let i = 0; i < radioButtons.length; i++) {
    if (i === index) {
      radioButtons[i].setAttribute("checked", true);
      radioLabels[i].style.backgroundColor = "#333";
      radioLabels[i].style.color = "white";
    } else {
      radioButtons[i].setAttribute("checked", false);
      radioLabels[i].style.backgroundColor = "white";
      radioLabels[i].style.color = "black";
    }
  }
  //iterating
};

//creating a function that will display the total cost of the selected packages after the user has selected the packages and the number of people
let numberOfPeople = document.querySelector("#numberOfGuests");

//creating a function that will check which packages aka lebal is selected and then display the total cost of the selected packages
let checkSelectedPackages = function () {
  //we need to get the package that has attribute checked true and then get the value of that package
  let selectedPackages = document.querySelectorAll("input[type='radio']");
  let totalPriceInput = document.querySelector("#totalPrice");
  // get the package which has the attribute checked true
  let totalCost = 0;
  let pricePerPerson = 0;
  if (selectedPackages[0].attributes[5].value === "true") {
    pricePerPerson = 3500;
    totalCost = pricePerPerson * numberOfPeople.value;
  } else if (selectedPackages[1].attributes[5].value === "true") {
    pricePerPerson = 4500;
    totalCost = pricePerPerson * numberOfPeople.value;
  } else if (selectedPackages[2].attributes[5].value === "true") {
    pricePerPerson = 3800;
    totalCost = pricePerPerson * numberOfPeople.value;
  } else {
    pricePerPerson = 0;
    totalCost = pricePerPerson * numberOfPeople.value;
  }
  console.log(totalCost);
  displayTotalCost(totalCost);
};
//a function to display the toal cost in the #totalPrice input field
let displayTotalCost = function (totalCost) {
  let totalPriceInput = document.querySelector("#totalPrice");
  totalPriceInput.value = "$ " + totalCost;
};

//adding an event listener to the number of people input field or the radio buttons
numberOfPeople.addEventListener("input", checkSelectedPackages);
radioLabels.forEach((label) => {
  label.addEventListener("click", checkSelectedPackages);
});


