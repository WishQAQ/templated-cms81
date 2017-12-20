$(function() {
    var b = $('.header .frame .box');
    b.find('.nav').mouseenter(function() { $(this).css('height', 'auto'); b.animate({ height: '240px' }, 'fast'); });
    b.mouseleave(function() { b.animate({ height: '92px' }, 'fast', function() { b.find('.nav').css('height', '92px'); }); });
    $('.adplay').each(adSlide);
    adScroll();
});

