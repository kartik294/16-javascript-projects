document.addEventListener("DOMContentLoaded", function () {
  const greyButton = document.getElementById("grey");
  const whiteButton = document.getElementById("white");
  const blueButton = document.getElementById("blue");
  const yellowButton = document.getElementById("yellow");

  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  greyButton.addEventListener("click", function () {
    changeBackgroundColor("grey");
  });

  whiteButton.addEventListener("click", function () {
    changeBackgroundColor("white");
  });

  blueButton.addEventListener("click", function () {
    changeBackgroundColor("blue");
  });

  yellowButton.addEventListener("click", function () {
    changeBackgroundColor("yellow");
  });
});
