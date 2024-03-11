$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('#caros').offset().top) {
            $('.desc_exam_militaire').slideDown(1500);
        }
    })
    function animecard(i,img){
        $('.btn-warning').eq(i).click(function() {
            $('.card-img-top').eq(i).slideUp("slow");
            $('.card-text-hide').eq(i).slideDown("slow");
            $('.card').eq(i).css({"background-image":img,"backgriund-size":"cover"});
            $('.card-body').eq(i).css("padding-top","50%");
            $('.btn-warning').eq(i).hide();
            $('.btn-close').eq(i).show();
            $('.exam').eq(i).css("color","#3cf");
            $('.btn-close').eq(i).css("background-color","#3cf !important");
        })
        $('.btn-close').eq(i).click(function() {
            $('.card-img-top').eq(i).show(1000);
            $('.card-text-hide').eq(i).slideUp("slow");
            $('.card').eq(i).css({"background-image":"none","backgriund-size":"cover"});
            $('.card-body').eq(i).css("padding-top","1.5rem");
            $('.btn-warning').eq(i).show();
            $('.btn-close').eq(i).hide();
            $('.exam').eq(i).css("color","rgb(219, 125, 11)");
        })
    }
    animecard(0,"url(assets/images/topo_mini.jpg)");
    animecard(1,"url(assets/images/comit_1_mini.jpg)");
    animecard(2,"url(assets/images/p22_mini.jpg)");
})