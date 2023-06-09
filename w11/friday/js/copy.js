// let boxes = document.querySelector("#box2");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);

boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("boxSelected");
  };
});
