$( ".openModal" ).click(function(e) {
        // URL, который нужно открыть
        var linkUrl = 'https://pay.fondy.eu/s/BL5M1hkSJdnSF8z4?_gl=1*130awg9*_gcl_au*NDIxMzIzMTkxLjE3MTc1Nzg3MDI.*_ga*MTU3MzUyNDY3OS4xNzE3NTc4NzAy*_ga_Z2KY5VSWGZ*MTcxNzU3ODcwMi4xLjEuMTcxNzU3OTcyNC42MC4wLjA.';

        // Открыть ссылку в новом окне или вкладке
        window.open(linkUrl, '_blank');
    });


$( ".openModal1" ).click(function(e) {
    e.preventDefault();
    $('#modal1').arcticmodal();
});
$( ".openModal2" ).click(function(e) {
    e.preventDefault();
    $('#modal2').arcticmodal();
});
$( ".openModal3" ).click(function(e) {
    e.preventDefault();
    $('#modal3').arcticmodal();
});
$( ".openModal4" ).click(function(e) {
    e.preventDefault();
    $('#modal4').arcticmodal();
});
$( ".openModal5" ).click(function(e) {
    e.preventDefault();
    $('#modal5').arcticmodal();
});
$( ".openModal6" ).click(function(e) {
    e.preventDefault();
    $('#modal6').arcticmodal();
});
$( ".openModal7" ).click(function(e) {
    e.preventDefault();
    $('#modal7').arcticmodal();
});
$( ".openModal8" ).click(function(e) {
    e.preventDefault();
    $('#modal8').arcticmodal();
});

function newDate() {
  var time = new Date();
  var date_now =  new Date();
  date_now.setDate(date_now.getDate() + 1);
  $(".date-block").text(date_now.toLocaleString('uk-ua', {
    day: 'numeric',
    month: 'long' 
  }));
}
setTimeout(newDate, 100);

var myDate = new Date();
function returnEndDate(d,h,m){
  myDate.setDate(myDate.getDate()+d);
  myDate.setHours(myDate.getHours()+h);
  myDate.setMinutes(myDate.getMinutes()+m);
  return myDate;
}
if($.cookie("time-timer1")){
  var dateEnd = $.cookie("time-timer1");
}else{
  var dateEnd = returnEndDate(0,3,0); 
  $.cookie("time-timer1", dateEnd, {expires: 7});
}
var date = new Date($.cookie("time-timer1"));
    $(".getting-started").countdown(date, function(event) {
  $(this).html(
  event.strftime(''
  +'<div class="hr"><div class="dial">%H</div>годин</div>'
  +'<div class="min"><div class="dial">%M</div>хвилин</div>'
  +'<div class="sec"><div class="dial">%S</div>секунд</div>'));
});

! function(i) {
  var o, n;
  i(".title_block").on("click", function() {
    o = i(this).parents(".accordion_item"), n = o.find(".info"),
      o.hasClass("active_block") ? (o.removeClass("active_block"),
        n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
        o.siblings(".active_block").removeClass("active_block").children(
          ".info").stop(!0, !0).slideUp())
  })
}(jQuery);

$(document).ready(function(){
    var $menu = $("#menu");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });//scroll
});

$( ".showmore" ).click(function() {
    $(this).hide();
    $('.hidd').slideDown('slow');
});