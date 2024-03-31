// JavaScript For Packages Page 
let logTab = document.getElementById('logout');
document.addEventListener('DOMContentLoaded', function(){
    let userLogged = localStorage.getItem('islogged');
    console.log(userLogged)
    let wishlistItems = document.querySelectorAll(".Wishlist");
    if (userLogged === 'true'){
        wishlistItems.forEach(function(item) {
            item.style.visibility = 'visible';
            console.log('I am here')
        });
        logTab.textContent = "LogOut"
    }
    else {
        wishlistItems.forEach(function(item) {
            item.style.visibility = 'hidden';
        });
    }
})


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

logTab.addEventListener('click',function(){
    let tabtext = logTab.ariaValueMax;

    if (tabtext === 'LogOut'){
        localStorage.setItem('islogged',false)
        logTab.textContent = "LogIn"
    }
})

