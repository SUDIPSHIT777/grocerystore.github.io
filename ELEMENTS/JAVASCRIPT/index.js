class Carousel {
  constructor() {
    this.slider = document.getElementById("slider");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");

    this.cards = document.querySelectorAll(".card");
    this.currentSlide = 0;
    this.cardsPerView = this.getCardsPerView();
    this.totalSlides = Math.max(0, this.cards.length - this.cardsPerView);

    this.init();
    this.updateButtons();
  }

  getCardsPerView() {
    const containerWidth = this.slider.parentElement.clientWidth;
    const cardWidth = 150;
    return Math.floor((containerWidth * 1) / cardWidth);
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.slider.addEventListener("mouseleave", () => {
      if (isMouseDragging) {
        isMouseDragging = false;
        this.slider.style.cursor = "grab";
      }
    });
  }

  updateSlider() {
    const cardWidth = 100;
    const translateX = -this.currentSlide * cardWidth;
    this.slider.style.transform = `translateX(${translateX}px)`;
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.currentSlide++;
      this.updateSlider();
      this.updateButtons();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlider();
      this.updateButtons();
    }
  }

  updateButtons() {
    this.prevBtn.disabled = this.currentSlide === 0;
    this.nextBtn.disabled = this.currentSlide === this.totalSlides;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

// New Slider//

const slider = document.getElementById("T-slider");
const prevBtn = document.getElementById("pbtn");
const nextBtn = document.getElementById("nbtn");
const cards = document.querySelectorAll(".T-card");

let currentIndex = 0;
const cardWidth = 50;

function updateSlider() {
  const translateX = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
