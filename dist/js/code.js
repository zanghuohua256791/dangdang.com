"use strict";

var $yes = $("#bd>.body>table>tbody>tr>.z_index2>.yes");
var $wrong = $("#bd>.body>table>tbody>tr>.z_index2>.wrong");
var $codeInput = $("#bd>.body>table>tbody>tr>td>.code");
$(document).ready(function () {
  //我写的验证码 
  //验证码 
  var code;

  function createCode() {
    code = ''; //首先默认code为空字符串 

    var codeLength = 4; //设置长度，这里看需求，我这里设置了4 

    var codeV = $("#bd>.body>table>tbody>tr>td>.code_input"); //设置随机字符 

    var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    for (var i = 0; i < codeLength; i++) {
      //循环codeLength 我设置的4就是循环4次   
      var index = Math.floor(Math.random() * 36); //设置随机数范围,这设置为0 ~ 36  

      code += random[index]; //字符串拼接 将每次随机的字符 进行拼接 
    }

    codeV.text(code); //将拼接好的字符串赋值给展示的Value 
  } //页面开始加载验证码 


  createCode(); //    //验证码Div加载点击事件 

  $("#bd>.body>table>tbody>tr>td>.code_input").bind('click', function () {
    createCode();
  });
  $codeInput.keyup(function () {
    if ($codeInput.val().length >= 4) {
      if ($codeInput.val() == $("#bd>.body>table>tbody>tr>td>.code_input").text()) {
        $yes.show();
        $wrong.hide();
      } else {
        $yes.hide();
        $wrong.show();
      }
    } else {
      $yes.hide(); // $wrong.hide();
    }
  });
});