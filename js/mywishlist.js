
document.addEventListener('DOMContentLoaded', function(){
    let userLoggedEmail = localStorage.getItem('user')
    let logTab = document.getElementById('logout');
    let userLogged = localStorage.getItem('islogged');
    const title = document.getElementById('List-Title');
    const optionBtns = document.querySelector('.PackBtn-container');
    const packContainer = document.getElementById('wishlist-container');
    const pack1Itinerary = ["Day 1: Arrival in Calgary", "Day 2: Calgary to Canmore", "Day 3: Canmore to Banff", "Day 4: Banff-Lake Minnewanka","Day 5: Explote Banff National", "Day 6: Lake Louise"];
    const pack2Itinerary = ["Day 1: Arrival in Niagara Falls","Day 2: Niagara Falls Attractions","Day 3: Travel to Toronto","Day 4: Exploring Toronto","Day 5: Blue Montain Resort"];
    const pack3Itinerary = ["Day 1: Arrival in Montreal","Day 2: Discovering Montreal","Day 3: Travel to Quebec City","Day 4: Exploring Quebec","Day 5: Hallifax","Day 6: Hallifax Attractions"];
    let userInfoDiv = document.querySelector('.user-Info');
    userInfoDiv.style.display = "none";

    if (userLogged === 'true'){
        let name = localStorage.getItem('name');
        
        title.textContent = `Welcome ${name} to your Wishlist`;
        logTab.textContent = "LogOut"

        let userInfoBtn = document.createElement('button');
        userInfoBtn.textContent = "Personal Info";
        optionBtns.appendChild(userInfoBtn);

        userInfoBtn.addEventListener('click', function(){

            if(userInfoDiv.innerHTML === ""){
                let userEmail =  localStorage.getItem('user');
                createInput("Email: ", userEmail, userInfoDiv, true);
    
                let userName = localStorage.getItem('name');
                createInput("Name: ", userName, userInfoDiv, false);

                let userDOB = localStorage.getItem('dob');
                createInput("DOB: ",userDOB,userInfoDiv, false); 
                
                userInfoDiv.style.display = "flex";
            } else {
                userInfoDiv.innerHTML = "";
                userInfoDiv.style.display = "none";
            }



        })

        function createInput(labelText, inputValue, divToAdd, block){
            let label =  document.createElement('label');
            label.textContent = labelText;
            let input =  document.createElement('input');
            input.value = inputValue;
            if (block){
                input.setAttribute('readonly','readonly');
            }
            divToAdd.appendChild(label);
            divToAdd.appendChild(input);
        }

        let searchPackBtn = document.createElement('button');
        searchPackBtn.textContent = "Search Packages";

        searchPackBtn.addEventListener('click', function(){
            window.location.href = 'packages.html';
        })
        optionBtns.appendChild(searchPackBtn);


        let wishPack1 = localStorage.getItem('pack1');
        let wishPack2 = localStorage.getItem('pack2');
        let wishPack3 = localStorage.getItem('pack3');
        

        if (wishPack1 === 'true'){
            CreateDiv('Wishpack1');
            const div1 = document.getElementById('Wishpack1');
            CreateTitle(div1,'Adveturous Alberta');
            AddImage(div1,'../media/images/banff.jpg');
            AddItinerary(div1,pack1Itinerary);
            AddButton(div1,'remove1');

            
            let btnRemove1 = document.getElementById('remove1');
            btnRemove1.addEventListener('click', function(){
            RemovePack(userLoggedEmail, 'pack1');
            console.log('I am back here')
            //location.reload();
            })

        } 

    
        if (wishPack2 === 'true'){
            CreateDiv('Wishpack2');
            const div2 = document.getElementById('Wishpack2');
            CreateTitle(div2,'Marvellous Ontario');
            AddImage(div2,'../media/images/niagara.jpg');
            AddItinerary(div2,pack2Itinerary);
            AddButton(div2,'remove2');

            let btnRemove2 = document.getElementById('remove2');
            btnRemove2.addEventListener('click', function(){
                RemovePack(userLoggedEmail,'pack2');
                console.log('I am back here')
                //location.reload();
            })
        } 

        if (wishPack3 === 'true'){
            CreateDiv('Wishpack3');
            const div3 = document.getElementById('Wishpack3');
            CreateTitle(div3,'Eastern Escapade');
            AddImage(div3,'../media/images/hallifax.jpg');
            AddItinerary(div3,pack3Itinerary);
            AddButton(div3,'remove3');

            let btnRemove3 = document.getElementById('remove3');
            btnRemove3.addEventListener('click', function(){
                RemovePack(userLoggedEmail,'pack3');
                console.log('I am back here')
                //location.reload();
            })
        }

        function CreateDiv(newid){
            const div = document.createElement('div');
            div.className = "Packages";
            div.id = newid;
            packContainer.appendChild(div);
        }

        function CreateTitle(container, newtitle){
            let title = document.createElement('h2');
            title.textContent = newtitle;
            container.appendChild(title);
        }

        function AddImage(container, newimage){
            let image = document.createElement('img');
            image.src = newimage; 
            container.appendChild(image);
        }

        function AddItinerary(container, listElements){
            let itinerarydiv = document.createElement('div');
            itinerarydiv.className = 'Itinerary';
            let ul = document.createElement('ul');
            listElements.forEach(function(element){
                const li = document.createElement('li')
                li.textContent = element;
                ul.appendChild(li);
            })
            ul.style.listStyleType = 'none'; 
            itinerarydiv.appendChild(ul);
            container.appendChild(itinerarydiv);
        }

        function AddButton(container,btnid){
            const div = document.createElement('div');
            div.className = "Button-container";
            let button = document.createElement('button');
            button.textContent = "Remove   ";
            button.id = btnid;
            let icon = document.createElement('icon');
            icon.className = "fa-solid fa-heart";
            button.appendChild(icon);
            div.appendChild(button);
            container.appendChild(div);
        }

        function RemovePack(user, packtoRemove){
            localStorage.setItem(packtoRemove, false);
            updatePack(user, packtoRemove, false);
        }
    }
    else {
        title.textContent = 'Welcome! Please Log in to access your Wishlist';
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

})

function updatePack(email , pack, value ){
    console.log(pack)
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
                    location.reload();
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