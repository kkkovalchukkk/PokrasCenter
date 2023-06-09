const popupWindow = document.querySelector("#popup");
const popup = popupWindow.querySelector(".popup");
const popupHeading = document.querySelector(".popup-window__popup-heading");
const popupWindowCase = document.querySelector("#popup-case");
const closePopupBtns = document.querySelectorAll(".popup-window__close-popup-btn");
const popupTogglerBtn = document.querySelector(".header__menu-item-btn");
const classNamePopupWindowHidden = "popup-window--hidden";
const cardPopupToggleBtns = document.querySelectorAll(".work-card__btn");
const promoSectionBtn = document.querySelector(".promo-section__btn");
const serviceCardLinks = document.querySelectorAll(".service-list-card__link");
const reqSectionBtn = document.querySelector(".req-section__btn--blue");
const offersPopupToggleBtn = document.querySelectorAll(".footer-mailn-form__submit-btn");

const menuWindow = document.querySelector("#menu-window");
const burgerBtn = document.querySelector(".header__burger-btn-toggler");
const popupToggleBurgerBtn = document.querySelector(".side-menu__menu-item-btn");

function offBody() {
  document.body.style.overflow = "hidden";
}

function onBody() {
  document.body.style.overflow = "initial";
}

function showPopup(e, popup) {
  if (e && e.target.dataset.caption) {
    popupHeading.textContent = e.target.dataset.caption;
  } else {
    popupHeading.textContent = "Задайте нам вопрос";
  }
  popup.classList.remove(classNamePopupWindowHidden);
  window.addEventListener("keydown", closePopupByEsc);
  window.addEventListener("click", closePopupByClickOnOverlay);
  offBody();
}

function hidePopup(popup) {
  popup.classList.add(classNamePopupWindowHidden);
  window.removeEventListener("keydown", closePopupByEsc);
  window.removeEventListener("click", closePopupByClickOnOverlay);
  onBody();
}

function closePopupByEsc(e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".popup-window").forEach((w) => hidePopup(w));
  }
}

function closePopupByClickOnOverlay(e) {
  if (e.target.className === "popup-window") {
    hidePopup(e.target.closest(".popup-window"));
  }
}

popupTogglerBtn.addEventListener("click", (e) => showPopup(e, popupWindow));

promoSectionBtn.addEventListener("click", (e) => showPopup(e, popupWindow));

reqSectionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showPopup(null, popupWindow);
});

closePopupBtns.forEach((btn) => btn.addEventListener("click", (e) => hidePopup(e.target.closest(".popup-window"))));

cardPopupToggleBtns.forEach((btn) => btn.addEventListener("click", (e) => showPopup(e, popupWindowCase)));

serviceCardLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPopup(null, popupWindowCase);
  })
);

offersPopupToggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".popup-window").forEach((popup) => {
      hidePopup(popup);
    });
    showPopup(null, popupWindow);
  });
});

burgerBtn.addEventListener("input", (e) => {
  if (menuWindow.classList.contains("menu-window--hidden")) {
    menuWindow.classList.remove("menu-window--hidden");
    offBody();
  } else {
    onBody();
    menuWindow.classList.add("menu-window--hidden");
  }
});

popupToggleBurgerBtn.addEventListener("click", () => {
  menuWindow.classList.add("menu-window--hidden");
  burgerBtn.checked = false;
  showPopup(null, popupWindow);
});
