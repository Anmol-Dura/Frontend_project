// let counter = 0; // Initialize counter variable outside the function

// function handleViewportChange() {
//     if (window.innerWidth >= 768 && counter === 0) {
//         // Desktop view and counter is 0
//         let nav = document.querySelector('.sidebar');
//         let newElement = document.createElement("div");
//         newElement.className = 'new-element'; // Add a class for easy identification
//         // Check if the current page is the home page
//         if ((window.location.pathname === '/') || (window.location.pathname === '/index.html')) {
//             // Apply actions for the home page
//             newElement.innerHTML = '<a href="./pages/packages.html">Packages</a>';
//             // Add your code specific to the home page here
//         } else {
//             // Apply actions for other pages
//             newElement.innerHTML = '<a href="./packages.html">Packages</a>';
//             // Add your code specific to other pages here
//         }

//         nav.appendChild(newElement);
//         counter = 1; // Increment counter to indicate the link has been appended
//     } else if (window.innerWidth < 768) {
//         // Mobile view
//         counter = 0; // Reset counter when viewport width falls below threshold
//         let nav = document.querySelector('.sidebar');
//         let newElement = nav.querySelector('.new-element');
//         if (newElement) {
//             nav.removeChild(newElement);
//         }
//     }
// }

// // Call the function initially to set the correct state
// handleViewportChange();

// // Attach the function to the window's resize event
// window.addEventListener('resize', handleViewportChange);


//improving the previous code by using the css with js 
let desktopOnly = document.querySelector('.desktop-only');
let checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
let handleViewportChange = function () {
    if ((window.innerWidth >= 768 && checkbox.checked) || (window.innerWidth >= 768)) {
        desktopOnly.style.display = 'block';
    } else {
        desktopOnly.style.display = 'none';
    }
}

// Call the function initially to handle the initial state
handleViewportChange();

// Add event listener to handle changes in viewport size and checkbox state
window.addEventListener('resize', handleViewportChange);
checkbox.addEventListener('change', handleViewportChange);





// I am planning to make some changes to the js making the images collection divs in the .services-container 
//me movable with the rotation of the mouse middle button 
