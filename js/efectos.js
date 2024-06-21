$(document).ready(function(){
    
    //efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({top: '0'}, 2000 + (index * 500));
    });
    
    //efecto header
    if( $(window).width() > 800 ) {
        $('header .text').css ({
            opacity: 0,
            marginTop:0
        });
        $('header .text').animate ({
            opacity: 1,
            marginTop:'-150px'
        }, 1800);
        
    }

    //scroll elementos menu
    let about = $('#about').offset().top,
        menu = $('#saucers').offset().top,
        gallery = $('#gallery').offset().top,
        location = $('#location').offset().top;

    $('#btn_about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate ({
            scrollTop: about
        }, 500);
    });
    $('#btn_menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate ({
            scrollTop: menu 
        }, 500);
    });
    $('#btn_gallery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate ({
            scrollTop: gallery 
        }, 500);
    });
    $('#btn_location').on('click', function(e){
        e.preventDefault();
        $('html, body').animate ({
            scrollTop: location 
        }, 500);
    });
});