$(function(){
  var $li=$("#bd>.bd_body>.new_pro>.first_screen>.nav_left>ul>li");
  var $srot=$("#bd>.bd_body>.new_pro>.first_screen>.nav_left>.nav_pop");
  var $oli=$("#bd>.bd_body>.new_pro>.first_screen");
    // $li.mouseenter(function(){
    //     $li.each(function(i){
    //        $srot.eq(i).stop().show();
    //     })
    // })
    $li.each(function(i){
       
        $li.eq(i).mouseenter(function(){
            $srot.eq(i).show();
            $li.eq(i).css({"border":"2px solid #ff2832","border-right":"#fff","z-index":"999"})
        });
        $li.eq(i).mouseleave(function(){
            // $srot.eq(i).hide();
            $li.eq(i).css({"border":"none"})
        });
    })
 $oli.mouseleave(function(){
     $srot.hide();
 })
  
})