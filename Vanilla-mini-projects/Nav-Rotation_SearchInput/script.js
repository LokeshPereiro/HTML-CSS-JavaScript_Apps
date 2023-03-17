const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));

close.addEventListener("click", () => container.classList.remove("show-nav"));

// Show-Hide Search Input
const searchDiv = document.querySelector(".search-container");
const btn = document.querySelector(".search-btn");
const inputField = document.querySelector("input");

btn.addEventListener("click", () => {
  searchDiv.classList.toggle("active");
  inputField.focus();
});
