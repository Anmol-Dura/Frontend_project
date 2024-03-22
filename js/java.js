let counter = 0; // Initialize counter variable outside the function

function handleViewportChange() {
    if (window.innerWidth >= 768 && counter === 0) {
        // Desktop view and counter is 0
        let nav = document.querySelector('.sidebar');
        let newElement = document.createElement("div");
        newElement.className = 'new-element'; // Add a class for easy identification
        // Check if the current page is the home page
        if ((window.location.pathname === '/') || (window.location.pathname === '/index.html')) {
            // Apply actions for the home page
            newElement.innerHTML = '<a href="./pages/packages.html">Packages</a>';
            // Add your code specific to the home page here
        } else {
            // Apply actions for other pages
            newElement.innerHTML = '<a href="./packages.html">Packages</a>';
            // Add your code specific to other pages here
        }

        nav.appendChild(newElement);
        counter = 1; // Increment counter to indicate the link has been appended
    } else if (window.innerWidth < 768) {
        // Mobile view
        counter = 0; // Reset counter when viewport width falls below threshold
        let nav = document.querySelector('.sidebar');
        let newElement = nav.querySelector('.new-element');
        if (newElement) {
            nav.removeChild(newElement);
        }
    }
}

// Call the function initially to set the correct state
handleViewportChange();

// Attach the function to the window's resize event
window.addEventListener('resize', handleViewportChange);
