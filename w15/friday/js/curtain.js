const curtain = document.querySelector(".curtain");

curtain.addEventListener("animationend", (e) => {
  curtain.style.display = "none";
});
