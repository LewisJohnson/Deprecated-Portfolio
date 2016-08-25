/**
 * Created by Lewis Johnson on 24/07/2016.
 */
$(document).ready(function () {

	var scale = 'scale(1)';
	document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
 	document.body.style.msTransform =   scale;       // IE 9
 	document.body.style.transform = scale;     // General

    $(".section").hide();
    $(".divider").hide();
    $('.intro-title').fadeIn(600);
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
            $('body').css('height', 'auto');
            setTimeout(fadeLSecin, 800);
        }
    }
    function fadeLSecin(){
        $('.section.ls').fadeIn(400);
        setTimeout(fadeMSecin, 250);
    }

    function fadeMSecin(){
        $('.section.ms').fadeIn(400);
        setTimeout(fadeRSecin, 250);
    }
    function fadeRSecin(){
        $('.section.rs').fadeIn(400);
        $(".divider").fadeIn(400);
    }

    $('.section-social li').on("mouseenter", function () {
            $(this).find('p').css('display', 'inline-block')
        })
        .on("mouseleave", function () {
            $(this).find('p').css('display', 'none');

        });

});
