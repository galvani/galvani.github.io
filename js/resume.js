$( "h1" ).click(function() {
    $( "body" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 100, function() {
        // Animation complete.
        console.log('complete');
    });
});

$("body").scroll(function(e){
    console.log('scroll event',e);
});