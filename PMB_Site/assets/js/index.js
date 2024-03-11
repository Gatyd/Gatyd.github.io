//let gotoPresent = document.getElementById('name');
//gotoPresent.classList.add('slideIt')
//let presentbut = document.getElementById('present');
//presentbut.classList.add('present')

$(function(){
    function read(i){
        $('.bleu').eq(i).click(function(){
            $('.cache').eq(i).slideDown(1000);
            $('.bleu').eq(i).hide();
            $('.jaune').eq(i).show(1000);
        })
        $('.jaune').eq(i).click(function(){
            $('.cache').eq(i).hide("slow");
            $('.bleu').eq(i).show(1000);
            $('.jaune').eq(i).hide("slow");
        })
    }
    read(0) ; read(1) ; read(2)
    $('.presentation').click(function(){
        $('#presentation').slideDown(1000);
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('#tabs').offset().top) {
            $('#presentation').hide();
        }
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('.tabs-1-img').offset().top || $(this).scrollTop() >= $('.tabs-1-img').offset().top || $(this).scrollTop() >= $('.tabs-1-img').offset().top)  {
            $('#excellence').slideDown(2000)
        }
    })
})