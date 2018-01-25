// JS operations
app.controller('jsOperations',['$scope', function ($scope) {
  // all js operations
  $scope.jsOperations = function () {
    // getting headerHeight
    function headHeight () {
     var headerHeight = jq('.header').outerHeight();
     return headerHeight;
    }
    headHeight();
    // console.log(headHeight());
    jq(window).resize(function() {
      headHeight();
      // console.log(headHeight());
      // header_heght equal padding
      jq('.head_padd').css({
        "padding-top": headHeight()
      });
      // header_heght equal margin
      jq('.marg_padd').css({
        "padding-top": headHeight()
      });
    });
    jq('.head_padd').css({
     "padding-top": headHeight()
    });
    // header_heght equal margin
    jq('.head_marg').css({
     "margin-top": headHeight()
    });

    // slider js
    jq('.my-slider .controlls > div').click(function() {
    if (jq(this).hasClass('prev')) {
      if(!jq('.my-slider .item.active').prev().length == 0) {
        jq('.controlls > div.next').removeClass('notfound');
        jq('.my-slider .item.active').fadeOut(100, function() {
          jq('.my-slider .item.active').removeClass('active').prev().fadeIn(500).addClass('active');
        });
      } else {
      }
      jq(this).addClass('notfound');
    } else {
      if(!jq('.my-slider .item.active').next().length == 0) {
        jq('.controlls > div.prev').removeClass('notfound');
        jq('.my-slider .item.active').fadeOut(100, function() {
          jq('.my-slider .item.active').removeClass('active').next().fadeIn(500).addClass('active');
        });
      } else {
        jq(this).addClass('notfound');
      }
    }
    });

    // onclick menu
    jq(".main-menu > li > a").click(function () {
      var movetoClass = jq('.moveTo').scrollTop();
      // console.log(movetoClass);
      // addClass to menu li
      jq(this).parent().addClass('active').siblings().removeClass('active');
      // animate html and body
      // jq('html, body').animate({
      //     scrollTop: movetoClass
      // }, 1000);
    });

    jq('.header .left a').click(function() {
      jq(".main-menu > li").removeClass('active').eq(0).addClass('active');
      jq(this).off('click');
    });
  };
  $scope.jsOperations();
}]);
