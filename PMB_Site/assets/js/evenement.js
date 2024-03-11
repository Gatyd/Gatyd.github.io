$(function(){
    $('.evenement').slideDown("slow");
    $(window).scroll(function() {
        if ($(this).scrollTop()+150 >= $('#remise_attributs').offset().top) {
            $('.attributs').slideDown(1500);
        }
    })
    function animecardtext(img,text){
        $(window).scroll(function() {
            if ($(this).scrollTop() >= img.offset().top) {
                text.slideDown(1000);
            }
        })
    }
    animecardtext($('.card-img').eq(0),$('.card-text').eq(0));
    animecardtext($('.card-img').eq(1),$('.card-text').eq(1));
    animecardtext($('.card-img').eq(2),$('.card-text').eq(2));
    animecardtext($('.card-text').eq(2),$('.card-text').eq(3));
})