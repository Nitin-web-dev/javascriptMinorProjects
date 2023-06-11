const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}


/// detail explaination 

// const ratingEls = document.querySelectorAll(".rating");: This line selects all elements with the CSS class "rating" using the document.querySelectorAll() method. The selected elements are stored in the ratingEls variable as a NodeList.

// const btnEl = document.getElementById("btn");: This line retrieves the element with the id "btn" using the document.getElementById() method. The selected element is stored in the btnEl variable.

// const containerEl = document.getElementById("container");: This line retrieves the element with the id "container" using the document.getElementById() method. The selected element is stored in the containerEl variable.

// let selectedRating = "";: This line initializes a variable named selectedRating with an empty string. This variable will be used to store the selected rating value.

// ratingEls.forEach((ratingEl) => { ... });: This code block uses the forEach method to iterate over each element in the ratingEls NodeList. For each element, an event listener is added to listen for a click event.

// ratingEl.addEventListener("click", (event) => { ... });: This line adds a click event listener to each rating element. When a rating element is clicked, the provided callback function is executed.

// removeActive();: This line calls the removeActive() function, which removes the "active" class from all rating elements. This ensures that only the clicked rating element will have the "active" class.

// selectedRating = event.target.innerText || event.target.parentNode.innerText;: This line assigns the value of the selected rating to the selectedRating variable. It checks if the clicked element contains text directly or within its parent node and assigns the appropriate value.

// event.target.classList.add("active");: This line adds the "active" class to the clicked rating element. This class is likely used to highlight the selected rating visually.

// event.target.parentNode.classList.add("active");: This line adds the "active" class to the parent node of the clicked rating element. This is useful if the clicked element itself does not receive the "active" class but its parent needs to be styled instead.

// btnEl.addEventListener("click", () => { ... });: This line adds a click event listener to the button element specified by btnEl. When the button is clicked, the provided callback function is executed.

// if (selectedRating !== "") { ... }: This line checks if a rating has been selected. If selectedRating is not an empty string (i.e., a rating has been selected), the code inside the if block is executed.

// containerEl.innerHTML = ... ;: This line replaces the content of the element specified by containerEl with the specified HTML string. It creates a dynamic message that includes the selected rating.

// function removeActive() { ... }: This code block defines the removeActive() function, which removes the "active" class from all rating elements. It iterates over the ratingEls NodeList and removes the class from each element.

// Overall, this code sets up event listeners for rating elements and a button. When a rating is clicked, it gets marked as "active" visually, and the selected rating is stored in the selectedRating variable. When the button is clicked, it checks if a rating has been selected, and if so, it dynamically updates the content of a container element with a thank you message and the selected rating.





