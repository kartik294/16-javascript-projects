const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = [
  "Wonderful",
  "Amazing",
  "Brilliant",
  "Fantastic",
  "Incredible",
  "Marvelous",
  "Splendid",
  "Terrific",
  "Awesome",
  "Extraordinary",
];

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1500);
});

setInterval(() => {
  cursor.classList.toggle("invisible");
}, 400);
