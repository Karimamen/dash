let number = document.querySelectorAll(".number");

number.forEach((e) => {
  let time = setInterval(() => {
    // e.textContent = e.dataset.viwes;
    e.textContent++;
    if (e.textContent == e.dataset.viwes) {
      clearInterval(time);
    }
  }, 2000 / e.dataset.viwes);
});
