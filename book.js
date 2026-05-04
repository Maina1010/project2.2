const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll(".book");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function () {
  let value = searchInput.value.toLowerCase();
  let visible = 0;

  books.forEach(book => {
    let text = book.innerText.toLowerCase();

    if (text.includes(value)) {
      book.style.display = "inline-block";
      visible++;
    } else {
      book.style.display = "none";
    }
  });

  if (visible === 0) {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
  }
});

function openBook(name) {
  window.location.href = name + ".html";
}