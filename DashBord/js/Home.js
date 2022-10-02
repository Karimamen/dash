let togel = document.querySelector(".fa-bars");
console.log(togel);

let aside = document.querySelector("aside");
let asideA = document.querySelectorAll("aside a");
console.log(asideA);
let asideS = document.querySelectorAll("aside a span");
console.log(asideS);

togel.onclick = function () {
  aside.classList.toggle("close");
};

asideA.forEach((e) => {
  e.onclick = function () {
    asideA.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  };
});

span = document.querySelectorAll(".one2 div span");
console.log(span);

window.onload = function () {
  span.forEach((e) => {
    setTimeout(() => {
      console.log(e);
      e.style.cssText = "transform: translateX(0%)";
    }, 1000);
  });
};
//
// let change = document.querySelectorAll(".change i");

// change.forEach((el) => {
//   el.onclick = function () {
//     localStorage.setItem("color", el.dataset.color);
//     document.body.style.background = el.dataset.color;
//   };
//   if (localStorage.getItem("color")) {
//     document.body.style.background = localStorage.getItem("color");
//   }
// });
