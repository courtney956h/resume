(function($) {
    
    $('.port_box').slick({
        autoplay:true,
        dots:false,
        autoplaySpeed:10000,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:true,
        draggable:true,
        fade:false,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow">PREV</button>',
        nextArrow:'<button class="nextArrow marrow">NEXT</button>'
    })

    // nav 클릭시 current 유지
    $('#footer .nav li a').on('click', function(e) {
        var ind = $(this).parent().index()
        var wh = $(window).height()
        
        e.preventDefault()
        $(this).parent().siblings().removeClass('current')
        $(this).parent().addClass('current')
        $('html, body').stop().animate({
            scrollDown : ind*wh
        },800)
    })


    $('.section').on('mousewheel', function(e, wh) {
        if ( wh>0 ) {
            secIndex = $(this).prev().index()
            if ( secIndex < 0 ) {
                secIndex = 0
            }
        } else if ( wh<0 ) {
            secIndex = $(this).next().index()
            if ( secIndex < 0 ) {
                secIndex = 4
            }
        }

        $('html, body').stop().animate({
            scrollDown : secIndex*$(window).height()
        }, 800)
        $('#footer .nav li').eq(secIndex).addClass('current')
        $('#footer .nav li').eq(secIndex).siblings().removeClass('current')
    })
})(jQuery)