$(document).ready(function() {

  $('#portfolio').click(function(){
    $("html, body").animate({ scrollTop: 0}, 500);
  });

  $('#about').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 500);
  });

  $('#arrow').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 500);
  });

  $('#portfolio').click(function(){
    $('html, body').animate({scrollTop:$('#portfolio-section').position().top}, 500);
  });


  $('#contact').click(function() {
    $('.form-container').fadeIn(500);
    $('body').addClass('no-scroll');
  });

  $('#submit').click(function() {
    $('.form-container').fadeOut(500);
    $('body').removeClass('no-scroll');
  });

  $('#cancel').click(function() {
    $('.form-container').fadeOut(500);
    $('body').removeClass('no-scroll');
  });

  $('#home-button').click(function() {
      $('#homepage').show();
      $('#aboutpage').hide();
      $('#find').hide();
      $('#login').hide();
      $('#map').hide();
      $('#registration').hide();
  });

  $('#about-button').click(function() {
      $('#homepage').hide();
      $('#aboutpage').show();
      $('#find').hide();
      $('#login').hide();
      $('#map').hide();
      $('#registration').hide();
  });

  $('#find-button').click(function() {
      $('#homepage').hide();
      $('#aboutpage').hide();
      $('#find').show();
      $('#login').hide();
      $('#map').hide();
      $('#registration').hide();
  });

  $('#login-button').click(function() {
      $('#homepage').hide();
      $('#aboutpage').hide();
      $('#find').hide();
      $('#login').show();
      $('#map').hide();
      $('#registration').hide();
  });

  $('#register-button').click(function() {
      $('#homepage').hide();
      $('#aboutpage').hide();
      $('#find').hide();
      $('#login').hide();
      $('#map').hide();
      $('#registration').show();
  });

  $('#map-button').click(function() {
      $('#homepage').hide();
      $('#aboutpage').hide();
      $('#find').hide();
      $('#login').hide();
      $('#map').show();
      $('#registration').hide();
  });

});


