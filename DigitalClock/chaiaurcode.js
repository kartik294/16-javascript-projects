document.addEventListener("DOMContentLoaded", function () {
  function updateClock() {
    const clock = document.getElementById("clock");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedHours = String(hours).padStart("2", "0");
    const formattedMinutes = String(minutes).padStart("2", "0");
    const formattedSeconds = String(seconds).padStart("2", "0");
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    clock.textContent = timeString;
  }

  setInterval(updateClock, 1000);

  updateClock();
});
