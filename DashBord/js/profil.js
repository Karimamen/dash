let box1 = document.querySelector(".box1");
let toggle = document.querySelector(".toggle");
console.log(toggle);

toggle.onclick = function () {
  box1.classList.toggle("active");
};

let skills = document.querySelectorAll(".skills span");
console.log(skills);
let result = document.querySelectorAll(".result div");
console.log(result);

skills.forEach((e) => {
  e.onclick = function () {
    skills.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    result.forEach((e) => {
      e.style.cssText = "opacity: 0";
    });
    console.log(e.dataset.ln);
    document.querySelector(e.dataset.ln).style.cssText =
      "transform: scale(1); opacity: 1; transition-delay: .5s;";
  };
});
