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
let desktopOnly = document.querySelector(".desktop-only");
let checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
let handleViewportChange = function () {
  if (
    (window.innerWidth >= 768 && checkbox.checked) ||
    window.innerWidth >= 768
  ) {
    desktopOnly.style.display = "block";
  } else {
    desktopOnly.style.display = "none";
  }
};

// Call the function initially to handle the initial state
handleViewportChange();

// Add event listener to handle changes in viewport size and checkbox state
window.addEventListener("resize", handleViewportChange);
checkbox.addEventListener("change", handleViewportChange);

//review section (testimonials)
//creating an array of the customer reviews objects
let reviews = [
  {
    name: "Saukhin Gurung",
    review:
      "I liked the service. The staff was very friendly and the food was delicious. I would recommend this place to my friends and family.",
    rating: 5,
  },
  {
    name: "Neha Gurung",
    review:
      "I really liked the food and specially the ambience. The staff was very friendly and the service was very good. I would definitely come back again.",
    rating: 5,
  },
  {
    name: "Bhawana Phembu",
    review: "Really liked it. I danced a lot there. The food was good.",
    rating: 4,
  },
];

//creating a function to display the html in the testimonials-container class div
let container = document.querySelector(".testimonial-container");
let displayReviews = function () {
  let counter = 0;
  reviews.forEach((review) => {
    counter++;
    let reviewDiv = document.createElement("div");
    reviewDiv.className = "testimonial";
    reviewDiv.id = `testimonial-${counter}`;
    reviewDiv.innerHTML = `
    <hr style ="display:${counter === 1 ? "none" : "block"}">
    <p>"${review.review}"</p>
    <h3>${review.name}</h3>
    <div class="rating">
        <span class="fa fa-star ${
          review.rating >= 1 ? "checked" : "checked"
        }"></span>
        <span class="fa fa-star ${
          review.rating >= 2 ? "checked" : "unchecked"
        }"></span>
        <span class="fa fa-star ${
          review.rating >= 3 ? "checked" : "unchecked"
        }"></span>
        <span class="fa fa-star ${
          review.rating >= 4 ? "checked" : "unchecked"
        }"></span>
        <span class="fa fa-star ${
          review.rating >= 5 ? "checked" : "unchecked"
        }"></span>
    </div>`;
    container.appendChild(reviewDiv);
  });
};

//calling the function to display the reviews
displayReviews();

//creating a function that will change the calss property of the spans when chicked on
let starSection = document.querySelector(".star-section");
let stars = starSection.querySelectorAll("span");
let rating = 0; // for using it later for the new review addition to the array
// adding an event listener to the stars
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    changeRating(index);
    rating = index + 1;
    // console.log(rating);
  });
});
// or we can also use this method to get the index of the star clicked

// stars.forEach((star) => {
//   star.addEventListener("click", (e) => {
//     changeRating(stars.indexOf(e.target));
//   });
// });

let changeRating = function (index) {
  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.remove("unchecked");
      stars[i].classList.add("checked");
    } else {
      stars[i].classList.remove("checked");
      stars[i].classList.add("unchecked");
    }
  }
};

// creating objects for the array of testimonials form the user input in the newRevies form
//creating a function whenever the user starts typing in the form

let newReviews = {};
let username = document.querySelector("#name");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

let checkInput = function () {
  if (username.value.length === 0 || message.value.length === 0) {
    // submit.disabled = true;
    return true;
  } else {
    // submit.disabled = false;
    return false;
    //fire a message to the user
  }
};

let createNewArray = function () {
  let newReviews = {
    name: username.value,
    review: message.value,
    rating: rating,
  };

  return newReviews;
};
//creating an event listener for the submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let isEmpty = checkInput();
  if (isEmpty) {
    alert("Please fill in the form");
    return;
  } else {
    let review = createNewArray();
    console.log(review);
    reviews.push(review);
    container.innerHTML = "";
    username.value = "";
    message.value = "";
    rating = 0;
    starSection.querySelectorAll("span").forEach((star) => {
      star.classList.remove("checked");
      star.classList.add("unchecked");
    });
    displayReviews();
  }

  // console.log(newReviews);
});

//creating form validation for the new reviews form
//if the user does not type his name or the message then the submit button will be disabled

