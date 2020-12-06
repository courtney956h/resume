(function($) {
    
    $('.port_inner').slick({
        autoplay:true,
        dots:false,
        autoplaySpeed:4500,
        slidesToShow:5,
        slidesToScroll:3,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:true,
        draggable:true,
        fade:false,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-caret-left"></i></button>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-caret-right"></i></button>'
    })

    // nav 클릭시 current 유지
    $('#footer .nav li a').on('click', function() {
        $('#footer .nav li a.current').removeClass('current')
        $(this).addClass('current')
    })

})(jQuery)