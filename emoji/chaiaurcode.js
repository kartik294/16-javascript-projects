const emojiElement = document.getElementById("emoji");

function getRandomEmoji() {
  const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "👀",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
  ];

  return emojis[Math.floor(Math.random() * emojis.length)];
}

emojiElement.addEventListener("mouseover", () => {
  emojiElement.textContent = getRandomEmoji();
  emojiElement.style.filter = "grayscale(0)";
});

emojiElement.addEventListener("mouseout", () => {
  emojiElement.textContent = getRandomEmoji();
  emojiElement.style.filter = "grayscale(1)";
});
