window.addEventListener("DOMContentLoaded", () => {
  const accordionMenu = document.querySelector(".question-section__accordion-menu");
  const accordionMenuItem = document.querySelectorAll(".question-section__accordion-item");
  const tables = document.querySelectorAll(".price-section__table-rows");
  const tablesNavigation = document.querySelector(".price-section__tab-list");
  const tablesNavigationBtn = tablesNavigation.querySelectorAll(".price-section__tab");
  const tableMoreBtn = document.querySelector(".price-section__table-more-btn");

  accordionMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
      const classname = "question-section__accordion-item--opened";
      if (item.classList.contains(classname)) {
        item.classList.remove(classname);
        return;
      }
      document.querySelector("." + classname)?.classList.remove(classname);
      item.classList.add(classname);
    });
  });

  tablesNavigationBtn.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      tableMoreBtn.textContent = "показать ещё";
      document.querySelector(".price-section__table-rows--position-active").classList.remove("price-section__table-rows--open");
      document.querySelector(".price-section__table-rows--position-active").classList.remove("price-section__table-rows--active");
      tablesNavigationBtn.forEach((btn) => btn.classList.remove("price-section__tab--active"));
      btn.classList.add("price-section__tab--active");
      tables.forEach((tbl) => {
        tbl.classList.remove("price-section__table-rows--position-active");
        tbl.style.transform = `none`;
      });
      tables[idx].classList.add("price-section__table-rows--position-active");
      tables[idx].style.transform = `translateX(-${idx}00.5%)`;
    });
  });

  tableMoreBtn.addEventListener("click", (e) => {
    if (e.target.textContent == "показать ещё") {
      e.target.textContent = "скрыть";
      document.querySelector(".price-section__table-rows--position-active").classList.add("price-section__table-rows--open");
    } else {
      e.target.textContent = "показать ещё";
      document.querySelector(".price-section__table-rows--position-active").classList.remove("price-section__table-rows--open");
    }
  });
});
