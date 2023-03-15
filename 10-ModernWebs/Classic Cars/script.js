// Listen to click on menu icon
document.querySelector(".menu").addEventListener("click", () => {
  // Now get all 'target' named elements (section), and then add them toggle class 'change' for rotation
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

//Same logic as prev
document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      // We do this, by default all sections have change class due to click on menu btn, so apart from deleting this class when clicked on menu btn, now we have possiblities to do same on sections elements
      //
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
