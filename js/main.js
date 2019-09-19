$( document ).ready(function() {
    // slider on main page
    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
    });

    // line in news list

        $('.news_item').mouseover(function(){
            var widthBlock = $(this).find("h2").width();
            var borderBox = $(this).find(".border_box").width();
            var lineWidth = borderBox - widthBlock;
            $(this).find(".absolute_line").css({'width' : (lineWidth-15)+'px'});
           // alert(lineWidth);
        });
        $('.news_item').mouseout(function(){
            $(this).find(".absolute_line").css({'width' : '0px'});
        });
        /*slider detail page product*/
        $('.product_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
            nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    $('.rewiews_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.both_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
                    nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
                }
            }
        ]

    });
    $('.both_slider2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
                    nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
                }
            }
        ]

    });

        // add active class
        addActive('.size_box');
        addActive('.color_box');
        function addActive (boxClass){
            $(boxClass).click(function () {
                $(boxClass).removeClass('active');
                $(this).addClass('active');
            });
        }
        // fucking filter
        $('.bx_filter_container_title').click(function () {
           $(this).parent().toggleClass('active');
        });


});

$(document).ready(function(){
    $(".item_menu").click(function(){
        $(".menu").toggleClass("open_menu"); return false;
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
            top = $(id).offset().top; //определим высоту от начала страницы до якоря
        $('body,html').animate({scrollTop: top-62}, 1000); //сделаем прокрутку за 1 с
    });
    jQuery(function($){
        $('.date').mask('99/99/9999');
        $('.phonemask').mask('+7 (999) 999-99-99');
        $('.phoneext').mask("(999) 999-9999? x99999");
        $(".tin").mask("99-9999999");
        $(".ssn").mask("999-99-9999");
        $(".product").mask("a*-999-a999");
        $(".eyescript").mask("~9.99 ~9.99 999");
    });
});
