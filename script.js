let headerBurgerBtn = document.querySelector(".header__burger-btn");
let headerMenu = document.querySelector(".header__menu");

headerBurgerBtn.addEventListener("click", function () {
  headerBurgerBtn.classList.toggle("active");
  headerMenu.classList.toggle("active");
});
let email = document.querySelector(".subscription-email");

form.onsubmit = function (evt) {
  evt.preventDefault();
  message.textContent = email.value;
};