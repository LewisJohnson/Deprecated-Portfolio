/**
 * Created by Lewis Johnson on 24/07/2016.
 */
$(document).ready(function () {

    $(".section").hide();
    $('.section-social').hide();
    var NameTicked = true;
    var TimesTicked = 0;

    name_tick();
    function name_tick() {
        if (NameTicked) {
            NameTicked = false;
            $(".header-name").text("Lewis Johnson...");
        } else {
            NameTicked = true;
            $('.header-name').text("Lewis Johnson..|");
        }
        if(TimesTicked < 1) {
            TimesTicked++;
            setTimeout(name_tick, 500);
        } else {
            $('.header-name').fadeOut(800);
            setTimeout(fadeLSecin, 800);
        }
    }
    function fadeLSecin(){
        $('.section.ls').fadeIn(400);
        $('.section-social').fadeIn(400);

        setTimeout(fadeMSecin, 250);
    }

    function fadeMSecin(){
        $('.section.ms').fadeIn(400);
        setTimeout(fadeRSecin, 250);
    }
    function fadeRSecin(){
        $('.section.rs').fadeIn(400);
    }
});