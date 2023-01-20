const menu = document.querySelector(".navbar-nav");
const burger = document.querySelector("#hamburger");

burger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

// klik window untuk menghilangkan navbar

document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
