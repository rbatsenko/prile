$("body").niceScroll({
    cursorwidth: "10px",
    cursorborder: "0px solid #fff",
    zindex: [200],
    smoothscroll: true,
    scrollspeed: 80,
    mousescrollstep: 20
});
$(document).on('scroll', function () {
    scrollTop = $(window).scrollTop();
    height = $(window).height();
    $('#intro').css('background-position','50%' + '-' + scrollTop/1.5 + 'px');
    $('#intro .bg-add').css('background-position','-10%' + '-' + scrollTop/6 + 'px');
    $('#how-it-works .bg-before-img').css('top', ( scrollTop*0.02 ) + -31 + '%');
    $('#content-creators .bg-before-img').css('top', ( scrollTop*0.05 ) + 0 + 'px');
    if ( scrollTop > 150 ) { 
        $('.navbar').css('background-color','#095573'); 
    } else {
        $('.navbar').css('background-color','rgba(7, 51, 74, .2)');
    };
})
$('body').fadeIn(400);
function newpage() {
    window.location = newLocation;
}
$('a:not(#navbarNav a)').click(function(event) {
    event.preventDefault();
    newLocation = this.href;
    $("body").fadeOut(400, newpage);    
});

/*
$('nav a').click( function(event) {
    event.preventDefault();
})

function scrollHow() {
    $("html, body").animate({ scrollTop: $('#how-it-works').offset().top - 150 }, 1000);
}

function scrollCreators() {
    $("html, body").animate({ scrollTop: $('#content-creators').offset().top - 100 }, 1000);
}

function scrollPlatforms() {
    $("html, body").animate({ scrollTop: $('#for-platforms').offset().top - 100 }, 1000);
}

function scrollWhy() {
    $("html, body").animate({ scrollTop: $('#why-us').offset().top - 100 }, 1000);
}*/

$("nav a[href^='#']").click(function(e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top - 100;
    $("body, html").animate({
        scrollTop: position
    }, 1000 );
});