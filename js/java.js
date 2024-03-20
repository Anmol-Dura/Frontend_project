let counter = 0; // Initialize counter variable outside the function

function handleViewportChange() {
    if (window.innerWidth >= 768 && counter === 0) {
        // Desktop view and counter is 0
        let nav = document.querySelector('.sidebar');
        let newElement = document.createElement("div");
        newElement.className = 'new-element'; // Add a class for easy identification
        newElement.innerHTML = '<a href="./pages/packages.html">Packages</a>';
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
