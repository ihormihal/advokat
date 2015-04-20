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

    var mainCarousel = $('.main-carousel').owlCarousel({
        itemsCustom : [
            [450, 1],
            [600, 2],
            [700, 3],
            [1000, 4],
            [1400, 5]
        ],
        navigation : false,
        pagination: false,
        autoPlay: 2000,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
    // Custom Navigation Events
    $('.main-carousel-nav .next').click(function(){
        mainCarousel.trigger('owl.next');
    })
    $('.main-carousel-nav .prev').click(function(){
        mainCarousel.trigger('owl.prev');
    });

    var mainCarouselText = $('.main-carousel-text').owlCarousel({
        navigation : false,
        pagination: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

    var partnersCarousel = $('.partners-carousel').owlCarousel({
        itemsCustom : [
            [450, 2],
            [600, 3],
            [800, 4],
            [1000, 5],
            [1400, 6],
            [1800, 8]
        ],
        navigation : false,
        pagination: true,
        autoPlay: 2000,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });

    $('#nav-button').click(function(){
        if($('#nav-main').is(':visible')){
            $('#nav-main').slideUp(500);
        }else{
            $('#nav-main').slideDown(500);
        }
    });

    $('.gmap').each(function(){
      var container = this;
      var latlng = new google.maps.LatLng(
        parseFloat($(container).data('lat')),
        parseFloat($(container).data('lng'))
      );
      var mapOptions = {
        zoom: parseInt($(container).data('zoom')),
        center: latlng,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        scrollwheel: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(container, mapOptions);

      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: $(container).data('marker')
      });
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