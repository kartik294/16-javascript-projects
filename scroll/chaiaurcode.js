const indicator = document.querySelector(".progress");

// Function to update scroll indicator
function updateScrollIndicator() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const progress = (scrolled / (fullHeight - windowHeight)) * 100;

  // Update the width of the indicator based on the scroll progress
  indicator.style.width = `${progress}%`;
}

// Add event listener for scroll event
window.addEventListener("scroll", updateScrollIndicator);

// Call the function initially to set the initial indicator width
updateScrollIndicator();
