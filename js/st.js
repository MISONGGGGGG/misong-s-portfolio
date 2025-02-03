$(document).ready(function(){
    
    let ww=$(window).width();
    if(ww>=1280){
        box();
    }
    else{
        m_box();
    }
    
    $(window).resize(function(){
        let ww=$(window).width();
        box();
        if(ww>=1280){
            box();
        }
        else{
            m_box();
        }
    })

    


    function box(){
        ww=$(window).width();
        wh=ww*0.52

        // 부모 사이즈
        $(".wrap, .page_wrap, .about_page_wrap").css({ 
            overflow: "visible" 
        });
        $(".wrap").css({
            width:ww,
            height:wh*14.3
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".page_wrap").css({
            width:ww,
            height:wh*5
        })
        $(".about_page_wrap").css({
            width:ww,
            height:wh*2
        })
        // 부모 사이즈 끝

        // 탭 사이즈 시작
        $(".tab_icon").css({
            width:ww*0.052,
            height:ww*0.042,
            top:ww*0.01,
            right:ww*0.01
        })
        $(".tab_menu").css({ 
            width:ww,
            height:wh
        })
        $("h2").css({
            fontSize: ww*0.02
        })
        $(".tab_circle").css({
            width:ww*0.5,
            height:wh
        })
        // 탭 사이즈 끝

        // 메인 사이즈 시작
        $(".title").css({
            width:ww*0.5,
            height:ww*0.1,
            fontSize:ww*0.036
        })
       
        $(".start").css({
            width:ww*0.078,
            height:ww*0.026,
            fontSize:ww*0.012,
            lineHeight:ww*0.026+'px',
            marginLeft:-ww*0.039,
            borderRadius: ww*0.078,
            
        })
        // 메인 사이즈 끝

        // 프로젝트 사이즈 시작
        $(".project_wrap").css({
            width:ww,
            height: wh*0.5
        })
        $(".move_box").css({
            width:ww*4,
            height:wh*0.5
        })
        $(".project").css({
            width:ww*0.3,
            height:ww*0.15,
            marginLeft:ww*0.2
        })
        // 프로젝트 사이즈 끝

        // 소개 사이즈 시작
        $(".gear_wrap").css({
            width:ww*0.35,
            height:ww*0.35,
            position:"absolute",
            top:"15%",
            left:"7.5%"
        })
        $(".about_pop").css({
            width:ww*0.05,
            height:ww*0.015,
            borderRadius: "5px",
            fontSize:ww*0.0075,
            lineHeight:ww*0.015+'px'
        })
        $(".about_tab_wrap").css({
            width:ww*0.45,
            height:wh*0.2,
            position:"absolute",
            top:ww*0.1,
            left:ww*0.5
        })
        $(".tab_con_title").css({
            width:"100%",
            height:ww*0.05,
            fontSize:ww*0.042,
            lineHeight:ww*0.05+'px',
            marginTop: ww*0.018,
            marginBottom: ww*0.018  
        })
        $(".about_tab_con_wrap").css({
            width:ww*0.45,
            height:wh*0.5,
            position:"absolute",
            top:ww*0.22,
            left:ww*0.5
        })
        $(".about_tab").css({
            width:"100%",
            height:ww*0.018,
            fontSize:ww*0.01,
            lineHeight:ww*0.018+'px'
        })
        $(".about_tab_but").css({
            width:ww*0.05,
            height:ww*0.018,
        })
        $(".about_tab_but:nth-child(1)").css({
            marginLeft:ww*0.001
        })
        $(".about_tab_but:nth-child(3)").css({
            marginRight:ww*0.001
        })
        $(".about_tab_con").css({
            width:"100%",
            height:"100%",
            fontSize:ww*0.011,
            lineHeight:ww*0.026+'px'
        })
        $(".spec").css({
            marginLeft:ww*0.001
        })
        $(".green").css({
            marginTop:ww*0.0004,
            lineHeight:ww*0.012+'px'
        })
        $(".license").css({
            marginRight:ww*0.001
        })
        $(".skill>img").css({
            width:ww*0.04,
            height:ww*0.04
        })
        $(".skill_2>img").css({
            width:ww*0.05,
            height:ww*0.05
        })
        $(".award").css({
            marginLeft:ww*0.001
        })
        // 소개 사이즈 끝

        // 컨택 사이즈 시작
        $(".contact_contents").css({
            position: "absolute",
            top: "30%",
            left: "50%",
            marginLeft:-ww*0.5,
            fontSize:ww*0.04
        })
        $("h4").css({
            fontSize:ww*0.02,
            lineHeight:ww*0.03+'px'
        })
        $(".view_plan").css({
            fontSize:ww*0.01,
            lineHeight:wh*0.07+'px'
        })
        // 컨택 사이즈 끝

        // 프로젝트 팝업 사이즈 시작
        
        $(".project_detail_wrap").css({
            width:ww,
            height:wh
        })
        $(".detail_text_wrap").css({
            fontSize:ww*0.01
        })
        $(".detail_but").css({
            fontSize:ww*0.008,
            lineHeight:ww*0.02+'px'
        })
        $(".detail_but>li").css({
            width:ww*0.08,
            height:ww*0.02,
            borderRadius: ww*0.02
        })
        $(".original_site").css({
            width:ww*0.09
        })
        $(".close").css({
            width:ww*0.052,
            height:ww*0.052,
            position: "absolute",
            bottom: "15%",
            left: "50%",
            marginLeft: -ww*0.013,
            fontSize: ww*0.04,
            lineHeight: ww*0.052+'px',
            zIndex: "10000"
        })

        // 디테일 사이즈 끝
        // 애니 텍스트 사이즈 시작
        $(".small_page").css({
            width:ww,
            height:wh*0.15,
        })
        $(".yellow_box").css({
            width:'100%',
            height:'100%',
            backgroundColor: 'rgb(252, 240, 0)'
        })
        $(".ani_text").css({
            width:'200%',
            height:'100%',
            fontSize:ww*0.05,
            lineHeight:wh*0.15+'px'
        })
        // 애니 텍스트 사이즈 끝
    }
    function m_box(){
        ww=$(window).width();
        wh=ww*1.8;
        // 부모 사이즈
        $(".wrap").css({
            width:ww,
            overflow:"hidden"
        })
        $(".page").css({
            width:ww,
            height:wh
        })
        $(".page.project_page, .main_page").css({
            height:'100vh'
        })
        $(".project_page_wrap").css({
            width:ww,
            height:'100vh'
        })
        $(".other_project_page_wrap").css({
            width:ww,
            height:wh
        })
        $(".about_page_wrap").css({
            width:ww,
            height:wh
        })
        // 부모 사이즈 끝
        // 탭 사이즈 시작
        $(".tab_icon").css({
            width:ww*0.15,
            height:ww*0.12,
            top:ww*0.03,
            right:ww*0.03
        })
        $(".tab_menu").css({ 
            width:ww,
            height:'100vh'
        })
        $("h2").css({
            fontSize: wh*0.04
        })
        $(".tab_circle").css({
            width:ww,
            height:ww,
            position: "absolute",
            top: 0,
            left: "10%",
        })
        // 탭 사이즈 끝

        // 메인 사이즈 시작
        $(".title").css({
            width:ww,
            height:ww*0.2,//75
            fontSize:ww*0.1,//37.5
            marginLeft:-ww*0.5,
        })
        // title_h=$(".title").height();
        $(".start").css({
            width:ww*0.25,
            height:ww*0.1,
            fontSize:ww*0.04,
            lineHeight:ww*0.1+'px',
            marginLeft:-ww*0.125,
            borderRadius: ww*0.1,
        })
        // 메인 사이즈 끝

        // 프로젝트 사이즈 시작
        $(".ver_swiper").css({
            width:ww,
            height:"100%",
            position: "absolute",
            top: 0,
            left:0,
            overflow: "hidden"
        })
        $(".ver_swiper_wrapper").css({
            width:"100%",
            height:"80%",
        })
        $(".ver_swiper_slide").css({
            width:ww,
            height:"60%",
        })
        // 프로젝트 사이즈 끝

        // 디자인 프로젝트 사이즈 끝
        $(".mo_back").css({
            transform:"rotateZ(30deg)"
        })
        $(".mo_move_box").css({
            width:ww*0.5,
            height:wh
        })
        $(".ho_swiper").css({
            width:ww,
            height:wh,
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden"
        })
        $(".ho_swiper_wrapper").css({
            width:ww*0.8,
            height:ww*0.8,
            position: "absolute",
            top: "30%",
            left: 0,
        })
        $(".ho_swiper_slide").css({
            width:ww*0.8,
            height:ww*0.8,
            // marginLeft: -ww*0.4
        })
        // 디자인 프로젝트 사이즈 끝

        // 소개 사이즈 시작
        $(".mo_title").css({
            width:ww,
            height:ww*0.15,
            fontSize:ww*0.1,
            lineHeight:ww*0.15+'px',
            position:"absolute",
            top:"8%",
            left:"0",
            textAlign:"center"
        })
        $(".gear_wrap").css({
            width:ww*0.6,
            height:ww*0.6,
            position:"absolute",
            top:"20%",
            left:"50%",
            marginLeft:-ww*0.3
        })
        $(".mo_about_tab_title p").css({
            width:"100%",
            height:wh*0.1,
            fontSize:wh*0.03,
            textAlign:"center",
            lineHeight:wh*0.1+'px'
        })
        // $(".mo_about_con_wrap").css({
        //     paddingTop: wh*0.05,
        //     paddingBottom: wh*0.05,
        // })
        $(".mo_about_con_1").css({
            width:"100%",
            height:wh*0.05,
            fontSize:wh*0.02,
            textAlign:"center",
            lineHeight:wh*0.05+'px',
        })
        $(".br_1").css({
            width:"100%",
            height:wh*0.06,
            lineHeight:wh*0.03+'px'
        })
        $(".mo_about_con_2").css({
            width:"100%",
            height:wh*0.05,
            fontSize:wh*0.02,
            textAlign:"center",
            lineHeight:wh*0.05+'px'
        })
        $(".mo_about_con_3").css({
            width:"100%",
            height:0
        })
        $(".mo_skill_1").css({
            marginTop:wh*0.05
        })
        $(".mo_skill_3").css({
            marginBottom:wh*0.05
        })
        $(".mo_about_con_3 img").css({
            width:ww*0.1,
            height:ww*0.1
        })
        $(".mo_skill_3 img").css({
            width:ww*0.13,
            height:ww*0.13
        })
        $(".mo_about_con_4").css({
            width:"100%",
            height:wh*0.05,
            fontSize:wh*0.02,
            textAlign:"center",
            lineHeight:wh*0.05+'px',
        })
        $(".br_2").css({
            width:"100%",
            height:wh*0.06,
            lineHeight:wh*0.03+'px'
        })
        // 소개 사이즈 끝

        
        // 컨택 사이즈 시작
        $(".contact_contents").css({
            fontSize: ww*0.08,
            position: "absolute",
            top: "38%",
            left: "50%",
            marginLeft:-ww*0.5
        })
        $("h4").css({
            fontSize:ww*0.05,
            lineHeight:wh*0.1+'px'
        })
        $(".view_plan").css({
            fontSize:ww*0.03,
            lineHeight:wh*0.07+'px'
        })
        // 컨택 사이즈 끝

        // 프로젝트 팝업 사이즈 시작
        
        $(".project_detail_wrap").css({
            width:ww,
            height:"100vh"
        })
        $(".detail_text_wrap").css({
            fontSize:ww*0.023
        })
        $(".detail_but").css({
            fontSize:ww*0.02,
            lineHeight:wh*0.03+'px'
        })
        $(".detail_but>li").css({
            width:ww*0.22,
            height:wh*0.03,
            borderRadius: ww*0.03
        })
        $(".close").css({
            width:ww*0.2,
            height:ww*0.2,
            position: "absolute",
            bottom: "20%",
            left: "50%",
            marginLeft: -ww*0.1,
            fontSize: wh*0.07,
            lineHeight: wh*0.1+'px',
            zIndex: "10000"
        })

        // 디테일 사이즈 끝
        // 애니 텍스트 사이즈 시작
        $(".small_page").css({
            width:ww,
            height:wh*0.1,
        })
        $(".ani_text").css({
            width:ww*5,
            height:'100%',
            fontSize:wh*0.1,
            lineHeight: wh*0.1+'px',
        })
        $(".yellow_box").css({
            width: ww*5,
            height:'100%',
            backgroundColor: 'rgb(252, 240, 0)'
        })
        // 애니 텍스트 사이즈 끝
    }
    


        // 스크롤 이벤트 시작
        $(window).scroll(function(){
            // pc,mo 스크롤 이벤트 공통 영역
            // 프로젝트 페이지 톱니 z축 회전
            i=$(this).scrollTop();
            page_h=$(".main_page").height();
            a=0;
            a3=i-page_h;
            if(i>=page_h){
                if(i>=page_h && i<page_h+99){
                    $(window).scrollTop(page_h)
                }
                $(".fix_gear_1, .fix_gear_5").css({
                    transform:`rotateZ(${i*11.25}deg)`
                })
                $(".fix_gear_2, .fix_gear_6").css({
                    transform:`rotateZ(${i*-10}deg)`
                })
                $(".fix_gear_3").css({
                    transform:`rotateZ(${i*-2}deg)`
                })
                $(".fix_gear_8, .fix_gear_9, .fix_gear_4").css({
                    transform:`rotateZ(${i*12.13}deg)`
                })
                $(".fix_gear_7").css({
                    transform:`rotateZ(${i*-1.53}deg)`
                })
                $(".fix_gear_10, .fix_gear_11").css({
                    transform:`rotateZ(${i*1.53}deg)`
                })
            }
        // pc,mo 스크롤 이벤트 공통 영역

        // pc 버전 스크롤 이벤트
            if(ww>=1280){
                // 프로젝트 페이지 슬라이드
                if(i>=page_h){
                    if(i >= page_h && i < page_h+99){
                        $(window).scrollTop(page_h)
                    }
                    $(".move_box").css({
                        left:-a3
                    })
                }

                // 디자인페이지 z축 정면으로 이동
            j2=$(this).scrollTop();
            console.log(j2);
            page_h2=$(".other_project_page_wrap").offset().top;
            j3=j2-page_h2;
            if(j2>5850 && j2<6850){
                j3=(j2-5850);
                $(".first_box").css({
                    opacity:0.5
                })
                if(j2>5850){
                    $(".over_box_1").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>6000){
                    $(".under_box_1").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>6100){
                    $(".left_box_1").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>6200){
                    $(".right_box_1").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
            }
            if(j2>6850 && j2<7850){
                j3=(j2-6850)
                $(".second_box").css({
                    opacity:0.5
                })
                if(j2>6850){
                    $(".over_box_2").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>7000){
                    $(".under_box_2").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>7100){
                    $(".left_box_2").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>7200){
                    $(".right_box_2").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
            }
            if(j2>7850 && j2<8850){
                j3=(j2-7850)
                $(".third_box").css({
                    opacity:0.5
                })
                if(j2>7850){
                    $(".over_box_3").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>8000){
                    $(".under_box_3").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>8150){
                    $(".left_box_3").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>8300){
                    $(".right_box_3").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
            }
            if(j2>8850 && j2<9850){
                j3=(j2-8850)
                $(".forth_box").css({
                    opacity:0.5
                })
                if(j2>8850){
                    $(".over_box_4").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>9000){
                    $(".under_box_4").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>9100){
                    $(".left_box_4").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
                if(j2>9200){
                    $(".right_box_4").css({
                        transform: `translate3d(0,0,${j3*0.5}px)`,
                        opacity:1
                    })
                }
            }
            }

            else{
                if(i>=page_h){
                    if(i>=page_h && i<page_h+99){
                        $(window).scrollTop(page_h)
                    }
                    $(".move_box").css({
                        top:-a3
                    })
                }
            }
         })
        

        // 스크롤 이벤트 끝


        // 탭메뉴

        $(".tab_icon").click(function(){
            $(".tab_menu").fadeToggle(1000);
        })

        if(ww>=1280){
            $("h2").eq(0).click(function(){
                $(".tab_menu").fadeOut(1000);
                $(".main_page").fadeIn(1000); 
            })
            $("h2").eq(1).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:0
                  })   
            })
            $("h2").eq(2).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:wh*5.15
                  })   
            })
            $("h2").eq(3).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:wh*10.15
                  })   
            })
            $("h2").eq(4).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:ww*12.3
                  })   
            })
        }
        else{
            $("h2").eq(0).click(function(){
                $(".tab_menu").fadeOut(1000);
                $(".main_page").fadeIn(1000);
            })
            $("h2").eq(1).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:0
                  })   
            })
            $("h2").eq(2).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:wh*2.15
                  })   
            })
            $("h2").eq(3).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:wh*3.15
                  })   
            })
            $("h2").eq(4).click(function(){
                $(".tab_menu").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:wh*4.3
                  })   
            })
        }

        // 메인페이지 
            setTimeout(function(){
                if(ww>=1280){
                    $(".title").animate({
                        left:"5%",
                        // left:ww*0.05
                    },2000)
                    $(".start").fadeIn(3000);
                    $(".main_gif").animate({
                        left:"20%",
                        // left:ww*0.2
                    },2000)
                }
                else{
                    $(".title>p").fadeIn(3000);
                    $(".start").fadeIn(3000);
                    $(".main_gif").animate({
                        top:"-60%"
                    },2000)
                }
            },3000)
        $(".start").click(function(){
                $(".main_page").fadeOut(1000);
                $("html,body").animate({
                    scrollTop:0
                });
         })
         



        // 프로젝트페이지
                
        
            $(".project").eq(0).click(function(){
                $(".project_detail_wrap").eq(0).fadeIn(1000);
            })
            $(".project").eq(1).click(function(){
                $(".project_detail_wrap").eq(1).fadeIn(1000);
            })
            $(".project").eq(2).click(function(){
                $(".project_detail_wrap").eq(2).fadeIn(1000);
            })
            $(".project").eq(3).click(function(){
                $(".project_detail_wrap").eq(3).fadeIn(1000);
            })
            $(".project").eq(4).click(function(){
                $(".project_detail_wrap").eq(4).fadeIn(1000);
            })
            $(".close").click(function(){
                $(".project_detail_wrap").fadeOut(1000);
            })

            // 모바일 스와이퍼
            $(".ver_swiper_slide img").eq(0).click(function(){
                $(".project_detail_wrap").eq(0).fadeIn(1000);
            })
            $(".ver_swiper_slide img").eq(1).click(function(){
                $(".project_detail_wrap").eq(1).fadeIn(1000);
            })
            $(".ver_swiper_slide img").eq(2).click(function(){
                $(".project_detail_wrap").eq(2).fadeIn(1000);
            })
            $(".ver_swiper_slide img").eq(3).click(function(){
                $(".project_detail_wrap").eq(3).fadeIn(1000);
            })
            $(".ver_swiper_slide img").eq(4).click(function(){
                $(".project_detail_wrap").eq(4).fadeIn(1000);
            })


        // 프로젝트페이지 끝
        


        // 디자인 페이지
            function BrowserDetection() {
                if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                    var e = new Number(RegExp.$1);
                    rint = 10;
                    pulsion = 3
                } else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var t = new Number(RegExp.$1);
                    rint = 50;
                    pulsion = 16
                } else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                    var n = new Number(RegExp.$1);
                    rint = 50;
                    pulsion = 16
                } else if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                    var r = new Number(RegExp.$1);
                    rint = 50;
                    pulsion = 16
                } else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                    var i = new Number(RegExp.$1);
                    rint = 50;
                    pulsion = 16
                }
                if (ww < 1024) {
                    numberObject = 19e3;
                    numberBall = 10;
                    pulsion = 2;
                    rint = 10
                }
            }
            function draw() {
                con.clearRect(0, 0, ww, wh);
                for (let e = 0; e < pxs.length; e++) {
                    pxs[e].fade();
                    pxs[e].move();
                    pxs[e].draw()
                }
            }
            function Circle() {
                this.s = {
                    ttl: numberObject,
                    xmax: speedX,
                    ymax: speedY,
                    rmax: radius,
                    rt: pulsion,
                    xdef: 960,
                    ydef: 540,
                    xdrift: 4,
                    ydrift: 4,
                    random: true,
                    blink: true
                };
                this.reset = function () {
                    this.x = this.s.random ? ww * Math.random() : this.s.xdef;
                    this.y = this.s.random ? wh * Math.random() : this.s.ydef;
                    this.r = (this.s.rmax - 1) * Math.random() + 1;
                    this.dx = Math.random() * this.s.xmax * (Math.random() < .5 ? -1 : 1);
                    this.dy = Math.random() * this.s.ymax * (Math.random() < .5 ? -1 : 1);
                    this.hl = this.s.ttl / rint * (this.r / this.s.rmax);
                    this.rt = Math.random() * this.hl;
                    this.s.rt = Math.random() + 1;
                    this.stop = Math.random() * .2 + .4;
                    this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
                    this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1)
                };
                this.fade = function () {
                    this.rt += this.s.rt
                };
                this.draw = function () {
                    if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt * -1;
                    else if (this.rt >= this.hl) this.reset();
                    var e = 1 - this.rt / this.hl;
                    con.beginPath();
                    con.rect(this.x, this.y, widthRect, heightRect);
                    con.closePath();
                    var t = this.r * e;
                    g = con.createRadialGradient(this.x, this.y, 0, this.x, this.y, t <= 0 ? 1 : t);
                    g.addColorStop(this.stop, colorRect + e * opacityRect + ")");
                    con.fillStyle = g;
                    con.fill()
                };
                this.move = function () {
                    this.x += this.rt / this.hl * this.dx;
                    this.y += this.rt / this.hl * this.dy;
                    if (this.x > ww || this.x < 0) this.dx *= -1;
                    if (this.y > wh || this.y < 0) this.dy *= -1
                };
                this.getX = function () {
                    return this.x
                };
                this.getY = function () {
                    return this.y
                }
            }
            let canvas;
            let con;
            let g;
            let pxs = new Array;
            let rint = 60;
            let numberObject = 8e3;
            let numberBall = 50;
            let pulsion = 20;
            let radius = 10;
            let speedX = 5;
            let speedY = 2;
            let widthRect = 100;
            let heightRect = 100;
            let colorRect = "rgba(92,163,188,";
            let opacityRect = .3;
                BrowserDetection();
                canvas = document.getElementById("pixie");
                $(canvas).attr("width", ww).attr("height", wh);
                con = canvas.getContext("2d");
                for (let e = 0; e < numberBall; e++) {
                    pxs[e] = new Circle;
                    pxs[e].reset()
                }
                setInterval(draw, rint)
        
        // 디자인 페이지 끝



        // 소개페이지
        // 소개페이지 pc.ver 시작
            $(".about_tab_but").hover(function(){
                tab_index=$(this).index(); 
                $(".about_tab_con").removeClass("tab_con_on");
                $(".about_tab_con").eq(tab_index).addClass("tab_con_on");
                $(".about_tab_but").css({
                    color:"#999999"
                });
                $(this).css({
                    color:"#ffffff"
                });
                $(".color").removeClass("tab_con_on");
                $(".color").eq(tab_index).addClass("tab_con_on");
            })
            $(".color").hover(function(){
                tab_index=$(this).index();
                $(".about_tab_con").removeClass("tab_con_on");
                $(".about_tab_con").eq(tab_index).addClass("tab_con_on");
                $(".about_tab_but").css({
                    color:"#999999"
                });
                $(".about_tab_but").eq(tab_index).css({
                    color:"#ffffff"
                });
                $(".color").removeClass("tab_con_on");
                $(".color").eq(tab_index).addClass("tab_con_on");
            })
    
            let mouseX=0;
            let mouseY=0;
            let currentX=0;
            let currentY=0;
            $('.color_wrap').mousemove(function(event){
                mouseX=event.clientX;
                mouseY=event.clientY;
                currentX += (mouseX-currentX*3) * 0.2;
                currentY += (mouseY-currentY*3) * 0.2;
                console.log(`x:${currentX},y:${currentY}`)
                $('.about_pop',this).css({
                    transform:`translate(${currentX}px,${currentY}px)`
                }) 
            })
        // 소개페이지 pc.ver 끝
        // 소개페이지 mo.ver 시작
            $('.mo_about_tab_title').click(function(){
                $('.mo_about_con_wrap').removeClass('on',1000);
                $('.mo_about_con_wrap',this).addClass('on',1000);
                $('.gear_wrap').fadeOut(1000);
              })
            $('.on').click(function(){
                $('.mo_about_con_wrap',this).removeClass('on',200);
                $('.gear_wrap').fadeIn(1000);
            })
        
        // 소개페이지 mo.ver 끝


    function updateSwiper() {
        let ww = $(window).width();

        if (ww >= 1280) {
            // ✅ PC 모드에서는 Swiper 삭제 & 숨김
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;
            }
            if (swiper_2) {
                swiper_2.destroy(true, true);
                swiper_2 = null;
            }
            $(".ho_swiper, .ver_swiper").hide(); // Swiper 요소 숨김
        } else {
            // ✅ 모바일 모드에서는 Swiper 다시 생성 & 표시
            $(".ho_swiper, .ver_swiper").show();
            if (!swiper) {
                swiper = new Swiper('.ho_swiper', {
                    spaceBetween: -100,
                    direction: 'horizontal',
                    loop: true,
                    grabCursor: true,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    effect: "coverflow",
                    coverflowEffect: {
                        stretch: -100,
                        depth: 400,
                        modifier: 1,
                        slideShadows: false
                    },
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: true
                    }
                });
            }
            if (!swiper_2) {
                swiper_2 = new Swiper('.ver_swiper', {
                    spaceBetween: -150,
                    direction: 'vertical',
                    loop: true,
                    grabCursor: true,
                    slidesPerView: "auto",
                    centeredSlides: true,
                    effect: "coverflow",
                    coverflowEffect: {
                        rotate: -20,
                        stretch: -100,
                        depth: 1000,
                        modifier: 1,
                        slideShadows: false
                    }
                });
            }
        }
    }

    let swiper = null;
    let swiper_2 = null;

    updateSwiper();

    $(window).on("resize", function () {
        updateSwiper();
    });
        
})