$(document).ready( function() {
    $('body').niceScroll({
        cursorwidth:"10px",
        cursorborder: "0px solid #fff",
        zindex: [200],
        smoothscroll: true,
        scrollspeed: 80,
        mousescrollstep: 20
    });
    $(document).on( 'scroll', function() {
        scrollTop = $(window).scrollTop();
        height = $(window).height();
        $('#intro').css('background-position','50%' + '-' + scrollTop/1.5 + 'px');
        $('#intro .bg-add').css('background-position','-10%' + '-' + scrollTop/6 + 'px');
        $('#how-it-works .bg-before-img').css('top', ( scrollTop*0.02 ) + -31 + '%');
        $('#content-creators .bg-before-img').css('top', ( scrollTop*0.05 ) + 0 + 'px');
        if ( scrollTop > 455 ) { 
            $('.navbar').css('background-color','#095573'); 
        } else {
            $('.navbar').css('background-color','rgba(7, 51, 74, .2)');
        };
    })
    $('body').fadeIn(400);
    function newpage() {
        window.location = newLocation;
    }
    $("a").click(function(event){
        event.preventDefault();
        newLocation = this.href;
        $("body").fadeOut(400, newpage);    
    });
});