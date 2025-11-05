const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 1;
const visibleCount = 3;

function updateCarousel() {
  const offset = (currentIndex - 1) * (100 / visibleCount);
  carousel.style.transform = `translateX(-${offset}%)`;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });
  leftArrow.classList.toggle("disabled", currentIndex === 0);
  rightArrow.classList.toggle("disabled", currentIndex === slides.length - 1);
}

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
rightArrow.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

updateCarousel();
