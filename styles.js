const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.children.length - 1 : slideIndex - 1;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.children.length - 1) ? 0 : slideIndex + 1;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
