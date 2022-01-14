var mybutton = document.getElementById("upBtn");
var mynavbar = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function upFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}