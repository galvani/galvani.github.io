$("h1").click(function () {
    $("body").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 100, function () {
        // Animation complete.
        console.log('complete');
    });
});


$(document).ready(function () {
    $.timeliner({
        timelineContainer: '#timeline',
        timelineSectionMarker: '.timeline-wrapper',
        timelineTriggerContainer: '.timeline-series',
        timelineTriggerAnchor: '.timeline-event a',
        startState: 'closed',
        expandAllText: 'Show All',
        collapseAllText: 'Hide All',
        startOpen: ['job2023EX', 'job2017EX'],
        baseSpeed: 200,
        speed: 4
    });

    setTimeout(function() {
        $('#job2023').trigger('click');
        $('#job2021').trigger('click');
        $('#job2021_2').trigger('click');
        $('#job2017').trigger('click');
    }, 100);

});