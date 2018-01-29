$(function() {
  var headerHeight, btnId;
  headerHeight = $('header').outerHeight(true);
  // console.log(headerHeight);
  // on button click scroll to element
  $('.nav-btn').click(function (e) {
    e.preventDefault();
    btnId = $(this).attr('datanavi-id');
    $("#" + btnId).addClass('active').siblings().removeClass('active');
    $(this).parent().addClass('active').siblings().removeClass('active');
    $('html, body').animate({
        scrollTop: $("#" + btnId).offset().top - headerHeight * 2
    }, 1000);
  });
  // on window scroll header fixed and backToTop button displayed
  $(window).scroll(function () {
    if($(this).scrollTop() > headerHeight){
      $('header').addClass('fixed');
      $('.backToTop').addClass('active');
    } else{
      $('header').removeClass('fixed');
      $('.backToTop').removeClass('active');
    }
  });
  // backToTop button
  $('.backToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  });
});
