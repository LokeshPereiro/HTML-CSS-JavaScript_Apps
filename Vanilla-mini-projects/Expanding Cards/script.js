const myCards = document.querySelectorAll(".card");

myCards.forEach((card) => {
  card.addEventListener("click", () => {
    //llamo a ejecutar, quitar la clase active
    removeActiveClasses();
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  myCards.forEach((card) => {
    card.classList.remove("active");
  });
}
