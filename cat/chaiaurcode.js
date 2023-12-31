const button = document.querySelector(".btn");
const container = document.querySelector(".container");

async function getRandomCatImage() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const imageUrl = data[0].url;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("random_cats");

    container.innerHTML = "";
    container.appendChild(img);
  } catch (error) {
    console.error("Error fetching cat image:", error);
    container.innerHTML = "Failed to fetch cat image. Please try again.";
  }
}

button.addEventListener("click", getRandomCatImage);
