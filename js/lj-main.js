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
        $('#section2').fadeIn(400);
        $('#section3').fadeIn(600);
        $( ".sec-nav" ).each(function() {
                $(this).hide();
        });
    }
});
