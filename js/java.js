function handleViewportChange() {
    if (window.innerWidth <= 768) {
        // Mobile view
        // Remove the newly appended element if it exists
        let nav = document.getElementsByClassName('sidebar')[0];
        let newElement = nav.querySelector('.new-element');
        if (newElement) {
            nav.removeChild(newElement);
        }
    } else {
        // Desktop view
        let nav = document.getElementsByClassName('sidebar')[0];
        let newElement = document.createElement("div");
        newElement.className = 'new-element'; // Add a class for easy identification
        newElement.innerHTML = '<a href="./pages/packages.html">package</a>';
        nav.appendChild(newElement);
    }
}

// Call the function initially to set the correct state
handleViewportChange();

// Attach the function to the window's resize event
window.addEventListener('resize', handleViewportChange);
