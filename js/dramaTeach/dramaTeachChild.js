var open1 = document.getElementById("open1");
var popup1 = document.getElementById("popup1");
var close1 = document.getElementById("close1");

open1.addEventListener('click', function(){
    popup1.style.display = 'flex';
})

close1.addEventListener('click', function(){
    popup1.style.display = 'none';
})


// 看大圖 1

$(document).ready(function(){

	var swiper1 = new Swiper('.swiper-container1', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox1 = document.getElementById("fullBox1");
	var leftArrow1 = document.getElementById("leftArrow1");
	var rightArrow1 = document.getElementById("rightArrow1");
	var swiperContainer1 = document.getElementById('swiperContainer1');
	var bg11 = document.getElementById("bg11");
	var bg12 = document.getElementById("bg12");
	var bg13 = document.getElementById("bg13");
	var bg14 = document.getElementById("bg14");
	var bg15 = document.getElementById("bg15");
	var bg16 = document.getElementById("bg16");
	var bg17 = document.getElementById("bg17");
	var bg18 = document.getElementById("bg18");
    var bg19 = document.getElementById("bg19");
    var bg110 = document.getElementById("bg110");
    var bg111 = document.getElementById("bg111");
	var bg112 = document.getElementById("bg112");
	var bg113 = document.getElementById("bg113");
	var bg114 = document.getElementById("bg114");
	var bg115 = document.getElementById("bg115");
	var bg116 = document.getElementById("bg116");
	var bg117 = document.getElementById("bg117");
	

	fullBox1.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'hidden');
	})

	swiperContainer1.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow1.addEventListener('click', function(event){
			swiper1.slidePrev()
			event.stopPropagation();

	})

	rightArrow1.addEventListener('click', function(event){
			swiper1.slideNext()
			event.stopPropagation();
	})

	bg11.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(1);
	})

	bg12.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(2);
	})

	bg13.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(3);
	})

	bg14.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(4);
	})
	
	bg15.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(5);
	})

	bg16.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(6);
	})

	bg17.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(7);
    })

	bg18.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(8);
	})

	bg19.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(9);
    })
    
    bg110.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(10);
	})

    bg111.addEventListener('click', function(){
        $(fullBox1).css('visibility', 'visible');
        swiper1.slideTo(11);
    })

    bg112.addEventListener('click', function(){
            $(fullBox1).css('visibility', 'visible');
            swiper1.slideTo(12);
    })

    bg113.addEventListener('click', function(){
            $(fullBox1).css('visibility', 'visible');
            swiper1.slideTo(13);
    })

    bg114.addEventListener('click', function(){
            $(fullBox1).css('visibility', 'visible');
            swiper1.slideTo(14);
    })

    bg115.addEventListener('click', function(){
            $(fullBox1).css('visibility', 'visible');
            swiper1.slideTo(15);
    })

    bg116.addEventListener('click', function(){
            $(fullBox1).css('visibility', 'visible');
            swiper1.slideTo(16);
    })

    bg117.addEventListener('click', function(){
        $(fullBox1).css('visibility', 'visible');
        swiper1.slideTo(17);
    })

})