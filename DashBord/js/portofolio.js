let li = document.querySelectorAll("ul li");
let content = document.querySelectorAll(".content a");
console.log(content);
li.forEach((e) => {
  e.onclick = function () {
    li.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    content.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelectorAll(this.dataset.img).forEach((e) => {
      e.style.display = "block";
    });
  };
});
