$(document).ready(function(){

	$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen').toggleClass('is-visible');
  });
});


$('.five_sl').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
            	dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

$('.article_s_sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
          	dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
          	dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
            	dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

$('.index_t_sl').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });



(function($){
  function floatLabel(inputType){
    $(inputType).each(function(){
      var $this = $(this);
      // on focus add cladd active to label
      $this.focus(function(){
        $this.next().addClass("active");
      });
      //on blur check field and remove class if needed
      $this.blur(function(){
        if($this.val() === '' || $this.val() === 'blank'){
          $this.next().removeClass();
        }
      });
    });
  }
  // just add a class of "floatLabel to the input field!"
  floatLabel(".floatLabel");
})(jQuery);



});



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});




let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));