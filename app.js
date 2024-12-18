// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Dynamic content lists
const imageList = [
  "https://iili.io/2MVQ8Xf.png", // Image for slide 1
  "https://iili.io/2MVZN4V.png", // Image for slide 2
  "https://iili.io/2MVtwts.png", // Image for slide 3
];
const textList = ["Anh Lee", "Matvalina", "Megan Ruth"];

// Update dynamic content
const dynamicImage = document.getElementById("dynamic-image");
const dynamicText = document.getElementById("dynamic-text");

function updateDynamicContent(index) {
  dynamicImage.src = imageList[index];
  dynamicText.textContent = textList[index];
}

// Update content when the slide changes
swiper.on("slideChange", () => {
  updateDynamicContent(swiper.realIndex);
});

// Initial content update
updateDynamicContent(swiper.realIndex);

// Button click handlers
window.prevButton = function () {
  swiper.slidePrev(200);
};

window.nextButton = function () {
  swiper.slideNext(200);
};
