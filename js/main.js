document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
