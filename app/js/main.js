$(function() {
  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('html').toggleClass('lock');
  });

  $(document).on('click', function() {
    if(!$(e.target).closest('.menu__list, .menu__btn').length) {
    $('.menu__list').removeClassClass('menu__list--active');
    $('.menu__btn').removeClassClass('menu__btn--active');
    $('html').removeClassClass('lock');
    }
  });

  $(".menu a").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);

  });

    $(".star").rateYo({
    starWidth: "20px",
    normalFill: "#ccccce",
    ratedFill: "#5d5fef",
    readOnly: true,
    starSvg: '<svg width="20.000000" height="19.000000" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Star 1" d="M9.21 0.56C9.46 -0.19 10.53 -0.19 10.78 0.56L12.57 6.06C12.68 6.4 13 6.63 13.35 6.63L19.17 6.63C19.97 6.63 20.3 7.64 19.66 8.1L14.95 11.51C14.66 11.71 14.54 12.08 14.65 12.42L16.45 17.92C16.69 18.68 15.83 19.3 15.19 18.84L10.48 15.43C10.19 15.23 9.8 15.23 9.51 15.43L4.8 18.84C4.16 19.3 3.3 18.68 3.54 17.92L5.34 12.42C5.45 12.08 5.33 11.71 5.04 11.51L0.33 8.1C-0.31 7.64 0.02 6.63 0.82 6.63L6.64 6.63C6.99 6.63 7.31 6.4 7.42 6.06L9.21 0.56Z" fill="#5D5FEF" fill-opacity="1.000000" fill-rule="nonzero"/></svg>'
  });

    $('.reviews__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  /* centerMode: true, */
  /* centerPadding: '60px', */
  autoplaySpeed: 5000,
  infinite: true,
  appendArrows:'.slider-arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle r="30.000000" transform="matrix(-1 0 0 1 30 30)" fill="" fill-opacity="1.000000"/><circle r="29.000000" transform="matrix(-1 0 0 1 30 30)" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/><path id="Vector 1" d="M20 30C22.35 30 29 28.92 29 21M20 30C23.3 30 29 31.8 29 39M20 30L40 30" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="30.000000" cy="30.000000" r="30.000000" fill="" fill-opacity="1.000000"/><circle cx="30.000000" cy="30.000000" r="29.000000" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/><path id="Vector 1" d="M40 30C37.64 30 31 28.92 31 21M40 30C36.7 30 31 31.8 31 39M40 30L20 30" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/></svg></button>'
});

  $('.top-slider__wrapper').slick({
  centerMode: true,
  variableWidth: true,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplaySpeed: 5000,
  infinite: true,
  appendArrows: '.top-slider__arrows',
  prevArrow: '<button type="button" class="slick-prev"><svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle r="30.000000" transform="matrix(-1 0 0 1 30 30)" fill="" fill-opacity="1.000000"/><circle r="29.000000" transform="matrix(-1 0 0 1 30 30)" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/><path id="Vector 1" d="M20 30C22.35 30 29 28.92 29 21M20 30C23.3 30 29 31.8 29 39M20 30L40 30" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="60.000000" height="60.000000" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="30.000000" cy="30.000000" r="30.000000" fill="" fill-opacity="1.000000"/><circle cx="30.000000" cy="30.000000" r="29.000000" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/><path id="Vector 1" d="M40 30C37.64 30 31 28.92 31 21M40 30C36.7 30 31 31.8 31 39M40 30L20 30" stroke="" stroke-opacity="1.000000" stroke-width="2.000000"/></svg></button>',
  responsive: [
  {
    breakpoint: 768,
    settings: {
      variableWidth: false,
    }
  },
  {
    breakpoint: 460,
    settings: {
      centerPadding: '30px',
      variableWidth: false,
    }
  },
]
});

});