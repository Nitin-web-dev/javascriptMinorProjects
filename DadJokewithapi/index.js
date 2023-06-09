// import the element
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


// this is api key for api
const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

// header for fetch api and method
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};


// url for api call
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function for get data
async function getJoke() {
  try {
    // the pera text and button text change to updating and loading..
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true; // disbale button for clicking again
    btnEl.innerText = "Loading...";

    // get the response in await 
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false; // enable button for clicking 
    btnEl.innerText = "Tell me a joke";  // button text from loading.. to msg text

    // set the joke to peragraph
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
