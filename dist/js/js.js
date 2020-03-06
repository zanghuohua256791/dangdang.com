$(function () {
    var $li = $("#bd>.bd_body>.new_pro>.first_screen>.nav_left>ul>li");
    var $srot = $("#bd>.bd_body>.new_pro>.first_screen>.nav_left>.nav_pop");
    var $oli = $("#bd>.bd_body>.new_pro>.first_screen");
    var $solidimg = $("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.slidecontentbox>ul>li");
    var $tab = $("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.tab>li");
    var $Cbanner=$("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.tehui_box>.sb>ul");
    var $bg=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.heard_gg>ul>li");
    var $content=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.content_gg>.content");
    var $banner_gg=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg");
    var $btn=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.btn");
    var $red_dot=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>ul>li");
    var $over=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul");
    var $over_li=$("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul>li");

    // console.log($red_dot);


    // 鼠标移入显示nav列表
    $li.each(function (i) {
        $li.eq(i).mouseenter(function () {
            $srot.eq(i).show();
            $li.eq(i).css({ "border": "2px solid #ff2832", "border-right": "#fff", "z-index": "999" })
        });
        $li.eq(i).mouseleave(function () {
            // $srot.eq(i).hide();
            $li.eq(i).css({ "border": "none" })
        });
    });
    // 鼠标出隐藏nav列表
    $oli.mouseleave(function () {
        $srot.hide();
    });

    // 图片自动轮播
    var count = 0;
    var Count=0;
    var bg_conut=0;
    var flag = true;
    setInterval(function () {
        count++;
        Count++;
        if (count == $solidimg.length) {
            count = 0;
        }
        if (Count == $Cbanner.length) {
            Count = 0;
        }
        if (flag) {
            // 大图区域轮播
            $solidimg.eq(count).fadeIn()
                .siblings().fadeOut();
            $solidimg.eq(count).addClass("slideshow").siblings().removeClass("slideshow");
            $tab.eq(count).addClass("on").siblings().removeClass("on");
             // 小图区域轮播
            $Cbanner.eq(Count).fadeIn()
            .siblings().fadeOut();
            $Cbanner.eq(Count).addClass("Cbanner").siblings().removeClass("Cbanner");
        }
    }, 3000);


    // 鼠标移入小图标开始轮播
    $tab.each(function (index) {
        $tab.eq(index).mouseenter(function () {
            flag = false;
            count = index - 1;
            $solidimg.eq(index).fadeIn()
                .siblings().fadeOut();
            $solidimg.eq(index).addClass("slideshow").siblings().removeClass("slideshow");
            $tab.eq(index).addClass("on").siblings().removeClass("on");
        }).mouseleave(function () {
            flag = true;
        })
    })

// 公告部分轮播
    setInterval(function () {
        bg_conut++;
        if (bg_conut == $bg.length) {
            bg_conut = 0;
        }
       $bg.eq(bg_conut).addClass("bg").siblings().removeClass("bg");
       $content.eq(bg_conut).fadeIn().siblings().fadeOut();
    }, 3000);

// 鼠标移入banner_gg区让按钮出现
    $banner_gg.mouseenter(function(){
        $btn.css({"display":"block"});
        f=false;
    }).mouseleave(function(){
        f=true;
        $btn.css({"display":"none"});
    });
    // banner_gg自动轮播
    var c=0;
    var cc=0;
    var f=true;
    setInterval(function(){
        c++;
        cc++;
        if(cc==$red_dot.length){
            cc=0;
        }
        if(c==$over_li.length){
            c=1;
            $over.css({"left":0});
        }
        
        if(f){
            $over.stop().animate({"left":-(c*202)});
            $red_dot.eq(cc).addClass("red_dot").siblings().removeClass("red_dot");
        }
       
    },3000);

    $red_dot.each(function(i){
        $red_dot.eq(i).click(function(){
            f=false;
            $over.stop().animate({"left":-(i*202)});
            $red_dot.eq(i).addClass("red_dot").siblings().removeClass("red_dot");
        });
        f=true;
    });
   

    
})


