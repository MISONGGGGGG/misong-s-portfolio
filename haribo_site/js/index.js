$(document).ready(function(){
    let ww=$(window).width();
    if(ww>=1200){
        box();
    }
    else if((ww<=1199) && (ww>=580)){
        tab_box();
    }
    else{
        m_box;
    }
    $(window).resize(function(){
        box();
        if(ww>=1200){
            box();
        }
        else if((ww<=1199) && (ww>=580)){
            tab_box();
        }
        else{
            m_box();
        }
    })
    function box(){
        ww=$(window).width();
        wh=ww*0.52
        $(".header").css({
            width:ww,
            height:"100px"
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".page_5").css({
            width:ww,
            height:wh*0.5
        })
        $(".img_box").css({
            width:ww,
            height:wh*0.6,
            position: "absolute",
            top: wh*0.1,
            left: 0
        })
        $(".product_menu_wrap").css({
            width:ww*0.8,
            height:ww*0.055,
            position: "absolute",
            top: wh*0.8,
            left: ww*0.1,
            zIndex: 999
        })
        $(".p_name").css({
            fontSize:ww*0.012,
            lineHeight:ww*0.055+"px"
        })
        $(".goldbear").css({
            width:ww*0.12,
            height:ww*0.2,
        })
        $(".pop_up").css({
            width:ww*0.45,
            height:ww*0.3,
            position: "absolute",
            top: wh*0.15,
            left: ww*0.45,
        })
        $(".bear").css({
            width:ww*0.075,
            height:ww*0.126,
        })
        $(".fruit").css({
            width:ww*0.075,
            height:ww*0.063,
        })
        $(".text_con").css({
            fontSize:ww*0.015,
            fontWeight:800,
            lineHeight:wh*0.13+"px"
        })
        $(".pigco").css({
            width:ww*0.075,
            height:"100%",
        })
        $(".con_text").css({
            fontSize:ww*0.012,
            lineHeight:ww*0.055+"px"
        })
        $(".ani_wrap").css({
            width:"100%",
            height:"60%",
            overflow: "hidden",
            position: "relative",
            marginLeft: ww*0.025
        })
        $(".ani_move_box").css({
            width:ww*1.05,
            height:"100%",
            position: "absolute",
            top: 0,
            left: 0
        })
        $(".ani_img_box").css({
            width:ww*0.121,
            height:"100%",
            float: "left",
            marginRight: ww*0.025
        })
        $(".footer").css({
            width:ww,
            height:wh*0.4,
            padding: ww*0.025
        })
        $(".fo_wrap li").css({
            fontSize:ww*0.017,
            lineHeight:ww*0.04+"px",
            fontWeight: 900
        })
        $(".fo_wrap_2 li").css({
            fontSize:ww*0.012,
            lineHeight:ww*0.04+"px"
        })
        $(".sns_img").css({
            fontSize:ww*0.012,
            lineHeight:ww*0.016+"px",
            fontWeight: 900,
        })
        $(".sns_img img").css({
            width:ww*0.025,
            height:ww*0.05
        })
        
// 페이지 이동


$(".top_menu").each(function(index){
    $(this).attr('data-index',index);
}).click(function(){
    let di=$(this).attr('data-index');
    let page_h=$(".page").height();
    $("html,body").animate({
        scrollTop:page_h*di
    })
    $(".top_menu").removeClass("on");
    $(".top_menu").eq(di).addClass("on");


})

// 슬라이드

let auto=setInterval(function(){
    $(".ani_move_box").animate({
        left:-ww*0.146
   },1500,function(){
        $(".ani_img_box").first().appendTo(".ani_move_box");
        $(".ani_move_box").css({
        left:0
    })
   })
},1000)

    }
    function tab_box(){
        ww=$(window).width();
        wh=ww*0.8
        $(".header").css({
            width:ww,
            height:"100px"
        })
        $(".ch_con").css({
            width:ww*0.40,
            height:wh,
            fontSize:ww*0.05,
            lineHeight:ww*0.09+"px",
            fontWeight:800
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".page_5").css({
            width:ww,
            height:wh*0.5
        })
        $(".img_box").css({
            width:ww,
            height:wh*0.7,
            position: "absolute",
            top: wh*0.1,
            left: 0
        })
        $(".product_menu_wrap").css({
            width:ww*0.8,
            height:ww*0.1,
            position: "absolute",
            top: wh*0.835,
            left: ww*0.1,
            zIndex: 999
        })
        $(".p_name").css({
            fontSize:ww*0.015,
            lineHeight:ww*0.1+"px"
        })
        $(".goldbear").css({
            width:ww*0.24,
            height:ww*0.4,
        })
        $(".pop_up").css({
            width:ww*0.6,
            height:ww*0.45,
            position: "absolute",
            top: wh*0.1,
            left: ww*0.2,
        })
        $(".bear").css({
            width:ww*0.075,
            height:ww*0.126,
        })
        $(".fruit").css({
            width:ww*0.075,
            height:ww*0.063,
        })
        $(".text_con").css({
            fontSize:ww*0.018,
            fontWeight:800,
            lineHeight:wh*0.13+"px"
        })
        $(".pigco").css({
            width:ww*0.075,
            height:"100%",
        })
        $(".con_text").css({
            fontSize:ww*0.018,
            lineHeight:wh*0.1+"px"
        })
        $(".ani_wrap").css({
            width:"100%",
            height:"60%",
            overflow: "hidden",
            position: "relative",
            marginLeft: ww*0.025
        })
        $(".ani_move_box").css({
            width:ww*1.05,
            height:"100%",
            position: "absolute",
            top: 0,
            left: 0
        })
        $(".ani_img_box").css({
            width:ww*0.121,
            height:"100%",
            float: "left",
            marginRight: ww*0.025
        })
        $(".footer").css({
            width:ww,
            height:wh*0.4,
            padding: ww*0.025
        })
        $(".fo_wrap li").css({
            fontSize:ww*0.02,
            lineHeight:ww*0.04+"px",
            fontWeight: 900
        })
        $(".fo_wrap_2 li").css({
            fontSize:ww*0.02,
            lineHeight:ww*0.04+"px"
        })
        $(".sns_img").css({
            fontSize:ww*0.02,
            lineHeight:ww*0.016+"px",
            fontWeight: 900,
        })
        $(".sns_img img").css({
            width:ww*0.06,
            height:ww*0.12
        })

        // 탭메뉴 이동
        $(".tap_menu").each(function(index){
            $(this).attr('data-index',index);
        }).click(function(){
            let di=$(this).attr('data-index');
            let page_h=$(".page").height();
            $("html,body").animate({
                scrollTop:page_h*di
            })
            $(".tap_menu").removeClass("on");
            $(".tap_menu").eq(di).addClass("on");
        })
        // 슬라이드

        let auto=setInterval(function(){
            $(".ani_move_box").animate({
                left:-ww*0.121
           },1500,function(){
                $(".ani_img_box").first().appendTo(".ani_move_box");
                $(".ani_move_box").css({
                left:0
            })
           })
        },1000)
    }
    function m_box(){
        ww=$(window).width();
        wh=ww*1.8
        $(".header").css({
            width:ww,
            height:"100px"
        })
        $(".ch_con").css({
            width:ww,
            height:wh*0.5,
            fontSize:ww*0.1,
            lineHeight:ww*0.15+"px",
            fontWeight:800
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".page_5").css({
            width:ww,
            height:wh*0.5
        })
        $(".img_box").css({
            width:ww,
            height:wh*0.8,
            position: "absolute",
            top: wh*0.1,
            left: 0
        })
        $(".product_menu_wrap").css({
            width:ww*0.8,
            height:ww*0.1,
            position: "absolute",
            top: wh*0.835,
            left: ww*0.1,
            zIndex: 999
        })
        $(".p_name").css({
            fontSize:ww*0.015,
            lineHeight:ww*0.1+"px"
        })
        $(".goldbear").css({
            width:ww*0.48,
            height:ww*0.8,
        })
        $(".pop_up").css({
            width:ww*0.9,
            height:ww*0.6,
            position: "absolute",
            top: wh*0.15,
            left: 0,
        })
        $(".bear").css({
            width:ww*0.5,
            height:ww*0.8,
        })
        $(".fruit").css({
            width:ww*0.2,
            height:ww*0.2,
            paddingLeft:ww*0.05,
            paddingRight:ww*0.05,
        })
        $(".text_con").css({
            fontSize:ww*0.018,
            fontWeight:800,
            lineHeight:wh*0.13+"px"
        })
        $(".pigco").css({
            width:ww*0.2,
            height:"100%",
        })
        $(".con_text").css({
            fontSize:ww*0.04,
            lineHeight:wh*0.05+"px"
        })
        $(".con_text_long").css({
            fontSize:ww*0.04,
            lineHeight:wh*0.03+"px"
        })
        $(".ani_wrap").css({
            width:"100%",
            height:"60%",
            overflow: "hidden",
            position: "relative",
            marginLeft: ww*0.025
        })
        $(".ani_move_box").css({
            width:ww*2.4,
            height:"100%",
            position: "absolute",
            top: 0,
            left: 0
        })
        $(".ani_img_box").css({
            width:ww*0.3,
            height:"100%",
            float: "left",
            marginRight: ww*0.025
        })
        $(".footer").css({
            width:ww,
            height:wh*0.4,
            padding: ww*0.025
        })
        $(".fo_wrap li").css({
            fontSize:ww*0.04,
            lineHeight:ww*0.05+"px",
            fontWeight: 900
        })
        $(".fo_wrap_2 li").css({
            fontSize:ww*0.04,
            lineHeight:ww*0.05+"px"
        })
        $(".sns_img").css({
            fontSize:ww*0.04,
            lineHeight:ww*0.04+"px",
            fontWeight: 900,
        })
        $(".sns_img img").css({
            width:ww*0.06,
            height:ww*0.12
        })

        // 탭메뉴 이동
        $(".tap_menu").each(function(index){
            $(this).attr('data-index',index);
        }).click(function(){
            let di=$(this).attr('data-index');
            let page_h=$(".page").height();
            $("html,body").animate({
                scrollTop:page_h*di
            })
            $(".tap_menu").removeClass("on");
            $(".tap_menu").eq(di).addClass("on");
        })
        // 슬라이드

        let auto=setInterval(function(){
            $(".ani_move_box").animate({
                left:-ww*0.325
           },1500,function(){
                $(".ani_img_box").first().appendTo(".ani_move_box");
                $(".ani_move_box").css({
                left:0
            })
           })
        },1000)
        
    }





// 1페이지 배경화면 색 전환
let bg=['goldenrod','yellowgreen','orange','darkblue'];
let img=[".img_box"];
$(".page_1").css({
    background:function(index){
        return bg[index]
    }
})
$(".product_button").click(function(){
let but_i=$(this).index();

$(".page_1").css({
    background:function(index){
        return bg[but_i]
    }
})

})

//팝업창
$(".product_button_1").click(function(){
    $(".pop_up,.img_box").fadeOut();
    $(".pop_up_1,.img_box_1").fadeIn(500);
})
$(".product_button_2").click(function(){
    $(".pop_up,.img_box").fadeOut();
    $(".pop_up_2,.img_box_2").fadeIn(500);
    
})
$(".product_button_3").click(function(){
    $(".pop_up,.img_box").fadeOut();
    $(".pop_up_3,.img_box_3").fadeIn(500); 
})
$(".product_button_4").click(function(){
    $(".pop_up,.img_box").fadeOut();
    $(".pop_up_4,.img_box_4").fadeIn(500);

})


// 2페이지 효과
$(window).scroll(function(){
    st=$(this).scrollTop();
    page_h=$(".page_1").height();
    if(700 < st){
        $('.wrap').animate({
            top: 0
        }, 2000)
    }
    if(st>page_h){
        $(".top_menu_wrap a").css({
            color:"black"
        })
    }
    else if(st<=page_h){
        $(".top_menu_wrap a").css({
            color:"white"
        })
    }
})












})