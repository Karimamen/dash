let text = document.querySelector(".text");
let bt = document.querySelector(".bt");
console.log(text);

let p =
  "hello we are a frontend developer we are creat a websites and applecations we are a very strong team and we have a big experines.";
// text.textContent = "dhf";
i = 0;
bt.onclick = function () {
  time = setInterval(() => {
    bt.style.cssText = "transform:scale(0)";
    text.style.cssText = "transform: scale(1); opacity: 1;  padding: 30px; ";
    text.textContent += p[i];
    i++;
    if (i > p.length - 1) {
      clearInterval(time);
      // text.style.cssText = "padding: 0; transform: scale(0); height: 0;";
      // bt.style.display = "none";
      // text.textContent = "";
    }
  }, 150);
};
