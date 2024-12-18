document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 1,
  });

  // Next and previous buttons
  const nextButton = document.querySelector('#nextbt');
  const prevButton = document.querySelector('#prevbt');

  // Click event for next button
  nextButton.addEventListener('click', function() {
    swiper.slideNext();
  });

  // Click event for prev button
  prevButton.addEventListener('click', function() {
    swiper.slidePrev();
  });

  // Image and text lists for dynamic content
  const imageList = [
    "/assets/p1.png",  // Image for slide 1
    "/assets/p2.png",  // Image for slide 2
    "/assets/p3.png",  // Image for slide 3
  ];

  const textList = [
    "Anh Lee",  // Text for slide 1
    "Matvalina", // Text for slide 2
    "Megan Ruth", // Text for slide 3
  ];

  const dynamicImage = document.getElementById('dynamic-image');
  const dynamicText = document.getElementById('dynamic-text');

  // Function to update dynamic content
  function updateDynamicContent(index) {
    dynamicImage.src = imageList[index];
    dynamicText.textContent = textList[index];
  }

  // Update dynamic content when the slide changes
  swiper.on('slideChange', () => {
    const activeIndex = swiper.realIndex; // Get the real active slide index
    updateDynamicContent(activeIndex);
  });

  // Initial dynamic content update
  updateDynamicContent(swiper.realIndex);
});