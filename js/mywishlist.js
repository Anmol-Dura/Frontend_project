document.addEventListener('DOMContentLoaded', function(){
    let logTab = document.getElementById('logout');
    let userLogged = localStorage.getItem('islogged');
    const title = document.getElementById('List-Title');
    const packContainer = document.getElementById('wishlist-container');
    const pack1Itinerary = ["Day 1: Arrival in Calgary", "Day 2: Calgary to Canmore", "Day 3: Canmore to Banff", "Day 4: Banff-Lake Minnewanka","Day 5: Explote Banff National", "Day 6: Lake Louise"];
    const pack2Itinerary = ["Day 1: Arrival in Niagara Falls","Day 2: Niagara Falls Attractions","Day 3: Travel to Toronto","Day 4: Exploring Toronto","Day 5: Blue Montain Resort"];
    const pack3Itinerary = ["Day 1: Arrival in Montreal","Day 2: Discovering Montreal","Day 3: Travel to Quebec City","Day 4: Exploring Quebec","Day 5: Hallifax","Day 6: Hallifax Attractions"];

    if (userLogged === 'true'){
        let name = localStorage.getItem('name');
        title.textContent = `Welcome ${name} to your Wishlist`;
        logTab.textContent = "LogOut"

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
        console.log(btnRemove1);
        btnRemove1.addEventListener('click', function(){
        RemovePack('pack1');
        location.reload();
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
            RemovePack('pack2');
            location.reload();
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
            RemovePack('pack3');
            location.reload();
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

    function RemovePack(packtoRemove){
        localStorage.setItem(packtoRemove, false);
    }
    }
    else {
        title.textContent = 'Welcome! Please Log in to access your Wishlist';
    }

    



})