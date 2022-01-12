const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
  });
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log(link);
    navlinks.classList.toggle("open");
  });
});
