// document.addEventListener("DOMContentLoaded", function () {
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

  const nextButton = document.querySelector('#nextbt');
  const prevButton = document.querySelector('#prevbt');

  nextButton.addEventListener('click', function() {
    swiper.slideNext();
  });

  prevButton.addEventListener('click', function() {
    swiper.slidePrev();
  });

  const imageList = [
    "/assets/p1.png",
    "/assets/p2.png",
    "/assets/p3.png"
  ];

  const textList = [
    "Anh Lee",
    "Matvalina",
    "Megan ruth"
  ];

  const dynamicImage = document.getElementById('dynamic-image');
  const dynamicText = document.getElementById('dynamic-text');

  function updateDynamicContent(index) {
    dynamicImage.src = imageList[index];
    dynamicText.textContent = textList[index];
  }

  swiper.on('slideChange', () => {
    const activeIndex = swiper.realIndex;
    updateDynamicContent(activeIndex);
  });

  updateDynamicContent(swiper.realIndex);
// });
