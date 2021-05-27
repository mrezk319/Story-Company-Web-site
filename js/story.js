$(".navbar-nav li").on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
$('.slide').height(600);
$('.slider .carousel-caption p:last-child').on('click', function () {
    $(this).toggleClass('n');
})
$('html').niceScroll();
$('.cardss .card .card-body .card-title').addClass(' wow shakeX')
wow = new WOW(
  {
      animateClass: 'animated',
      offset: 100,

  }
);
wow.init();
$('#moar').on('click', function () {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
});
$(window).on('scroll', function () {
    if($(this).scrollTop() >= 500)
        $(".up").fadeIn();
    else
        $(".up").fadeOut();
})
$(".up").on('click', function () {
    $("html,body").animate({
        scrollTop:0
        },1000
    )
})