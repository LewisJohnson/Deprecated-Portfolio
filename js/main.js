/**
 * Created by Lewis Johnson on 24/07/2016.
 */
document.addEventListener("DOMContentLoaded", function(){

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || html.clientHeight) &&
            rect.right <= (window.innerWidth || html.clientWidth)
        );
    }

    window.onscroll = function() {
        var sections = document.getElementsByClassName("section");
        var mainHeader = document.getElementsByClassName("main-header")[0];

        if(isInViewport(mainHeader)){
            mainHeader.children[0].style.background = "rgba(0,210,255,0.2)";
        } else {
            mainHeader.children[0].style.background = "rgba(0,0,0,0)";
        }

        for(var i =0; i < sections.length; i++){
            var header = sections[i].children[0];
            if(isInViewport(sections[i])){
                sections[i].focus();
                header.children[0].style.background = "yellow";
                header.children[0].classList.add("yellow");
            } else {
                sections[i].blur();
                header.children[0].style.background = "white";
                header.children[0].classList.remove("yellow");
            }
        }
    };

});
//
// String.prototype.shuffle = function () {
//     var a = this.split(""),
//         n = a.length;
//
//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// };
