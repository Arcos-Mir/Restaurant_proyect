$(document).ready(function(){

    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if(windowWidth > 800 ) {
            let scroll = $(window).scrollTop();

            $('header .text').css ({
                'transform': 'translate(0px,' + scroll / 4 + '%)'
            });

            $('.about article').css ({
                'transform': 'translate(0px, -' + scroll / 6 + '%)'
            });
        }
    });

    $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 800) {
            $('.about article').css ({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});