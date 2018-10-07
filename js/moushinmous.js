var preloder = document.getElementById("preloder");
preloder.style.width = window.innerWidth + "px";
preloder.style.height = window.innerHeight + "px";

function animateHeading(text, i) {
    document.getElementById("heading").innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
        animateSubheading("multifunctional company", 1);
        return;
    }
    setTimeout("animateHeading('" + text + "'," + i + ")", 500);
}

function animateSubheading(text, i) {
    document.getElementById("subheading").innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
        setInterval(
            function() {
                $('.preloader-text').animate({
                    opacity: 0.3
                }, 700).animate({
                    opacity: 1
                }, 700);

            }, 0);
        return;
    }
    setTimeout("animateSubheading('" + text + "'," + i + ")", 100);
}


function animatePreloader() {
    animateHeading("metod", 1);
}
$(document).ready(function() {
    animatePreloader();

});


window.addEventListener("load", function() {
    preloder.style.display = "none";
    var mouse = document.getElementById("mous"); // start
    var mtop = mouse.style.marginTop;
    mouse.style.marginTop = 50 + "px";
    var interval;
    var i = 1;

    interval = setInterval(function() {
        if (i == 1) {
            mouse.style.marginTop = 45 + "px";
            i = 0
        } else {
            mouse.style.marginTop = 50 + "px";
            i = 1
        }
    }, 200)

    // end
    //**var inp= document.getElementsByClassName("calc_field");
    //* for(var i=0;i<inp.length;i++){
    //*   inp[i].onfocus= function(e){
    //*       if(i==0){
    //*     document.getElementsByClassName("calc_field")[0].placeholder='dfg';}
    //*   }
    //*}
    var shar = document.getElementById("share");
    var ii;
    shar.addEventListener("mouseover", function() {
        interval = setInterval(function() {
            i++;
            shar.style.transform = 'rotate(-' + (i += 90) + 'deg)';
        }, 50)


    }, false)
    shar.addEventListener("mouseout", function() {
            clearInterval(interval);
        }, false) // end

}, false)