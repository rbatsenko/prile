$(document).ready( function() {
    $('body').niceScroll({
        cursorwidth:"10px",
        cursorborder: "0px solid #fff",
        zindex: [200]
    });
    $(document).on( 'scroll', function() {
        scrollTop = $(window).scrollTop();
        $('#intro').css('background-position','50%' + '-' + scrollTop/1.5 + 'px');
        $('#intro .bg-add').css('background-position','-10%' + '-' + scrollTop/6 + 'px');
    })
    $('body').fadeIn(200);
    $("a").click(function(event){
        event.preventDefault();
        $("body").fadeOut(200);      
    });
});