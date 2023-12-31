const displayJoke = document.getElementById("display-joke");
const getJokeButton = document.getElementById("getJoke");

async function getChuckNorrisJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    displayJoke.textContent = data.value;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error);
    displayJoke.textContent = "Failed to fetch joke. Please try again.";
  }
}

getJokeButton.addEventListener("click", getChuckNorrisJoke);
