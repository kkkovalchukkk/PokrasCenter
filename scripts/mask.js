$(document).ready(function () {
  $(".phone").mask("+7 000-000-00-00");
});

document.querySelectorAll(".phone").forEach((inp) => inp.addEventListener("focus", (e) => (e.target.value = "+7")));
