let elem = document.getElementById("boxa");
console.log(elem);
// elem.onclick = () => {
//   alert("된다 !");
// };
elem.onclick = () => {
  elem.classList.toggle("box--clicked");
};
