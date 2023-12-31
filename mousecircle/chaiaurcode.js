// an array of 10 colors in hex value
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
];

const button = document.querySelector("button");
const paragraphs = document.querySelectorAll("p");
const cursor = document.querySelector(".cursor");

function changeCursorColor() {
  button.addEventListener("mouseover", () => {
    cursor.style.background = "blue";
  });

  button.addEventListener("mouseout", () => {
    cursor.style.background = "yellow";
  });
}

function changeCursorColorOnParagraphHover() {
  paragraphs.forEach((paragraph) => {
    paragraph.addEventListener("mouseover", () => {
      cursor.style.background = "green"; // Change cursor background color on paragraph hover
    });

    paragraph.addEventListener("mouseout", () => {
      cursor.style.background = "yellow"; // Reset cursor background color on paragraph mouseout
    });
  });
}

changeCursorColor();
changeCursorColorOnParagraphHover();
