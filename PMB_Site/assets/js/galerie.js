$(function(){
    function afficher(limite,element){
        $(window).scroll(function() {
            if ($(this).scrollTop()+120 >= limite.offset().top) {
                element.slideDown(1000);
            }
        })
    }
    $('h2').eq(0).slideDown(1000)
    afficher($('img').eq(11),$('h2').eq(1));
    afficher($('img').eq(24),$('h2').eq(2));
    afficher($('img').eq(32),$('h2').eq(3));
    afficher($('img').eq(36),$('h2').eq(4));
    afficher($('img').eq(38),$('h2').eq(5));
    afficher($('img').eq(43),$('h2').eq(6));
    afficher($('img').eq(52),$('h2').eq(7));
    afficher($('img').eq(61),$('h2').eq(8));
    afficher($('img').eq(61),$('h2').eq(9));
})