// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  slidesPerView: 1,
});

// Image and text lists for dynamic content
const imageList = [
  "https://iili.io/2MVQ8Xf.png", // Image for slide 1
  "https://iili.io/2MVZN4V.png", // Image for slide 2
  "https://iili.io/2MVtwts.png", // Image for slide 3
];

const textList = [
  "Anh Lee", // Text for slide 1
  "Matvalina", // Text for slide 2
  "Megan Ruth", // Text for slide 3
];

const dynamicImage = document.getElementById("dynamic-image");
const dynamicText = document.getElementById("dynamic-text");

// Function to update dynamic content
function updateDynamicContent(index) {
  dynamicImage.src = imageList[index];
  dynamicText.textContent = textList[index];
}

// Update dynamic content when the slide changes
swiper.on("slideChange", () => {
  const activeIndex = swiper.realIndex; // Get the real active slide index
  updateDynamicContent(activeIndex);
});

// Initial dynamic content update
updateDynamicContent(swiper.realIndex);

// Button click handlers
document
  .querySelector(".butt button:first-child")
  .addEventListener("click", () => {
    swiper.slidePrev(200);
  });

document
  .querySelector(".butt button:last-child")
  .addEventListener("click", () => {
    swiper.slideNext(200);
  });
