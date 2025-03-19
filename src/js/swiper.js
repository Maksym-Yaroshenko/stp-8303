const initSwiper = (selector, slidesPerView, spaceBetween, autoplayDelay) => {
  return new Swiper(selector, {
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
      el: `${selector} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView:
          selector === '.swiper-gallery'
            ? 1
            : selector === '.swiper-reviews'
            ? 3
            : 4,
        spaceBetween: selector === '.swiper-reviews' ? 50 : 24,
        speed: 1000,
        mousewheel: selector === '.swiper-about' ? false : true,
        keyboard: selector === '.swiper-about' ? false : true,
      },
    },
  });
};

const handleMediaQueries = () => {
  let swiperAbout = initSwiper('.swiper-about', 1, 24, 5000);
  let swiperGallery = initSwiper('.swiper-gallery', 1, 24, 5000);
  let swiperReviews = initSwiper('.swiper-reviews', 1, 24, 5000);

  const breakpointChecker = () => {
    swiperAbout.destroy(true, true);
    swiperGallery.destroy(true, true);
    swiperReviews.destroy(true, true);

    if (window.innerWidth >= 1200) {
      swiperAbout = initSwiper('.swiper-about', 4, 24, 5000);
      swiperGallery = initSwiper('.swiper-gallery', 1, 24, 5000);
      swiperReviews = initSwiper('.swiper-reviews', 3, 50, 5000);
    } else {
      swiperAbout = initSwiper('.swiper-about', 1, 24, 5000);
      swiperGallery = initSwiper('.swiper-gallery', 1, 24, 5000);
      swiperReviews = initSwiper('.swiper-reviews', 1, 24, 5000);
    }
  };

  window.addEventListener('resize', breakpointChecker);
};

handleMediaQueries();
