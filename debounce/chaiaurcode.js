const userInput = document.getElementById("user-input");
const userCard = document.getElementById("user-card");

let debounceTimer;

userInput.addEventListener("input", function (event) {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const query = event.target.value.trim();
    if (query.length > 0) {
      try {
        const response = await fetch(
          `https://api.example.com/users?q=${query}`
        );
        const userData = await response.json();

        // Display user information
        if (userData) {
          const { name, username, email } = userData;
          userCard.innerHTML = `
            <h2>${name}</h2>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
          `;
          userCard.style.display = "block";
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        userCard.innerHTML = "Failed to fetch user data. Please try again.";
        userCard.style.display = "block";
      }
    } else {
      // If the input is empty, hide the user card
      userCard.style.display = "none";
    }
  }, 500); // Debounce time in milliseconds (adjust as needed)
});
