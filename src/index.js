import "./styles.css";

//https://www.youtube.com/watch?v=xEZ2tgp2FVw

//https://github.com/vj98/Frontend-Machine-Coding/blob/main/rating-component/index.js

const starContainer = document.getElementById("start-container");

const stars = document.querySelectorAll(".star");
console.log(stars);

let currentClickedIndex = -1;

//event bubble concept
starContainer.addEventListener("click", function (e) {
  console.log(e.target.dataset.index);
  currentClickedIndex = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("active");
  }

  for (let i = 0; i < currentClickedIndex; i++) {
    stars[i].classList.add("active");
  }
  console.log(stars);

  document.getElementById(
    "count"
  ).innerText = `Rating Count: ${currentClickedIndex}`;
});

starContainer.addEventListener("mouseover", function (e) {
  let curIndex = e.target.dataset.index;
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("active");
  }

  for (let i = 0; i < curIndex; i++) {
    stars[i].classList.add("active");
  }
});

starContainer.addEventListener("mouseout", function (e) {
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("active");
  }

  for (let i = 0; i < currentClickedIndex; i++) {
    stars[i].classList.add("active");
  }
});
