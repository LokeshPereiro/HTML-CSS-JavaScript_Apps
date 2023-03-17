// target div with class '.card' [NodeList]
//[ NodeList --> stand for children of parent element
const myCards = document.querySelectorAll(".card");

/* 
- Cons of doing with only toogle method(), you can actually open and close all cards by clicking on them, this means that if you don't close them they will  be active
- User has more control 
*/

// myCards.forEach((card) => {
//   card.addEventListener("click", () => {
//     // console.log(card);
//     card.classList.toggle("active");
//   });
// });

// ------------------------ 2º option ------------------------

/* 
However, with out toggle method(), we can  open  all cards if you want but only one card will be active,  rest has no active class 
- User has less control 
*/

myCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Before adding active class, we need to delete 'active class to all  NodeList' so that we can click on them and add it again
    removeActiveClasses();

    card.classList.add("active");
  });
});

function removeActiveClasses() {
  myCards.forEach((card) => {
    card.classList.remove("active");
  });
}

// Progres Bar
const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currActiveCircle = 1;

nextBtn.addEventListener("click", () => {
  currActiveCircle++;
  // console.log(currActiveCircle);
  if (currActiveCircle > circles.length) {
    // Set currActiveCircle length equal to circles.length
    currActiveCircle = circles.length;
  }
  updateDom();
});

prevBtn.addEventListener("click", () => {
  currActiveCircle--;
  // console.log(currActiveCircle);
  if (currActiveCircle < 1) {
    currActiveCircle = 1;
  }
  updateDom();
});

function updateDom() {
  circles.forEach((circle, idx) => {
    idx < currActiveCircle
      ? circle.classList.add("active-circle")
      : circle.classList.remove("active-circle");

    // if (idx < currActiveCircle) {
    //   circle.classList.add("active-circle");
    // } else {
    //   circle.classList.remove("active-circle");
    // }

    const activesCircles = document.querySelectorAll(".active-circle");
    // We need to substract 1 from each div length, otherwise it will calculate total progressBar length not circle nodes
    progressBar.style.width =
      ((activesCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  });

  if (currActiveCircle === 1) {
    prevBtn.disabled = true;
  } else if (currActiveCircle === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
