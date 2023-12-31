document.addEventListener("DOMContentLoaded", function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
  let guessesRemaining = 10;
  const guesses = [];

  const form = document.querySelector(".form");
  const guessField = document.getElementById("guessField");
  const guessesText = document.querySelector(".guesses");
  const lastResult = document.querySelector(".lastResult");
  const lowOrHi = document.querySelector(".lowOrHi");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const guess = parseInt(guessField.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }

    guesses.push(guess);
    guessesText.textContent = guesses.join(", ");

    if (guess === randomNumber) {
      lastResult.textContent =
        "Congratulations! You guessed the correct number!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else {
      if (guessesRemaining === 0) {
        lastResult.textContent = "Game Over! The number was " + randomNumber;
        setGameOver();
      } else {
        lastResult.textContent = "Wrong guess!";
        lastResult.style.backgroundColor = "red";
        if (guess < randomNumber) {
          lowOrHi.textContent = "Last guess was too low!";
        } else if (guess > randomNumber) {
          lowOrHi.textContent = "Last guess was too high!";
        }
        guessesRemaining--;
        document.querySelector(".guesses").textContent = guessesRemaining;
        guessField.value = "";
      }
    }
  });

  function setGameOver() {
    guessField.disabled = true;
    document.getElementById("subt").disabled = true;
  }
});
