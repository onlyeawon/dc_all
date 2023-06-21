const audio = document.querySelector("audio");
audio.addEventListener("canplaythrough", () => {
  audio.volume = 0.5;
  audio.loop = true;
  audio.play();
});
