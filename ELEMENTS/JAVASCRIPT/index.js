const slide = document.getElementById("slider");
const prvBtn = document.getElementById("prevBtn");
const nexBtn = document.getElementById("nextBtn");
const card = document.querySelectorAll(".card");
let cdIndex = 0;
const cdWidth = 50;
function upSlider() {
  const translateX = -cdIndex * cdWidth;
  slide.style.transform = `translateX(${translateX}px)`;
}

nexBtn.addEventListener("click", () => {
  if (cdIndex < card.length - 1) {
    cdIndex++;
    upSlider();
  }
});

prvBtn.addEventListener("click", () => {
  if (cdIndex > 0) {
    cdIndex--;
    upSlider();
  }
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
