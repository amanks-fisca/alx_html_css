document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.getElementById("navbarToggler");
  const menu = document.getElementById("navbarMenu");

  toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
