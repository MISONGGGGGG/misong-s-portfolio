$(document).ready(function(){

    function updateStyles() {
        let ww = $(window).width();
        let wh = ww * 0.56;
        let wh_t = ww * 1.4;
        let wh_m = ww * 1.8;
if(ww>=1400){
        ww=$(window).width();
        wh=ww*0.56;
    
        $(".wrap").css({
            width:ww,
            height:wh*5
        })
        $("section").css({
            width:ww,
            height:wh,
        })
        $(".sunjung_2,footer").css({
            width:ww,
            height:wh*0.5
        })
        $(".product_section").css({
            width:"100%",
            height:"50%"
        })
        $("h2").css({
            width:"100%",
            height:"15%",
            fontSize:ww*0.078,
            position:"absolute",
            bottom:ww*0.1,
        })
        $("h3").css({
            width:ww*0.3,
            height:ww*0.05,
            fontSize:ww*0.025,
            lineHeight:ww*0.05+"px"
        })
        $(".product_wrap").css({
            width:ww,
            height:ww*0.2
        })
        $(".product").css({
            width:ww*0.15,
            height:ww*0.2
        })
        $(".product_img").css({
            width:ww*0.15,
            height:ww*0.15
        })
        $(".product_info").css({
            width:ww*0.15,
            height:ww*0.05
        })
        $(".product_info p").css({
            width:"100%",
            height:"50%",
            fontSize:ww*0.009,
            lineHeight:ww*0.025+"px"
        })
        $(".soonjung_le").css({
            width:"44%",
            height:"100%"
        })
        $(".soonjung_ri").css({
            width:"56%",
            height:"100%",
            left:ww*0.44
        })
        $(".soon_title").css({
            width:"25%",
            height:"10%",
        })
        $(".soon_title p").css({
            display:"block",
            width:"27%",
            height:"20%",
            fontSize:ww*0.008,
            position: "absolute",
            top: 0,
            right:0
        })
        $("h4").css({
            width:"90%",
            height:"80%",
            fontSize:ww*0.035,
            position: "absolute",
            top: "15%",
            right:0
        })
        $(".makeup_view").css({
            width:ww*0.25,
            height:ww*0.1
        })
        $(".makeup_p_1").css({
            fontSize:ww*0.012
        })
        $(".makeup_p_2").css({
            fontSize:ww*0.017
        })
        $(".makeup_p_3").css({
            width:ww*0.075,
            height:ww*0.022,
            fontSize:ww*0.01,
            textAlign:"center",
            lineHeight:ww*0.022+"px"
        })
        $(".p_club_1").css({
            width:ww*0.13,
            height:ww*0.015,
            fontSize:ww*0.008
        })
        $("h5").css({
            width:ww*0.5,
            height:ww*0.07,
            fontSize:ww*0.06,
            lineHeight:ww*0.07+"px",
        })
        $(".h5_2").css({
            width:ww*0.185
        })
        $(".makeup_p_4").css({
            width:ww*0.07,
            height:ww*0.015,
            fontSize:ww*0.008
        })
        $("footer").css({
            padding:ww*0.026,
            boxSizing:"border-box",
            fontSize:ww*0.008
        })
        $(".con_2 li").css({
            width:"100%",
            height:ww*0.1,
        })
        $(".content").css({
            fontSize:ww*0.012,
            textAlign:"center"
        })
        $(".con_3").css({
            fontSize:ww*0.007,
        })
    }
    else if(ww<1400 && ww>=1025){
        ww=$(window).width();
        wh=ww*0.56;
    
        $(".wrap").css({
            width:ww,
            height:wh*5
        })
        $("section").css({
            width:ww,
            height:wh,
        })
        $(".sunjung_2,footer").css({
            width:ww,
            height:wh*0.5
        })
        $(".product_section").css({
            width:"100%",
            height:"50%"
        })
        $("h2").css({
            width:"100%",
            height:"15%",
            fontSize:ww*0.078,
            position:"absolute",
            bottom:ww*0.1,
        })
        $("h3").css({
            width:ww*0.3,
            height:ww*0.05,
            fontSize:ww*0.025,
            lineHeight:ww*0.05+"px"
        })
        $(".product_wrap").css({
            width:ww,
            height:ww*0.2
        })
        $(".product").css({
            width:ww*0.15,
            height:ww*0.2
        })
        $(".product_img").css({
            width:ww*0.13,
            height:ww*0.13,
        })
        $(".product_info").css({
            width:ww*0.15,
            height:ww*0.05
        })
        $(".product_info p").css({
            width:"100%",
            height:"50%",
            fontSize:ww*0.0108,
            lineHeight:ww*0.025+"px"
        })
        $(".soonjung_le").css({
            width:"44%",
            height:"100%"
        })
        $(".soonjung_ri").css({
            width:"56%",
            height:"100%",
            left:ww*0.44
        })
        $(".soon_title").css({
            width:"25%",
            height:"10%",
        })
        $(".soon_title p").css({
            display:"block",
            width:"27%",
            height:"20%",
            fontSize:ww*0.008,
            position: "absolute",
            top: 0,
            right:0
        })
        $("h4").css({
            width:"90%",
            height:"80%",
            fontSize:ww*0.035,
            position: "absolute",
            top: "15%",
            right:0
        })
        $(".makeup_view").css({
            width:ww*0.25,
            height:ww*0.1
        })
        $(".makeup_p_1").css({
            fontSize:ww*0.012
        })
        $(".makeup_p_2").css({
            fontSize:ww*0.017
        })
        $(".makeup_p_3").css({
            width:ww*0.075,
            height:ww*0.022,
            fontSize:ww*0.01,
            textAlign:"center",
            lineHeight:ww*0.022+"px"
        })
        $(".p_club_1").css({
            width:ww*0.13,
            height:ww*0.015,
            fontSize:ww*0.008
        })
        $("h5").css({
            width:ww*0.5,
            height:ww*0.07,
            fontSize:ww*0.06,
            lineHeight:ww*0.07+"px",
        })
        $(".h5_2").css({
            width:ww*0.185
        })
        $(".makeup_p_4").css({
            width:ww*0.07,
            height:ww*0.015,
            fontSize:ww*0.008
        })
        $("footer").css({
            padding:ww*0.026,
            boxSizing:"border-box",
            fontSize:ww*0.008
        })
        $(".con_2 li").css({
            width:"100%",
            height:ww*0.1,
        })
        $(".content").css({
            fontSize:ww*0.012,
            textAlign:"center"
        })
        $(".con_3").css({
            fontSize:ww*0.007,
        })
    }
    else if(ww<1025 && ww>=481 ){
        ww=$(window).width();
        wh_t=ww*1.4;
    
        $(".wrap").css({
            width:ww,
            height:wh_t*5
        })
        $("section").css({
            width:ww,
            height:wh_t,
        })
        $(".sunjung_2").css({
            width:ww,
            height:wh_t*0.5
        })
        $(".product_section").css({
            width:"100%",
            height:"50%"
        })
        $("h2").css({
            width:"100%",
            height:"15%",
            fontSize:ww*0.078,
            position:"absolute",
            bottom:ww*0.1,
        })
        $("h3").css({
            width:ww,
            height:wh_t*0.1,
            fontSize:ww*0.05,
            lineHeight:ww*0.05+"px"
        })
        $(".product_wrap").css({
            width:ww*2.5,
            height:wh_t*0.4
        })
        $(".product").css({
            width:ww*0.5,
            height:wh_t*0.4,
            marginRight: ww*0.05,
            marginLeft: ww*0.05
        })
        $(".product_img").css({
            width:ww*0.4,
            height:ww*0.4,
        })
        $(".soonjung_ri").css({
            width:"100%",
            height:"100%"
        })
        $(".soon_title").css({
            width:"100%",
            height:"20%",
        })
        $(".soon_title p").css({
            display:"block",
            width:"50%",
            height:"20%",
            fontSize:ww*0.04,
            marginLeft: ww*0.55,
        })
        $(".sunjung_2 h3").css({
            fontSize:ww*0.055,
        })
        $("h4").css({
            width:"50%",
            height:"80%",
            fontSize:ww*0.1,
            marginLeft: ww*0.20,
            marginBottom: -ww*0.1
        })
        $(".makeup_view").css({
            width:"100%",
            height:wh_t*0.65,
            paddingTop: wh_t*0.4
        })
        $(".makeup_p_1").css({
            fontSize:ww*0.03
        })
        $(".makeup_p_2").css({
            fontSize:ww*0.08
        })
        $(".makeup_p_3").css({
            width:ww*0.25,
            height:ww*0.08,
            fontSize:ww*0.04,
            textAlign:"center",
            lineHeight:ww*0.075+"px"
        })
        $("footer").css({
            width:ww,
            height:wh_t*0.3,
            padding:ww*0.026,
            boxSizing:"border-box",
            fontSize:ww*0.008
        })
        $(".con_1>p").css({
            width:ww*0.3,
            height:ww*0.08,
            fontSize:ww*0.02,
        })
        $(".fo_cont_1>li").css({
            width:ww*0.45,
            height:ww*0.02,
            fontSize:ww*0.02,
        })
        $(".con_3").css({
            fontSize:ww*0.02,
        })
    }
    else{
        ww=$(window).width();
        wh_m=ww*1.8;
    
        $(".wrap").css({
            width:ww,
            height:wh_m*5
        })
        $("section").css({
            width:ww,
            height:wh_m,
        })
        $(".sunjung_2").css({
            width:ww,
            height:wh_m*0.5
        })
        $(".product_section").css({
            width:"100%",
            height:"50%"
        })
        $("h2").css({
            width:"100%",
            height:"15%",
            fontSize:ww*0.078,
            position:"absolute",
            bottom:ww*0.1,
        })
        $("h3").css({
            width:ww,
            height:wh_m*0.1,
            fontSize:ww*0.05,
            lineHeight:ww*0.05+"px"
        })
        $(".product_wrap").css({
            width:ww*2.5,
            height:wh_m*0.4
        })
        $(".product").css({
            width:ww*0.5,
            height:wh_m*0.4,
            marginRight: ww*0.05,
            marginLeft: ww*0.05
        })
        $(".product_img").css({
            width:ww*0.4,
            height:ww*0.4,
        })
        $(".soonjung_ri").css({
            width:"100%",
            height:"100%"
        })
        $(".soon_title").css({
            width:"100%",
            height:"20%",
        })
        $(".soon_title p").css({
            display:"block",
            width:"50%",
            height:"20%",
            fontSize:ww*0.04,
            marginLeft: ww*0.55,
        })
        $(".sunjung_2 h3").css({
            fontSize:ww*0.055,
        })
        $("h4").css({
            width:"50%",
            height:"80%",
            fontSize:ww*0.1,
            marginLeft: ww*0.20,
            marginBottom: -ww*0.1
        })
        $(".makeup_view").css({
            width:"100%",
            height:wh_m*0.65,
            paddingTop: wh_m*0.4
        })
        $(".makeup_p_1").css({
            fontSize:ww*0.03
        })
        $(".makeup_p_2").css({
            fontSize:ww*0.08
        })
        $(".makeup_p_3").css({
            width:ww*0.25,
            height:ww*0.08,
            fontSize:ww*0.04,
            textAlign:"center",
            lineHeight:ww*0.075+"px"
        })
        $("footer").css({
            width:ww,
            height:wh_m*0.3,
            padding:ww*0.026,
            boxSizing:"border-box",
            fontSize:ww*0.008
        })
        $(".con_1>p").css({
            width:ww*0.3,
            height:ww*0.08,
            fontSize:ww*0.02,
        })
        $(".fo_cont_1>li").css({
            width:ww*0.45,
            height:ww*0.02,
            fontSize:ww*0.02,
        })
        $(".con_3").css({
            fontSize:ww*0.02,
        })
    }
}

updateStyles(); 
    $(window).resize(updateStyles);

$(window).scroll(function(){
    st=$(this).scrollTop();
    page_h=$(".main_page").height();
    if(st>page_h){
        $("header").addClass("on");
    }
    else if(st<=page_h){
        $("header").removeClass("on");
    }
})

$(".mo_menu_i").click(function(){
    $(".mo_menu").fadeToggle(1000);
});



    var t = 0;
    var banners = $(".main_page .main_banner");
    var totalBanners = banners.length;

    banners.hide(); 


    function slide() {
        var nextIndex = (t + 1) % totalBanners; 

        banners.eq(t).fadeOut(800, function () {
            var nextBanner = banners.eq(nextIndex);
            nextBanner.fadeIn(800); 

            
            var imgs = nextBanner.find("img");
            imgs.hide();
            imgs.each(function (index) {
                $(this).delay(800 * index).fadeIn(800); 
            });
        });

        t = nextIndex; 
    }
    slide(true);
    setInterval(slide, 5000);


    let ww = $(window).width();
    let currentIndex = 0;
    let productCount = 4; // 슬라이드 횟수 4번 + 5번째는 처음으로 리셋
    let productWidth = ww * 0.5; // 개별 product의 너비

    function slideProducts() {
        if (ww < 1025) {
            let moveX = productWidth * currentIndex * -1;

            $(".product_wrap").css({
                transform: `translateX(${moveX}px)`,
                transition: "transform 0.8s ease-in-out"
            });

            currentIndex++;

            // 🚀 **5번째 슬라이드에서 처음으로 돌아감**
            if (currentIndex === productCount) {
                setTimeout(() => {
                    $(".product_wrap").css({
                        transform: "translateX(0px)",
                        transition: "none" // 부드럽게 처음으로 이동
                    });
                    currentIndex = 0;
                }, 900);
            }
        }
    }

    if (ww < 1025) {
        slideProducts(true);
        setInterval(slideProducts, 3000);
    }

    $(window).resize(function () {
        ww = $(window).width();
        productWidth = ww * 0.5;
        if (ww >= 1025) {
            $(".product_wrap").css({ transform: "translateX(0px)" });
        }
    });

    


})
