$(document).ready(function () {


    $('#intro-screen').css('height', window.outerHeight - 25);

    $(".menu-button")
        .bind('mouseenter', colorBlack)
        .bind('mouseleave', colorBlue)
        .bind('click', animate_slide)
        .bind('click', closeModal); //Note that this is an intentional feature not a bug!

    $(".slider-button")
        .bind('click', animate_slide);

    $(window)
        .scroll(resizeNav)
        .scroll(checkPosition);

    $("#left-arrow")
        .bind('click', click_arrow);

    $("#right-arrow")
        .bind('click', click_arrow);

    $('a[id=modal-button]').click(launchModal);

    $('a[id=pdf-button]').click(launchModal);

    $('.close').click(closeModal);

    $(window).resize(changeBackModal);


    function animate_slide(event) {
        event.preventDefault();
        $('#nav-bar').slideDown(180);

        var speed;
        if ($(this).is($(".slider-button"))) {
            speed = 500;
        }
        else {
            speed = 800;
        }

        $('html, body').animate(
            {scrollTop: $(this.hash).offset().top - 60},
            speed,
            'swing');
    }

    function colorBlue() {
        $(this).css("color", "#336699");
    }

    function colorBlack() {
        $(this).css("color", "#000000");
    }


    function resizeNav() {

        var height = $(window).scrollTop();

        if (height > 0 && height < 20) {
            $('#nav-bar-inner').stop().animate(
                {height: 80 - height},
                50,
                'linear'
            );


            $('#nav-bar').stop().animate(
                {height: 85 - height},
                50,
                'linear'
            );
            //$('#nav-bar-inner')
        }
        else if (height >= 16) {

            $('#nav-bar-inner').stop().animate(
                {height: 60},
                100,
                'linear'
            );

            $('#nav-bar').stop().animate(
                {height: 65},
                100,
                'linear'
            );
        }
        else {
            $('#nav-bar-inner').stop().animate(
                {height: 80},
                60,
                'linear'
            );

            $('#nav-bar').stop().animate(
                {height: 85},
                60,
                'linear'
            );

        }
        if (window.pageYOffset >= $('#start-Main').offset().top-120) {
            $('#nav-bar').slideDown(100);
        }
    }

    function click_arrow() {
        $(this).fadeTo(100, 0.5, function(){
            if($(this).is('#left-arrow')){
                $(this).fadeTo(100, 1.0, change_slide_left);
            }
            else {
                $(this).fadeTo(100, 1.0, change_slide_right);
            }

        });
    }

    function change_slide_left(){
        var $carousel = $('#carousel');
        var $active = $('.active');
        var $next = ($active.next().length) ? $active.next() : $carousel.children().first();


        $next.css('z-index', $next.get('z-index') + 1);
        $next.fadeIn(1300);
        $active.fadeOut(800,function(){
            $active.appendTo($carousel.last());
            $active.css('z-index', 0).removeClass('active');
            $next.css('z-index', $next.get('z-index') + 1).addClass('active');
        });

    }

    function change_slide_right(){
        var $carousel = $('#carousel');
        var $active = $('.active');
        var $next = ($active.prev().length) ? $active.prev() : $carousel.children().last();

        var $z_ind = $next.get('z-index');
        $next.css('z-index', $active.get('z-index'));
        $next.fadeIn(1300);
        $active.fadeOut(800,function(){
            $active.prependTo($carousel.first());
            $active.css('z-index', $z_ind).removeClass('active');
            $next.addClass('active');
        });

    }


    function checkPosition(){
        var windowPos = window.pageYOffset;
        var intro =  $('#intro-screen');
        var home =  $('#home');
        var about =  $('#about-me');
        var experiences =  $('#experiences');
        var skills =  $('#skills');
        var classes =  $('#classes');
        var name = $('#name');


        var introPos = intro.position().top + intro.height()-100;
        var homePos = home.position().top + home.height()-100;
        var aboutPos = about.position().top + about.height()-100;
        var experPos = experiences.position().top + experiences.height()-100;
        var skillsPos = skills.position().top + skills.height()-100;
        var classesPos = classes.position().top + classes.height()-100;

        $('.under-button').removeClass('active-nav');
        name.css('color','');

        if(windowPos < introPos){
            name.css('color','#052F61' );
        }
        else if(windowPos < homePos){
            $('#home-under').addClass('active-nav');
        }
        else if(windowPos < aboutPos){
            $('#about-under').addClass('active-nav');
        }
        else if(windowPos < experPos){
            $('#experiences-under').addClass('active-nav');
        }
        else if(windowPos < skillsPos){
            $('#skills-under').addClass('active-nav');
        }
        else if(windowPos < classesPos){
            $('#class-under').addClass('active-nav');
        }

    }



    function launchModal(event){
        event.preventDefault();

        $('body').css('overflow', 'hidden');
        $('#nav-bar').css('z-index', '0');

        var modal_front = $(this).attr('href');

        $('#back_modal').css({
            position: 'absolute',
            height:$(document).height(), width: $(document).width(), top:'400px',
            opacity: 0.8}).fadeIn(1000);


        if($(modal_front).is('#dialog')) {
            $(modal_front).css({top: '25%', left: '25%'});
        }
        else{
            $(modal_front).css({top: '0%', left: '0%'});
        }


        $(modal_front).fadeIn(2000);
    }

    function closeModal(event){
        event.preventDefault();
        $('#back_modal, #dialog, #resume-viewer').fadeOut();
        $('#nav-bar').css('z-index', '1');
        $('body').css('overflow', '');
    }

    function changeBackModal(){
        $('#back_modal').css({height:$(document).height(), width: $(document).width()});
    }



});


//windowY = window.pageYOffset;
//elemY = $(this.hash).offset().top;