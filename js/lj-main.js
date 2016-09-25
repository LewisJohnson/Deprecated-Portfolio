/**
 * Created by Lewis Johnson on 24/07/2016.
 */
$(document).ready(function () {

    $('.intro-title').fadeIn(600);
    $('.section').css('display', 'none');
    var NameTicked = true;
    var TimesTicked = 0;

    name_tick();
    function name_tick() {
        if (NameTicked) {
            NameTicked = false;
            $(".intro-title").text("Lewis Johnson...");
        } else {
            NameTicked = true;
            $('.intro-title').text("Lewis Johnson..|");
        }
        if (TimesTicked < 4) {
            TimesTicked++;
            setTimeout(name_tick, 500);
        } else {
            $('.intro-title').fadeOut(800);
            $('body').toggleClass('light');
            setTimeout(fadeLSecin, 800);
        }
    }
    function fadeLSecin() {
        $('#section1').fadeIn(400);
        setTimeout(whatnext, 250);
    }

    function whatnext() {
        var windowSize = $(window).width();
        if(windowSize < 800){
            $('#section1').show();
            $('#section2').hide();
            $('#section3').hide();
        } else {
            $('#section2').fadeIn(400);
            $('#section3').fadeIn(600);
            $( ".sec-nav" ).each(function() {
                $(this).hide();
            });
        }
    }

    $('.section-social li').on("mouseenter", function () {
        $(this).find('p').css('display', 'inline-block')
    }).on("mouseleave", function () {
            $(this).find('p').css('display', 'none');
        });

    $('#sec1next').click(function () {
        $('#section1').hide(400);
        $('#section2').show(400);
        $('#section3').hide();
    });

    $('#sec2prev').click(function () {
        $('#section1').show(400);
        $('#section2').hide(400);
        $('#section3').hide();
    });

    $('#sec2next').click(function () {
        $('#section1').hide();
        $('#section2').hide(400);
        $('#section3').show(400);
    });

    $('#sec3prev').click(function () {
        $('#section1').hide();
        $('#section2').show(400);
        $('#section3').hide(400);
    });

});


$(window).on('resize', function(event) {
    var windowSize = $(window).width();
    var section1 = $('#section1');
    var section2 = $('#section2');
    var section3 = $('#section3');
    var sections = [section1, section2, section3];

    if (windowSize < 800) {
        $( ".sec-nav" ).each(function() {
            $(this).show();
        });
    } else {
        $( ".sec-nav" ).each(function() {
            $(this).hide();
        });
        sections.forEach(function x(item){
            item.show();
        });
    }
});