"use strict";$(function(){var o=$("#bd>.bd_body>.new_pro>.first_screen>.nav_left>ul>li"),n=$("#bd>.bd_body>.new_pro>.first_screen>.nav_left>.nav_pop"),e=$("#bd>.bd_body>.new_pro>.first_screen"),s=$("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.slidecontentbox>ul>li"),t=$("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.tab>li"),d=$("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.tehui_box>.sb>ul"),i=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.heard_gg>ul>li"),a=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.content_gg>.content"),l=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg"),b=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.btn"),r=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>ul>li"),c=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul"),_=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul>li"),f=$("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.head>ul>li"),u=$("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.tab_c>div"),m=$("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.tab_c>div>ul>li"),g=$("#bd>.bd_body>.book_new>.tab_box>.head>ul>li"),h=$("#bd>.bd_body>.book_new>.tab_box>.tab_content>.content"),q=$("#bd>.bd_body>.book_new>.foot_tab>.foot_tab_head>ul>li"),v=$("#bd>.bd_body>.book_new>.foot_tab>.foot_tab_content>.content"),C=$("#bd>.bd_body>.floor_tall>.home_screen>.floor_tab>.floor_head_tab>ul>li"),p=$("#bd>.bd_body>.floor_tall>.home_screen>.floor_tab>.floor_content_tab"),y=$("#bd>.bd_body>.gd_top"),w=$("#bd>.bd_body>.fix_box"),x=$("#bd>.bd_body>.fix_box>ul>li");o.each(function(e){o.eq(e).mouseenter(function(){n.eq(e).show(),o.eq(e).css({border:"2px solid #ff2832","border-right":"#fff","z-index":"999"})}),o.eq(e).mouseleave(function(){o.eq(e).css({border:"none"})})}),e.mouseleave(function(){n.hide()});var k=0,I=0,O=0,T=!0;setInterval(function(){I++,++k==s.length&&(k=0),I==d.length&&(I=0),T&&(s.eq(k).fadeIn().siblings().fadeOut(),s.eq(k).addClass("slideshow").siblings().removeClass("slideshow"),t.eq(k).addClass("on").siblings().removeClass("on"),d.eq(I).fadeIn().siblings().fadeOut(),d.eq(I).addClass("Cbanner").siblings().removeClass("Cbanner"))},3e3),t.each(function(e){t.eq(e).mouseenter(function(){T=!1,k=e-1,s.eq(e).fadeIn().siblings().fadeOut(),s.eq(e).addClass("slideshow").siblings().removeClass("slideshow"),t.eq(e).addClass("on").siblings().removeClass("on")}).mouseleave(function(){T=!0})}),setInterval(function(){++O==i.length&&(O=0),i.eq(O).addClass("bg").siblings().removeClass("bg"),a.eq(O).fadeIn().siblings().fadeOut()},3e3),l.mouseenter(function(){b.css({display:"block"}),A=!1}).mouseleave(function(){A=!0,b.css({display:"none"})});var z=0,j=0,A=!0;setInterval(function(){z++,++j==r.length&&(j=0),z==_.length&&(z=1,c.css({left:0})),A&&(c.stop().animate({left:-202*z}),r.eq(j).addClass("red_dot").siblings().removeClass("red_dot"))},3e3),r.each(function(e){r.eq(e).click(function(){A=!1,c.stop().animate({left:-202*e}),r.eq(e).addClass("red_dot").siblings().removeClass("red_dot")}),A=!0});var B=0;setInterval(function(){++B==f.length&&(B=0),f.eq(B).addClass("on").siblings().removeClass("on"),u.eq(B).fadeIn().siblings().fadeOut()},3e3),m.each(function(e){m.eq(e).mouseenter(function(){m.eq(e).stop().animate({right:"10px"})}).mouseleave(function(){m.eq(e).stop().animate({right:"0px"})})}),g.each(function(e){g.eq(e).mouseenter(function(){g.eq(e).addClass("on").siblings().removeClass("on"),h.eq(e).addClass("tab").siblings().removeClass("tab")})}),q.each(function(e){q.eq(e).mouseenter(function(){q.eq(e).addClass("on").siblings().removeClass("on"),v.eq(e).fadeIn().siblings().fadeOut()})}),C.each(function(e){C.eq(e).mouseenter(function(){C.eq(e).addClass("on").siblings().removeClass("on"),p.eq(e).addClass("tab").siblings().removeClass("tab")})}),$(window).scroll(function(){var e=$(this).scrollTop();900<e?y.fadeIn():y.fadeOut(),80<e&&e<4618?w.fadeIn():w.fadeOut(),1176<e&&e<1776?x.eq(0).addClass("current").siblings().removeClass("current"):1776<e&&e<2376?x.eq(1).addClass("current").siblings().removeClass("current"):2376<e&&e<3476?x.eq(2).addClass("current").siblings().removeClass("current"):3476<e&&e<3976?x.eq(3).addClass("current").siblings().removeClass("current"):3976<e&&e<4618?x.eq(4).addClass("current").siblings().removeClass("current"):x.removeClass("current")}),x.each(function(e){x.eq(e).mouseenter(function(){x.eq(e).addClass("on").siblings().removeClass("on")}).mouseleave(function(){x.eq(e).removeClass("on")}),x.eq(0).click(function(){$("body,html").stop().animate({scrollTop:"1176"},800)}),x.eq(1).click(function(){$("body,html").stop().animate({scrollTop:"1776"},800)}),x.eq(2).click(function(){$("body,html").stop().animate({scrollTop:"2376"},800)}),x.eq(3).click(function(){$("body,html").stop().animate({scrollTop:"3476"},800)}),x.eq(4).click(function(){$("body,html").stop().animate({scrollTop:"3976"},800)})})});