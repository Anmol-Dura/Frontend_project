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
    let tabtext = logTab.value;
    if (tabtext === 'LogOut'){
        localStorage.setItem('islogged',false)
        logTab.textContent = "LogIn"
    }
})

const pack1 = document.getElementById('button1');
const pack2 = document.getElementById('button2');
const pack3 = document.getElementById('button3');

pack1.onclick = function(){
    changeIcon('icon1');
    const icon = document.getElementById('icon1');
    let iconclass = icon.className; 
    console.log(iconclass)
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack1','false');
    } else {
        localStorage.setItem('pack1','true');
    }
}

pack2.onclick = function(){
    changeIcon('icon2');
    const icon = document.getElementById('icon2');
    let iconclass = icon.className; 
    console.log(iconclass)
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack2','false');
    } else {
        localStorage.setItem('pack2','true');
    }
}

pack3.onclick = function(){
    changeIcon('icon3');
    const icon = document.getElementById('icon3');
    let iconclass = icon.className; 
    console.log(iconclass)
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack3','false');
    } else {
        localStorage.setItem('pack3','true');
    }
}

document.addEventListener('DOMContentLoaded', function(){

    function CheckPackStatus(pack){
        let status = localStorage.getItem(pack);
        return status;
    }

    function AdjustIcon(pack,icon){
        const iconToAdjust = document.getElementById(icon);
        if(pack === 'true'){
            iconToAdjust.className = "fa-solid fa-heart";
        } else {
            "fa-regular fa-heart";
        }
    }


    let pack1 = CheckPackStatus('pack1');
    AdjustIcon(pack1,'icon1'); 
    
    let pack2 = CheckPackStatus('pack2');
    AdjustIcon(pack2,'icon2'); 

    let pack3 = CheckPackStatus('pack3');
    AdjustIcon(pack3,'icon3'); 

})
