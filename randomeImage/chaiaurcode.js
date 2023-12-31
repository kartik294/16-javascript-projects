const button = document.querySelector("button"); // Selecting button element directly
const content = document.querySelector(".content");

async function fetchRandomImages() {
  try {
    const response = await fetch("https://source.unsplash.com/random");
    const imageUrl = response.url;
    const img = document.createElement("img");
    img.src = imageUrl;
    content.appendChild(img);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

button.addEventListener("click", fetchRandomImages); // Changed function name to fetchRandomImages
