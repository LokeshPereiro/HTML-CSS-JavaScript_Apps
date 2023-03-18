const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  //Basically we are going to write again labels, this means, we nned to create new element, divide into pieces each letter
  label.innerHTML = label.innerText //We have the inner text ('Email', 'Password')
    .split("") //This method helps us to cut each letter and put it into an array
    //   console.log(label);
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 60}ms">${letter}</span>`
    )
    .join(""); //It ruturn back agian full string (cuting 'comas')
});

// Sound Board
const soundHeading = document.querySelector(".sound-heading");

const sounds = ["Applause", "Boo", "Gasp", "Tada", "Victory", "Wrong"];
const emojis = ["👏", "👻", "😲", "🎉", "✌️", "⛔"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("play-btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    //sound bc our html id are exactly same
    document.getElementById(sound).play();
    soundHeading.innerHTML = sound;
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

// KeyCode
const inserts = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  inserts.innerHTML = `
 <div class="key">
      ${event.key === " " ? "Space" : event.key}
      <small>event.key</small>
 </div>
    
 <div class="key">
      ${event.keyCode}
        <small>event.keyCode</small>
 </div>

 <div class="key">
      ${event.code}
      <small>event.code</small>
 </div>
 `;
});
