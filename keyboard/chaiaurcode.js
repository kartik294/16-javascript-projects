document.addEventListener("DOMContentLoaded", function () {
  const insertDiv = document.getElementById("insert");
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    const keyCode = event.code;
    insertDiv.innerHTML = `
        
        <div class="key">
        You pressed:<span class="color">${key}</span>

        </br>
        Key Code:<span class="color">${keyCode}</span>
        </div>
        
        
        `;
  });
});
