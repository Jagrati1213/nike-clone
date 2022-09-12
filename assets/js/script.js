
$(document).ready(function () {
    console.log("ready!");  
    $('#shoes-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows:true,
        autoplay:true,
        speed: 300,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
            }
          }]
      }); 

      $('.gender-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        autoplay:true,
        dots:false,
        arrows:false,
        speed: 300,
        responsive: [
          {
            breakpoint:768,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              dots:true
            }
          }]
      });
});
AOS.init();
