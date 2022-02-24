const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function () {
  // This is a way to solve
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }

  // This is another way
  links.classList.toggle("show-links");
});
