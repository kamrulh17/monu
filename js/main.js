var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader-container").style.display = "none";
  // document.getElementById("myDiv").style.display = "block";
}

/* scroll to top btn */
var mybutton = document.getElementById("myBtn");
/* When the user scrolls down 20px from the top of the document, show the button */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/* When the user clicks on the button, scroll to the top of the document */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* toggler btn activation */
$(".toggler-btn").click(function(){
  $("nav").addClass("open-nav");
});
$(".cross").click(function(){
  $("nav").removeClass("open-nav");
});

/* --swiper slider -- */
var swiper = new Swiper(".mySwiper", {
    autoplayDisableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
    },
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
});
  /* swiper slider deactivate on mouse hover and then activate again */
  $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });

/*-- CounterUp --*/
$('.counter').counterUp({
    delay: 10,
    time: 2000,
});

var swiper = new Swiper(".partnerSwiper", {
    // Default parameters
    autoplayDisableOnInteraction: false,
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    speed: 1000,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 5,
      }
    }
  })

    /* swiper slider deactivate on mouse hover and then activate again */
    $(".swiper-container").hover(function() {
      (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });
