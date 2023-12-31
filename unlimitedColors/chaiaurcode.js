document.addEventListener("DOMContentLoaded", function () {
  let intervalId;

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  document.getElementById("start").addEventListener("click", function () {
    intervalId = setInterval(changeBackgroundColor, 1000);
  });

  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(intervalId);
  });
});
