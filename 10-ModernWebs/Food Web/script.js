/* SlideShow--Menu  Iconos by adding class 'change'*/
document.querySelector(".menu").addEventListener("click", () => {
  // We have 2 items with target class (navbar and menu)
  document.querySelectorAll(".target").forEach((item) => {
    // Every time we click on menu class 'change' is added and removed
    item.classList.toggle("change");
  });
});

// ## Section 1 icons/food transition ##
// --> Goal: We want to show different icons 1 after another <--

// Select all icons with the class (.section-1-icons i)
const allIcons = document.querySelectorAll(".section-1-icons i");
// We need to give some values otherwise setInterval will keep running with null data
let i = 1;

setInterval(() => {
  i++;
  // Select icon with class 'change' and remove it when starting the cycle
  //  seltInterval() will add and remove class and will continue doing, so we need to stop it and restart de cyle
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  // This scenario happens when there is no more elements to deal with, when means, we have exceeded the current length
  if (i > allIcons.length) {
    // When there is no more elements.. then we have to restart the cyle
    allIcons[0].classList.add("change");
    // And give our 'i' variable value of 1 so that the [ if condition ] always be true
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 1000);

//  --> Our iterable (i) variable plays an important role as it allows us to restart the cycle and iterate through the icons container infinitely
