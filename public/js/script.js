$(document).ready(function(){function a(a){a.preventDefault(),$("#nav-bar").slideDown(180);var b;b=$(this).is($(".slider-button"))?500:800,$("html, body").animate({scrollTop:$(this.hash).offset().top-60},b,"swing")}function b(){$(this).css("color","#336699")}function c(){$(this).css("color","#000000")}function d(){var a=$(window).scrollTop();a>0&&20>a?($("#nav-bar-inner").stop().animate({height:80-a},50,"linear"),$("#nav-bar").stop().animate({height:85-a},50,"linear")):a>=16?($("#nav-bar-inner").stop().animate({height:60},100,"linear"),$("#nav-bar").stop().animate({height:65},100,"linear")):($("#nav-bar-inner").stop().animate({height:80},60,"linear"),$("#nav-bar").stop().animate({height:85},60,"linear")),window.pageYOffset>=$("#start-Main").offset().top-120&&$("#nav-bar").slideDown(100)}function e(){$(this).fadeTo(100,.5,function(){$(this).is("#left-arrow")?$(this).fadeTo(100,1,f):$(this).fadeTo(100,1,g)})}function f(){var a=$("#carousel"),b=$(".active"),c=b.next().length?b.next():a.children().first();c.css("z-index",c.get("z-index")+1),c.fadeIn(1300),b.fadeOut(800,function(){b.appendTo(a.last()),b.css("z-index",0).removeClass("active"),c.css("z-index",c.get("z-index")+1).addClass("active")})}function g(){var a=$("#carousel"),b=$(".active"),c=b.prev().length?b.prev():a.children().last(),d=c.get("z-index");c.css("z-index",b.get("z-index")),c.fadeIn(1300),b.fadeOut(800,function(){b.prependTo(a.first()),b.css("z-index",d).removeClass("active"),c.addClass("active")})}function h(){var a=window.pageYOffset,b=$("#intro-screen"),c=$("#home"),d=$("#about-me"),e=$("#experiences"),f=$("#skills"),g=$("#classes"),h=$("#name"),i=b.position().top+b.height()-100,j=c.position().top+c.height()-100,k=d.position().top+d.height()-100,l=e.position().top+e.height()-100,m=f.position().top+f.height()-100,n=g.position().top+g.height()-100;$(".under-button").removeClass("active-nav"),h.css("color",""),i>a?h.css("color","#052F61"):j>a?$("#home-under").addClass("active-nav"):k>a?$("#about-under").addClass("active-nav"):l>a?$("#experiences-under").addClass("active-nav"):m>a?$("#skills-under").addClass("active-nav"):n>a&&$("#class-under").addClass("active-nav")}function i(a){a.preventDefault(),$("body").css("overflow","hidden"),$("#nav-bar").css("z-index","0");var b=$(this).attr("href");$("#back_modal").css({position:"absolute",height:$(document).height(),width:$(document).width(),top:"400px",opacity:.8}).fadeIn(1e3),$(b).css($(b).is("#dialog")?{top:"25%",left:"25%"}:{top:"0%",left:"0%"}),$(b).fadeIn(2e3)}function j(a){a.preventDefault(),$("#back_modal, #dialog, #resume-viewer").fadeOut(),$("#nav-bar").css("z-index","1"),$("body").css("overflow","")}function k(){$("#back_modal").css({height:$(document).height(),width:$(document).width()})}$("#intro-screen").css("height",window.outerHeight-25),$(".menu-button").bind("mouseenter",c).bind("mouseleave",b).bind("click",a).bind("click",j),$(".slider-button").bind("click",a),$(window).scroll(d).scroll(h),$("#left-arrow").bind("click",e),$("#right-arrow").bind("click",e),$("a[id=modal-button]").click(i),$("a[id=pdf-button]").click(i),$(".close").click(j),$(window).resize(k)});