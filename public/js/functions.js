$(document).ready(function() {
    //Lazy Load
    $('.lazy').lazy();

    //responsive menu
    $(".menu-bottom").on("click", function() {
        $("html").toggleClass("menu-open")
    });
    $(".menu-bottom").click(function() {
        $(this).toggleClass("click")
    });

    //Form Validate
    $(".popop-form").validate();
    $(".footer-form").validate();

    //Owl Carousel
    $('.owl-testimonial').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            navText:["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"],
            margin:30,
            autoplay: true,
            autoplaySpeed: 5000,
            autoplayHoverPause: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                320:{
                    items: 1,
                }
            }
        });
    $('.owl-portfolio').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            navText:["<div class='nav-btn prev-slide'><i class='fas fa-long-arrow-alt-left'></i></div>","<div class='nav-btn next-slide'><i class='fas fa-long-arrow-alt-right'></i></div>"],
            margin:0,
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayHoverPause: false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                },
                320:{
                    items: 2,
                }
            }
        });
    $('.owl-site-logo').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin:50,
        responsiveClass:true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout:3000,
        autoplaySpeed: 500,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:3,
            },
            1000:{
                items:7,
            },
            360:{
                items:3,
            }
        }
    });
    
    


    $('.lazy').lazy();
});

$(window).on('load', function() {
    $(".testimonial .owl-nav").appendTo("#cus-nav");
});



