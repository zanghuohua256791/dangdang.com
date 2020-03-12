"use strict";

$(function () {
  var $li = $("#bd>.bd_body>.new_pro>.first_screen>.nav_left>ul");
  var $srot = $("#bd>.bd_body>.new_pro>.first_screen>.nav_left>.nav_pop");
  var $oli = $("#bd>.bd_body>.new_pro>.first_screen");
  var $solidimg = $("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.slidecontentbox>ul>li");
  var $tab = $("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.focus_box>.tab>li");
  var $Cbanner = $("#bd>.bd_body>.new_pro>.first_screen>.home_circle>.tehui_box>.sb>ul");
  var $bg = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.heard_gg>ul>li");
  var $content = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.content_gg>.content");
  var $banner_gg = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg");
  var $btn = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.btn");
  var $red_dot = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>ul>li");
  var $over = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul");
  var $over_li = $("#bd>.bd_body>.new_pro>.first_screen>.home_notice>.home_notice_gg>.banner_gg>.over>ul>li");
  var $fire_week_li = $("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.head>ul>li");
  var $tab_c_div = $("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.tab_c>div");
  var $tab_c_li = $("#bd>.bd_body>.taday_flash_box>.con>.fire_week>.tab_c>div>ul>li");
  var $book_new_head = $("#bd>.bd_body>.book_new>.tab_box>.head>ul>li");
  var $book_new_content = $("#bd>.bd_body>.book_new>.tab_box>.tab_content>.content");
  var $foot_tab_head = $("#bd>.bd_body>.book_new>.foot_tab>.foot_tab_head>ul>li");
  var $foot_tab_content = $("#bd>.bd_body>.book_new>.foot_tab>.foot_tab_content>.content");
  var $floor_head_li = $("#bd>.bd_body>.floor_tall>.home_screen>.floor_tab>.floor_head_tab>ul>li");
  var $floor_content_tab = $("#bd>.bd_body>.floor_tall>.home_screen>.floor_tab>.floor_content_tab");
  var $gd_top = $("#bd>.bd_body>.gd_top");
  var $fix_box = $("#bd>.bd_body>.fix_box");
  var $fix_list = $("#bd>.bd_body>.fix_box>ul>li"); // console.log($fix_box);
  // 鼠标移入显示nav列表

  // $li.each(function (i) {
  //   $li.eq(i).mouseenter(function () {
  //     $srot.eq(i).show();
  //     $li.eq(i).css({
  //       "border": "2px solid #ff2832",
  //       "border-right": "#fff",
  //       "z-index": "999"
  //     });
  //   });
  //   $li.eq(i).mouseleave(function () {
  //     // $srot.eq(i).hide();
  //     $li.eq(i).css({
  //       "border": "none"
  //     });
  //   });
  // }); // 鼠标出隐藏nav列表
  $li.mouseenter(function(){
    $srot.show();
  })

  $oli.mouseleave(function () {
    $srot.hide();
  }); // 图片自动轮播

  var count = 0;
  var Count = 0;
  var bg_conut = 0;
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
      $solidimg.eq(count).fadeIn().siblings().fadeOut();
      $solidimg.eq(count).addClass("slideshow").siblings().removeClass("slideshow");
      $tab.eq(count).addClass("on").siblings().removeClass("on"); // 小图区域轮播

      $Cbanner.eq(Count).fadeIn().siblings().fadeOut();
      $Cbanner.eq(Count).addClass("Cbanner").siblings().removeClass("Cbanner");
    }
  }, 3000); // 鼠标移入小图标开始轮播

  $tab.each(function (index) {
    $tab.eq(index).mouseenter(function () {
      flag = false;
      count = index - 1;
      $solidimg.eq(index).fadeIn().siblings().fadeOut();
      $solidimg.eq(index).addClass("slideshow").siblings().removeClass("slideshow");
      $tab.eq(index).addClass("on").siblings().removeClass("on");
    }).mouseleave(function () {
      flag = true;
    });
  }); // 公告部分轮播

  setInterval(function () {
    bg_conut++;

    if (bg_conut == $bg.length) {
      bg_conut = 0;
    }

    $bg.eq(bg_conut).addClass("bg").siblings().removeClass("bg");
    $content.eq(bg_conut).fadeIn().siblings().fadeOut();
  }, 3000); // 鼠标移入banner_gg区让按钮出现

  $banner_gg.mouseenter(function () {
    $btn.css({
      "display": "block"
    });
    f = false;
  }).mouseleave(function () {
    f = true;
    $btn.css({
      "display": "none"
    });
  }); // banner_gg自动轮播

  var c = 0;
  var cc = 0;
  var f = true;
  setInterval(function () {
    c++;
    cc++;

    if (cc == $red_dot.length) {
      cc = 0;
    }

    if (c == $over_li.length) {
      c = 1;
      $over.css({
        "left": 0
      });
    }

    if (f) {
      $over.stop().animate({
        "left": -(c * 202)
      });
      $red_dot.eq(cc).addClass("red_dot").siblings().removeClass("red_dot");
    }
  }, 3000);
  $red_dot.each(function (i) {
    $red_dot.eq(i).click(function () {
      f = false;
      $over.stop().animate({
        "left": -(i * 202)
      });
      $red_dot.eq(i).addClass("red_dot").siblings().removeClass("red_dot");
    });
    f = true;
  }); //    厂商周轮播

  var $fire_week_li_count = 0;
  setInterval(function () {
    $fire_week_li_count++;

    if ($fire_week_li_count == $fire_week_li.length) {
      $fire_week_li_count = 0;
    }

    $fire_week_li.eq($fire_week_li_count).addClass("on").siblings().removeClass("on");
    $tab_c_div.eq($fire_week_li_count).fadeIn().siblings().fadeOut();
  }, 3000); // 鼠标移入厂商周区,图片发生变化.

  $tab_c_li.each(function (i) {
    $tab_c_li.eq(i).mouseenter(function () {
      $tab_c_li.eq(i).stop().animate({
        "right": "10px"
      });
    }).mouseleave(function () {
      $tab_c_li.eq(i).stop().animate({
        "right": "0px"
      });
    });
  }); // 鼠标移入网络文学区域切换列表

  $book_new_head.each(function (i) {
    $book_new_head.eq(i).mouseenter(function () {
      $book_new_head.eq(i).addClass("on").siblings().removeClass("on");
      $book_new_content.eq(i).addClass("tab").siblings().removeClass("tab");
    });
  }); // 鼠标移入图书畅销榜区域切换列表

  $foot_tab_head.each(function (i) {
    $foot_tab_head.eq(i).mouseenter(function () {
      $foot_tab_head.eq(i).addClass("on").siblings().removeClass("on");
      $foot_tab_content.eq(i).fadeIn().siblings().fadeOut();
    });
  }); // 服装区tab切换

  $floor_head_li.each(function (i) {
    $floor_head_li.eq(i).mouseenter(function () {
      $floor_head_li.eq(i).addClass("on").siblings().removeClass("on");
      $floor_content_tab.eq(i).addClass("tab").siblings().removeClass("tab");
    });
  }); // 固定头部搜索框和跟踪框的出现与隐藏

  $(window).scroll(function () {
    var st = $(this).scrollTop(); // console.log(st);

    if (st > 900) {
      $gd_top.fadeIn();
    } else {
      $gd_top.fadeOut();
    }

    if (st > 80 && st < 4618) {
      $fix_box.fadeIn();
    } else {
      $fix_box.fadeOut();
    }

    if (st > 1176 && st < 1776) {
      $fix_list.eq(0).addClass("current").siblings().removeClass("current");
    } else if (st > 1776 && st < 2376) {
      $fix_list.eq(1).addClass("current").siblings().removeClass("current");
    } else if (st > 2376 && st < 3476) {
      $fix_list.eq(2).addClass("current").siblings().removeClass("current");
    } else if (st > 3476 && st < 3976) {
      $fix_list.eq(3).addClass("current").siblings().removeClass("current");
    } else if (st > 3976 && st < 4618) {
      $fix_list.eq(4).addClass("current").siblings().removeClass("current");
    } else {
      $fix_list.removeClass("current");
    }
  }); // 跟踪框的鼠标移入移除事件

  $fix_list.each(function (i) {
    $fix_list.eq(i).mouseenter(function () {
      $fix_list.eq(i).addClass("on").siblings().removeClass("on");
    }).mouseleave(function () {
      $fix_list.eq(i).removeClass("on");
    });
    $fix_list.eq(0).click(function () {
      $("body,html").stop().animate({
        "scrollTop": "1176"
      }, 800);
    });
    $fix_list.eq(1).click(function () {
      $("body,html").stop().animate({
        "scrollTop": "1776"
      }, 800);
    });
    $fix_list.eq(2).click(function () {
      $("body,html").stop().animate({
        "scrollTop": "2376"
      }, 800);
    });
    $fix_list.eq(3).click(function () {
      $("body,html").stop().animate({
        "scrollTop": "3476"
      }, 800);
    });
    $fix_list.eq(4).click(function () {
      $("body,html").stop().animate({
        "scrollTop": "3976"
      }, 800);
    });
  });
});