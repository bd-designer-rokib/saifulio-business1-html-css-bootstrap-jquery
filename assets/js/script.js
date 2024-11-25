$(function () {
  // & Mobile menu Toggle
  $(".mobile-menu-toggle").click(function () {
    $(".mobile-menu").slideToggle();
  });

  // & Submenu
  $(".mobile-menu nav ul li.has-submenu").click(function () {
    $(this).children("ul").slideToggle();
    //  $(".mobile-menu nav ul li.has-submenu ul").slideToggle();
  });

  // & video popup
  $(".video-btn a").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });

  // & Counter UP
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  // & Fd-Slider
  $(".fd-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // & Wos js
  new WOW().init();
});
