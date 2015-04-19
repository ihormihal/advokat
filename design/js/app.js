$(function(){

    //headerGap();
    //fixHeader();
    //niceSroll();
    fixHeights('.box');
    fixFooter();

    $('.fancybox').fancybox({
        maxWidth    : 940,
        maxHeight   : 480,
        padding     : 35,
        fitToView : true,
        autoSize  : false,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'fade',
        wrapCSS: 'dark',
        helpers : {
            overlay : {
              opacity: 0.4,
              locked: true
            }
        }
    });

    $('.fancy').fancybox({
        maxWidth    : 480,
        maxHeight   : 640,
        padding     : 30,
        fitToView : false,
        autoSize  : true,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'fade',
        wrapCSS: 'dark',
        helpers : {
            overlay : {
              opacity: 0.4,
              locked: true
            }
        }
    });

    $('.brands-carousel').owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 3],
            [600, 4],
            [700, 5],
            [1000, 6],
            [1200, 6],
            [1400, 8],
            [1600, 10]
        ],
        navigation : false,
        pagination: false,
        autoPlay: 2000
    });

    $('#nav-button').click(function(){
        if($('#nav-main').is(':visible')){
            $('#nav-main').slideUp(500);
        }else{
            $('#nav-main').slideDown(500);
        }
    });


});

window.onresize = function(){
    //headerGap();
    fixHeights('.box');
    fixFooter();
};

window.onscroll = function(){
    //fixHeader();
};

var headerGap = function(){
    if($('.header-fixed').length > 0){
        $('.header-wrapper').css('padding-top',$('.header-fixed').outerHeight());
    }
};
var niceSroll = function () {
    if($(window).width() > 768 && $('body').outerHeight(true) > $(window).height()){
        $('html').niceScroll({
            scrollspeed: 50,
            mousescrollstep: 40,
            cursorwidth: 10,
            cursorborder: 0,
            cursorcolor: '#6d6d6d',
            cursorborderradius: 0,
            autohidemode: true,
            horizrailenabled: false,
            zindex: 9999
        });
    }
}
var fixFooter = function(){
    $('main').css('margin-bottom',$('footer').height());
};
var fixHeights = function(selector){
    var height = 0;
    $(selector).each(function(){
        if($(this).height() > height){
            height = $(this).height();
        }
    });
    $(selector).height(height);
}