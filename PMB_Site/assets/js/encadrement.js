$(function(){
    $('p:first').slideDown(1000)
    function fondu(limite,element){
        $(window).scroll(function() {
            if ($(this).scrollTop()+120 >= limite.offset().top) {
                element.slideDown(1000);
            }
        })
    }
    fondu($('.hierarchie_ET'),$('.hebergement'));
    fondu($('.point').eq(0),$('.alimentation'));
    fondu($('.point').eq(1),$('.scolarite'));
    fondu($('.point').eq(2),$('.prise_en_charge_sanitaire'));
    fondu($('.point').eq(3),$('.deplacement'));
    fondu($('.point').eq(3),$('.salles'));
})