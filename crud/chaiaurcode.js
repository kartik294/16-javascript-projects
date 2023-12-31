const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  if (title === "" || author === "" || year === "") {
    alert("Please fill in all fields");
    return;
  }

  const bookItem = document.createElement("section");
  bookItem.classList.add("book-item");
  bookItem.innerHTML = `
    <div>${title}</div>
    <div>${author}</div>
    <div>${year}</div>
  `;

  bookList.appendChild(bookItem);

  // Display the book information directly on the browser
  const bookInfo = document.createElement("section");
  bookInfo.classList.add("book-info");
  bookInfo.innerHTML = `
    <div>Title: ${title}</div>
    <div>Author: ${author}</div>
    <div>Year: ${year}</div>
  `;
  document.body.appendChild(bookInfo);

  // Clear input fields after adding the book
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
});
