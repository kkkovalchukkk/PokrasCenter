const popupWindow = document.querySelector("#popup");
const popup = popupWindow.querySelector(".popup");
const popupWindowCase = document.querySelector("#popup-case");
const closePopupBtns = document.querySelectorAll(".popup-window__close-popup-btn");
const popupTogglerBtn = document.querySelector(".header__menu-item-btn");
const classNamePopupWindowHidden = "popup-window--hidden";
const cardPopupToggleBtns = document.querySelectorAll(".work-card__btn");

function offBody() {
  document.body.style.overflow = "hidden";
}

function onBody() {
  document.body.style.overflow = "initial";
}

function showPopup(popup) {
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

popupTogglerBtn.addEventListener("click", () => showPopup(popupWindow));

closePopupBtns.forEach((btn) => btn.addEventListener("click", (e) => hidePopup(e.target.closest(".popup-window"))));

cardPopupToggleBtns.forEach((btn) => btn.addEventListener("click", () => showPopup(popupWindowCase)));
