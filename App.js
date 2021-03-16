/** @format */

const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "Blue",
  "yellow",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

//do not use "tofixed()" method to roundup decimal values here.
// For example: It will treat 5.56 as 6, and 6 is out of index in our array
