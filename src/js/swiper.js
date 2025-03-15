function initSwiper(slidesPerView, spaceBetween, autoplayDelay) {
  return new Swiper('.swiper-about', {
    direction: 'horizontal',
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 1000,
        loop: false,
        mousewheel: false,
        keyboard: false,
      },
    },
  });
}

function handleMediaQueries() {
  let swiper = initSwiper(1, 0, 5000);

  const breakpointChecker = () => {
    if (window.innerWidth >= 1200) {
      if (swiper) swiper.destroy(true, true);
      swiper = initSwiper(4, 24, 0);
    } else {
      if (swiper) swiper.destroy(true, true);
      swiper = initSwiper(1, 0, 5000);
    }
  };

  window.addEventListener('resize', breakpointChecker);
}

handleMediaQueries();
