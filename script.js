// preloader

$('html').addClass('js');

$(window).on("load", function() {
  $("#loader-wrapper").fadeOut();
});

// body & home page fade-in

$(function() {
    $('body').removeClass('fade-in');
    $('.left-box').removeClass('fade-in');
    $('.right-box').removeClass('fade-in');
});

$('document').ready(function(){

  // navigation

  function scrolling(item){
    $('html, body').animate({
      scrollTop: item.offset().top
    }, (item.offset().top * 2)/3);
  };

  $('.about-link').on('click', function(event){
    event.preventDefault();
    scrolling($('#about'));
  });

  $('.calendar-link').on('click', function(event){
    event.preventDefault();
    scrolling($('#calendar'));
  });

  $('.actions-link').on('click', function(event){
    event.preventDefault();
    scrolling($('#actions'));
  });

  $('.partners-link').on('click', function(event){
    event.preventDefault();
    scrolling($('#partners'));
  });

  $('.contact-link').on('click', function(event){
    event.preventDefault();
    scrolling($('#contact'));
  });

// mini navigation (fixed top bar)

  $(window).on("scroll", function(e){
    if($(window).width() == parseInt($('div.overlay').css("width"))){
      $('div.overlay').toggleClass('closed');
      $('#hamburger-icon').toggleClass('active');
    }
    if($(window).scrollTop() > $(window).height()){
      $('div.mini-nav').css("position", "fixed");
    } else {
      $('div.mini-nav').css("position", "static");
    }
  });

  $('#hamburger-icon').click(function() {
    $('#hamburger-icon').toggleClass('active');
    $('div.overlay').toggleClass('closed');
    return false;
  });

  $('#myBtn').on('click', function(event){
    if($(window).width() == parseInt($('div.overlay').css("width"))){
      $('div.overlay').toggleClass('closed');
      $('#hamburger-icon').toggleClass('active');
      setTimeout(function(){
        var scroll = $(window).scrollTop();
        $('html, body').animate({
          scrollTop: 0
        }, scroll/2);
      }, 700);
    } else {
      var scroll = $(window).scrollTop();
      $('html, body').animate({
        scrollTop: 0
      }, scroll/2);
    }
  });

// rwd show/hide claim

  $(window).on('resize', function(e){
    if($('.claim').offset().top < $('.rotary-logo').offset().top + $('.rotary-logo').outerHeight() + 50){
      $('.claim').hide();
    } else if ($('.claim').offset().top > $('.rotary-logo').offset().top + $('.rotary-logo').outerHeight() + 50 ){
      $('.claim').show();
    }
  });

//show more buttons

  function showMore(toHide, toShowButton, chapter, textSlideUp, textSlideDown){
    toHide.hide();
    toShowButton.on("click", function(e){
      toShowButton.animate({opacity:0}, 1000, function(){
        if(toHide.is(':visible')){
          $('html, body').animate({
            scrollTop: chapter.offset().top
          }, 1000);
        }
        toHide
          .slideToggle(1500)
          .animate({opacity:1}, 0, function(){
            if(toHide.is(':visible')){
              toShowButton.children().text(textSlideUp).parent().animate({opacity:1});
            } else {
              toShowButton.children().text(textSlideDown).parent().animate({opacity:1});
            }
          });
      });
    });
  };

  let aboutMore = $('.about-more', $('#about')),
      aboutHidden = $('.about-hidden', $('#about')),
      calendarHidden = $('div.calendar-hidden', $('#calendar')),
      calendarMore = $('.calendar-more', $('#calendar')),
      actionsHidden = $('div.actions-hidden', $('#actions')),
      actionsMore = $('.actions-more', $('#actions'));

  showMore(aboutHidden, aboutMore, $('#about'), 'Zwiń', 'Czytaj dalej');
  showMore(calendarHidden, calendarMore, $('#calendar'), 'Pokaż tylko nadchodzące spotkania', 'Zobacz listę poprzednich spotkań');
  showMore(actionsHidden, actionsMore, $('#actions'), 'Zwiń', 'Czytaj dalej');

// chapters fade-ins

  function fading(item){
    if($(window).scrollTop() + $(window).height() - 100 > item.offset().top &&
       $(window).scrollTop() + 100 < item.offset().top + item.height()){
      item.removeClass('fading');
    } else {
      item.addClass('fading');
    }
  }

  $(window).scroll(function(){
    fading($('.about').next());
    fading($('.calendar').next());
    fading($('.actions').next());
    fading($('a.partner-item'));
    fading($('#friends'));
  });

});
