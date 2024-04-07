// JavaScript For Packages Page 
let logTab = document.getElementById('logout');
document.addEventListener('DOMContentLoaded', function(){
    let userLogged = localStorage.getItem('islogged');

    let wishlistItems = document.querySelectorAll(".Wishlist");
    if (userLogged === 'true'){
        wishlistItems.forEach(function(item) {
            item.style.visibility = 'visible';
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

logTab.addEventListener('click',function(e){
    e.preventDefault();
    let tabtext = logTab.textContent;
    console.log(tabtext)
    if (tabtext === 'LogOut'){
        localStorage.clear();
        localStorage.setItem('islogged',false)
        logTab.textContent = "LogIn"
    }
    window.location.href = 'login.html';
})


const pack1 = document.getElementById('button1');
const pack2 = document.getElementById('button2');
const pack3 = document.getElementById('button3');
const user  = localStorage.getItem('user');

pack1.onclick = function(){
    changeIcon('icon1');
    const icon = document.getElementById('icon1');
    let iconclass = icon.className; 
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack1','false');
        updatePack(user,'pack1', false);
    } else {
        localStorage.setItem('pack1','true');
        console.log(user)
        updatePack(user,'pack1', true);
    }
}

pack2.onclick = function(){
    changeIcon('icon2');
    const icon = document.getElementById('icon2');
    let iconclass = icon.className; 
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack2','false');
        updatePack(user,'pack2', false);
    } else {
        localStorage.setItem('pack2','true');
        updatePack(user,'pack2', true);
    }
}

pack3.onclick = function(){
    changeIcon('icon3');
    const icon = document.getElementById('icon3');
    let iconclass = icon.className; 
    if(iconclass === "fa-regular fa-heart") {
        localStorage.setItem('pack3','false');
        updatePack(user,'pack3', false);
    } else {
        localStorage.setItem('pack3','true');
        updatePack(user,'pack3', true);
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

function updatePack(email , pack, value ){
    let db;

    // Request to open a DB, which we will call users, version 1
    let request1 = window.indexedDB.open('usersAccount',1);

    // If an error occurred an the DB can not openned
    request1.onerror = function() {
        console.log('Database failed to opened');
    }
    
    //If the DB opened successfully we will pass the values in the DB to db variable
    request1.onsuccess = function() {
        console.log('Database opened successfully');
        db = request1.result;
        
        let transaction = db.transaction(['usersAccount'],'readwrite');
        let objectStore = transaction.objectStore('usersAccount');
    
        // Create an index to get the user information
        let index =  objectStore.index('Email');
        let request = index.get(email);
    
        request.onsuccess = function(e){
            let user =  e.target.result;
    
            if (user){
                user[pack] = value;
    
                //update the user in the DB
                let updateRequest = objectStore.put(user);
    
                updateRequest.onsuccess =function(){
                    console.log(`El atributo ${pack} del usuario ha sido actualizado.`)
                }
    
                updateRequest.onerror = function() {
                    console.log(`El atributo ${pack} del usuario NO ha sido actualizado.`)
                }
            } else {
                console.log('Usuario No encontrado')
            }
    
    
        }
    }


}
