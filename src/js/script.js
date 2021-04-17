$(document).ready(function(){
    $('.carusel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="src/icon/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="src/icon/right.png"></button>',
        rresponsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                    
                }
              }
        ]
    

    });
  });