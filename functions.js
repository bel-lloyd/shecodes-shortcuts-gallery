$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
        $('#back-to-top').fadeIn();
        } else {
        $('#back-to-top').fadeOut();
        }
    });
      // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});

$(function(){
    $(".increment").click(function(){
    var count = parseInt($("~ .count", this).text());

    if($(this).hasClass("up")) {
        var count = count + 1;
        
        $("~ .count", this).text(count);
    } else {
        var count = count - 1;
        $("~ .count", this).text(count);     
    }
    
    $(this).parent().addClass("bump");

    setTimeout(function(){
        $(this).parent().removeClass("bump");    
    }, 400);
    });
});