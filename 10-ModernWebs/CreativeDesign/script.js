document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // rotating btn
    btn.classList.toggle("change");
    // stoy div with is sibling of btn
    btn.nextElementSibling.classList.toggle("change");
  });
});
