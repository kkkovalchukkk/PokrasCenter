const swiper = new Swiper(".review-section__swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".review-section__swiper-pagination",
  },
  navigation: {
    nextEl: ".reviews-section__swiper-next-btn",
    prevEl: ".reviews-section__swiper-prev-btn",
  },
});
