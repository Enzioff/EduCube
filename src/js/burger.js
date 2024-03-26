document.addEventListener("DOMContentLoaded", () => {
  initBurger();
});

const initBurger = () => {
  const burger = document.querySelector("[data-burger]");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!burger) return;
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
};
