const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const uppercaseBtn = document.querySelector(".uppercase");
const lowercaseBtn = document.querySelector(".lowercase");
const capitalizeBtn = document.querySelector(".capitalize");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

uppercaseBtn.addEventListener("click", function () {
  outputField.textContent = inputField.value.toUpperCase();
});

lowercaseBtn.addEventListener("click", function () {
  outputField.textContent = inputField.value.toLowerCase();
});

capitalizeBtn.addEventListener("click", function () {
  const words = inputField.value.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  outputField.textContent = capitalizedWords.join(" ");
});

boldBtn.addEventListener("click", function () {
  outputField.innerHTML = `<strong>${inputField.value}</strong>`;
});

italicBtn.addEventListener("click", function () {
  outputField.innerHTML = `<em>${inputField.value}</em>`;
});

underlineBtn.addEventListener("click", function () {
  outputField.innerHTML = `<u>${inputField.value}</u>`;
});
