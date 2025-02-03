 
$(document).ready(function(){

    var topSliderInstance;
    var fadeSliderInstance;


    function initTopSlider() {
        if (topSliderInstance) topSliderInstance.destroy(true, true);

        topSliderInstance = new Swiper('.vertical_slider', {
            direction: 'vertical',
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            }
        });
    }


    function initFadeSlider() {
        if (fadeSliderInstance) fadeSliderInstance.destroy(true, true);

        fadeSliderInstance = new Swiper('.fade_slider', {
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            fadeEffect: {
                crossFade: true
            },
            speed: 800
        });
    }

    function setupSliders() {
        initTopSlider();
        initFadeSlider();
    }

    $(window).on('resize', setupSliders);
    setupSliders();






	var swiper = new Swiper('.swiper', {
      spaceBetween: 0,
      direction: 'horizontal',
      loop: true,
      loopAdditionalSlides: 1,
      grabCursor:true,
      slidesPerView:"auto",
      centeredSlides:true,
      effect:"coverflow",
      slideShadows:false,
      effect: 'slide',
      autoplay:{
        delay: 2000,
        disableOnInteraction:true
      },
      navigation: {
        nextEl: ".ri_bu", 
        prevEl: ".le_bu"
      }
    });


	var isPlaying = true;
	$(".bu_st").click(function () {
		  if (isPlaying) {
			  swiper.autoplay.stop(); // autoplay 정지
			  isPlaying = false;
			  console.log("슬라이드 일시정지");
		  } else {
			  swiper.autoplay.start(); // autoplay 재생
			  isPlaying = true;
			  console.log("슬라이드 재생");
		  }
	});



	// 팝업
	  $('#popup').css({
		display:"none",
	  })
	  $('#scrollPopup').css({
		display:"none",
	  })

  

	var popupShown = false;
	  $(window).scroll(function(){
		i=$(this).scrollTop();
		page_h=$(".section_1").height();
		if(i<=page_h){
		  $('#scrollPopup').fadeIn();
		  popupShown = true;
		}
		else{
			$('#scrollPopup').fadeOut();
		}
	  })

	  $(".font_box_16>.en_ko").click(function(){
		$(".myfont_pop").css({
		  display:"block"
		})
	  })
	  $(".myfont_pop>button").click(function(){
		$(".myfont_pop").css({
		  display:"none"
		})
	  })


	  $('.click_wrap li').each(function(index) {
		if (index === 0) {
		  $(this).css('display', 'block');
		} else {
		  $(this).css('display', 'none');
		}
	  });

	  $('#penSelect').on('change', function() {
		var penSelect = $(this).val();
		if (penSelect) {
		  $('.click_wrap li').eq(0).hide();
		  $('.click_wrap li').eq(1).show();
		  $('#penColor').prop('disabled', false);
		}
	  });

  $('#penColor').on('change', function() {
    var penColor = $(this).val();
    if (penColor) {
      $('.click_wrap li').eq(1).hide();
      $('.click_wrap li').eq(2).show();
      $('#fontSelect').prop('disabled', false);
    }
  });

  $('#fontSelect').on('change', function() {
    var fontSelect = $(this).val();
    if (fontSelect) {
      $('.click_wrap li').eq(2).hide();
      $('.click_wrap li').eq(3).show();
      $('#colorSelect').prop('disabled', false);
    }
  });

  $('#colorSelect').on('change', function() {
    var colorSelect = $(this).val();
    if (colorSelect) {
      $('.click_wrap li').eq(3).hide();
    }
  });


// 이 아래는 제이쿼리 마지막 괄호

});




// 자바스크립트 영역

document.addEventListener('mousemove', (e) => {
  var mouseX = e.pageX + 10;
  var mouseY = e.pageY + 10;

  var cursor = document.querySelector('.mouse_cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';

})


// 만/샤 , 컬러 변경

function updatePenType() {
  var penType = document.getElementById('penSelect').value;

  document.getElementById('fountainPen').style.display = 'none';
  document.getElementById('sharpPen').style.display = 'none';

  if (penType === 'fountain_pen') {
    document.getElementById('fountainPen').style.display = 'block';
  } else if (penType === 'sharp') {
    document.getElementById('sharpPen').style.display = 'block';
  }

  document.getElementById('penColor').value = 'color_sel';
  
  var fountainImages = document.querySelectorAll('#fountainPen img');
  var sharpImages = document.querySelectorAll('#sharpPen img');
  
  fountainImages.forEach(img => img.style.display = 'none');
  sharpImages.forEach(img => img.style.display = 'none');
}


// name의 입력된 값을 result에 출력
function updatePenColor() {
  var penColor = document.getElementById('penColor').value;
  var penType = document.getElementById('penSelect').value;
  var resultDiv = document.getElementById('result');
  var nameInput = document.getElementById('name');
  var screenWidth = window.innerWidth;

  var imageElement;

  // 펜 종류에 따른 이미지 요소 선택 & result 위치값 - 반응형 포함
  if (penType === 'fountain_pen') {
    imageElement = document.getElementById('founImage');
    resultDiv.style.position = 'absolute';
    resultDiv.style.transform = 'scale(1)';
    if (screenWidth > 1440) {
      resultDiv.style.right = '20px';
      resultDiv.style.textAlign = 'center';
      resultDiv.style.transform = 'scale(0.95)';
    }
    else if (screenWidth > 1024 && screenWidth < 1441) {
      resultDiv.style.right = '5px';
      resultDiv.style.textAlign = 'center';
      resultDiv.style.transform = 'scale(0.9)';
    }
    else if (screenWidth > 692 && screenWidth < 1025) {
      resultDiv.style.right = '80px';
      resultDiv.style.textAlign = 'center';
      resultDiv.style.transform = 'scale(1.2)';
    }
    else{
      resultDiv.style.right = '-20px';
      resultDiv.style.textAlign = 'center';
      resultDiv.style.transform = 'scale(0.7)';
    }
    
  } else if (penType === 'sharp') {
    imageElement = document.getElementById('sharpImage');
    resultDiv.style.position = 'absolute';
    resultDiv.style.transform = 'scale(1)';
    if (screenWidth > 1440) {
      resultDiv.style.right = '220px';
      resultDiv.style.textAlign = 'right';
      resultDiv.style.transform = 'scale(0.95)';
    }
    else if (screenWidth > 1024 && screenWidth < 1441) {
      resultDiv.style.right = '150px';
      resultDiv.style.textAlign = 'right';
      resultDiv.style.transform = 'scale(0.8)';
    }
    else if (screenWidth > 692 && screenWidth < 1025) {
      resultDiv.style.right = '300px';
      resultDiv.style.textAlign = 'right';
      resultDiv.style.transform = 'scale(1.2)';
    }
    else{
      resultDiv.style.right = '70px';
      resultDiv.style.textAlign = 'right';
      resultDiv.style.transform = 'scale(0.6)';
    }
    
  }




  if(screenWidth>1025){
	  // 선택한 펜 종류와 색상에 따른 이미지 업데이트
	  if (penType === 'fountain_pen') {
		imageElement.src = `./img/foun_${penColor}.png`;
		imageElement.alt = `${penColor} 만년필`;
		imageElement.style.display = 'block';
	  } else if (penType === 'sharp') {
		imageElement.src = `./img/sharp_${penColor}.png`;
		imageElement.alt = `${penColor} 샤프`;
		imageElement.style.display = 'block';
	  }
  }else{
    if (penType === 'fountain_pen') {
      imageElement.src = `./img/foun_${penColor}_mo.png`;
      imageElement.alt = `${penColor} 만년필 mo`;
      imageElement.style.display = 'block';
    } else if (penType === 'sharp') {
      imageElement.src = `./img/sharp_${penColor}_mo.png`;
      imageElement.alt = `${penColor} 샤프 mo`;
      imageElement.style.display = 'block';
    }
  }

	
 // window.addEventListener('resize', updatePenType);
 
}


// 이름을 입력할 때 resultDiv에 출력하는 함수
function printName() {
    var nameInput = document.getElementById('name').value;
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = nameInput;
}


// 각인색상변경

function changeColor() {
  var selectedColor = document.getElementById('colorSelect').value;
  var resultDiv = document.getElementById('result');
  resultDiv.style.color = selectedColor;


  var colorMap = {
    im_black: '#0c0c0c',
    im_white: '#ffffff',
    im_gray: '#808285',
    im_blue: '#3953a4',
    im_red: '#ed2024',
    im_yellow: '#f7ec13',
    im_green: '#42b649',
    im_pink: '#eb67a6'
  };
  resultDiv.style.color = colorMap[selectedColor] || '#0c0c0c';
}




// 폰트 스타일과 크기를 변경
function changeFont() {
    var selectedFont = document.getElementById('fontSelect').value;
    var resultDiv = document.getElementById('result');
    var nameInput = document.getElementById('name').value;
    var textLength = nameInput.length;  // 입력된 글자의 길이

    var fontMap = {
        'font_1': { font: 'NanumSquareB', size: 23 },  // 기본 폰트 크기
        'font_2': { font: 'GmarketSansMedium', size: 22 },
        'font_3': { font: 'Dovemayo_gothic', size: 27 },
        'font_4': { font: 'Orbit-Regular', size: 23 },
        'font_5': { font: 'NanumMyeongjo', size: 22 },
        'font_6': { font: 'ChosunGs', size: 23 },
        'font_7': { font: 'NanumPen', size: 35 },
        'font_8': { font: 'InkLipquid', size: 29 },
        'font_9': { font: 'Dovemayo_wild', size: 27 },
        'font_10': { font: 'Gothic_Goding', size: 32 },
        'font_11': { font: 'Ownglyph_meetme-Rg', size: 30 },
        'font_12': { font: 'monotype', size: 30 },
        'font_13': { font: 'caviardreams', size: 29 },
        'font_14': { font: 'helgoland', size: 27 },
        'font_15': { font: 'continuous', size: 24 }
    };

    // 기본 폰트 사이즈에서 글자 수에 따라 조정
    var adjustedFontSize = fontMap[selectedFont].size;

    // 글자 수가 많으면 폰트 크기를 줄이고, 글자 수가 적으면 폰트 크기를 키움
    if (textLength <= 3) {
        adjustedFontSize -= (3 - textLength - 9) * 0.5;
    }

    resultDiv.style.fontFamily = fontMap[selectedFont].font;
    resultDiv.style.fontSize = `${adjustedFontSize}px`;
}

  








