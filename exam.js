const examBtn = document.getElementById("examBtn");
const examPanel = document.getElementById("examPanel");

examBtn.addEventListener("click", (e) => {
  e.preventDefault();
  examPanel.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!examPanel.contains(e.target) && e.target !== examBtn) {
    examPanel.classList.remove("active");
  }
});
