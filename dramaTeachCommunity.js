var open1 = document.getElementById("open1");
var popup1 = document.getElementById("popup1");
var close1 = document.getElementById("close1");

open1.addEventListener('click', function(){
    popup1.style.display = 'flex';
})

close1.addEventListener('click', function(){
    popup1.style.display = 'none';
})

var open2 = document.getElementById("open2");
var popup2 = document.getElementById("popup2");
var close2 = document.getElementById("close2");

open2.addEventListener('click', function(){
    popup2.style.display = 'flex';
})

close2.addEventListener('click', function(){
    popup2.style.display = 'none';
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
	var bg01 = document.getElementById("bg01");
	var bg02 = document.getElementById("bg02");
	var bg03 = document.getElementById("bg03");
	var bg04 = document.getElementById("bg04");
	var bg05 = document.getElementById("bg05");
	var bg06 = document.getElementById("bg06");
	var bg07 = document.getElementById("bg07");
	var bg08 = document.getElementById("bg08");
    var bg09 = document.getElementById("bg09");
    
	

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

	bg01.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(1);
	})

	bg02.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(2);
	})

	bg03.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(3);
	})

	bg04.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(4);
	})
	
	bg05.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(5);
	})

	bg06.addEventListener('click', function(){
			$(fullBox1).css('visibility', 'visible');
			swiper1.slideTo(6);
	})

	bg07.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(7);
    })

	bg08.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(8);
	})

	bg09.addEventListener('click', function(){
		$(fullBox1).css('visibility', 'visible');
		swiper1.slideTo(9);
    })
    


})



// 看大圖 2

$(document).ready(function(){

	var swiper2 = new Swiper('.swiper-container2', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox2 = document.getElementById("fullBox2");
	var leftArrow2 = document.getElementById("leftArrow2");
	var rightArrow2 = document.getElementById("rightArrow2");
	var swiperContainer2 = document.getElementById('swiperContainer2');
	var bg10 = document.getElementById("bg10");
	var bg11 = document.getElementById("bg11");
	var bg12 = document.getElementById("bg12");
	var bg13 = document.getElementById("bg13");
	var bg14 = document.getElementById("bg14");
    
	

	fullBox2.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'hidden');
	})

	swiperContainer2.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow2.addEventListener('click', function(event){
			swiper2.slidePrev()
			event.stopPropagation();

	})

	rightArrow2.addEventListener('click', function(event){
			swiper2.slideNext()
			event.stopPropagation();
	})

	bg10.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(1);
	})

	bg11.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(2);
	})

	bg12.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(3);
	})

	bg13.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(4);
	})
	
	bg14.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(5);
	})
    


})