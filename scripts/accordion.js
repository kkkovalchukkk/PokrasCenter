window.addEventListener("DOMContentLoaded", () => {
  const accordionMenu = document.querySelector(".question-section__accordion-menu");
  const accordionMenuItem = document.querySelectorAll(".question-section__accordion-item");

  accordionMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
      const classname = "question-section__accordion-item--opened";
      document.querySelector("." + classname)?.classList.remove(classname);
      item.classList.add(classname);
    });
  });
});
