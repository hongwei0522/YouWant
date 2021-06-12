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

var open3 = document.getElementById("open3");
var popup3 = document.getElementById("popup3");
var close3 = document.getElementById("close3");

open3.addEventListener('click', function(){
    popup3.style.display = 'flex';
})

close3.addEventListener('click', function(){
    popup3.style.display = 'none';
})

var open4 = document.getElementById("open4");
var popup4 = document.getElementById("popup4");
var close4 = document.getElementById("close4");

open4.addEventListener('click', function(){
    popup4.style.display = 'flex';
})

close4.addEventListener('click', function(){
    popup4.style.display = 'none';
})

var open5 = document.getElementById("open5");
var popup5 = document.getElementById("popup5");
var close5 = document.getElementById("close5");

open5.addEventListener('click', function(){
    popup5.style.display = 'flex';
})

close5.addEventListener('click', function(){
    popup5.style.display = 'none';
})

var open6 = document.getElementById("open6");
var popup6 = document.getElementById("popup6");
var close6 = document.getElementById("close6");

open6.addEventListener('click', function(){
    popup6.style.display = 'flex';
})

close6.addEventListener('click', function(){
    popup6.style.display = 'none';
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
	var bg21 = document.getElementById("bg21");
	var bg22 = document.getElementById("bg22");
	var bg23 = document.getElementById("bg23");
	var bg24 = document.getElementById("bg24");
	var bg25 = document.getElementById("bg25");
	var bg26 = document.getElementById("bg26");
	var bg27 = document.getElementById("bg27");
	var bg28 = document.getElementById("bg28");
	

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

	bg21.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(1);
	})

	bg22.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(2);
	})

	bg23.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(3);
	})

	bg24.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(4);
	})
	
	bg25.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(5);
	})

	bg26.addEventListener('click', function(){
			$(fullBox2).css('visibility', 'visible');
			swiper2.slideTo(6);
	})

	bg27.addEventListener('click', function(){
		$(fullBox2).css('visibility', 'visible');
		swiper2.slideTo(7);
})

	bg28.addEventListener('click', function(){
		$(fullBox2).css('visibility', 'visible');
		swiper2.slideTo(8);
	})


})



// 看大圖 3

$(document).ready(function(){

	var swiper3 = new Swiper('.swiper-container3', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox3 = document.getElementById("fullBox3");
	var leftArrow3 = document.getElementById("leftArrow3");
	var rightArrow3 = document.getElementById("rightArrow3");
	var swiperContainer3 = document.getElementById('swiperContainer3');
	var bg31 = document.getElementById("bg31");
	var bg32 = document.getElementById("bg32");
	var bg33 = document.getElementById("bg33");
	var bg34 = document.getElementById("bg34");
	var bg35 = document.getElementById("bg35");
	var bg36 = document.getElementById("bg36");
	var bg37 = document.getElementById("bg37");
    var bg38 = document.getElementById("bg38");
    var bg39 = document.getElementById("bg39");
    var bg310 = document.getElementById("bg310");
	

	fullBox3.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'hidden');
	})

	swiperContainer3.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow3.addEventListener('click', function(event){
			swiper3.slidePrev()
			event.stopPropagation();

	})

	rightArrow3.addEventListener('click', function(event){
			swiper3.slideNext()
			event.stopPropagation();
	})

	bg31.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(1);
	})

	bg32.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(2);
	})

	bg33.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(3);
	})

	bg34.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(4);
	})
	
	bg35.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(5);
	})

	bg36.addEventListener('click', function(){
			$(fullBox3).css('visibility', 'visible');
			swiper3.slideTo(6);
	})

	bg37.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(7);
})

	bg38.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(8);
    })
    
    bg39.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(9);
    })
    
    bg310.addEventListener('click', function(){
		$(fullBox3).css('visibility', 'visible');
		swiper3.slideTo(10);
	})


})


// 看大圖 4

$(document).ready(function(){

	var swiper4 = new Swiper('.swiper-container4', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox4 = document.getElementById("fullBox4");
	var leftArrow4 = document.getElementById("leftArrow4");
	var rightArrow4 = document.getElementById("rightArrow4");
	var swiperContainer4 = document.getElementById('swiperContainer4');
	var bg41 = document.getElementById("bg41");
	var bg42 = document.getElementById("bg42");
	var bg43 = document.getElementById("bg43");
	var bg44 = document.getElementById("bg44");
	var bg45 = document.getElementById("bg45");
	var bg46 = document.getElementById("bg46");
	var bg47 = document.getElementById("bg47");
	var bg48 = document.getElementById("bg48");
	

	fullBox4.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'hidden');
	})

	swiperContainer4.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow4.addEventListener('click', function(event){
			swiper4.slidePrev()
			event.stopPropagation();

	})

	rightArrow4.addEventListener('click', function(event){
			swiper4.slideNext()
			event.stopPropagation();
	})

	bg41.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(1);
	})

	bg42.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(2);
	})

	bg43.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(3);
	})

	bg44.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(4);
	})
	
	bg45.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(5);
	})

	bg46.addEventListener('click', function(){
			$(fullBox4).css('visibility', 'visible');
			swiper4.slideTo(6);
	})

	bg47.addEventListener('click', function(){
		$(fullBox4).css('visibility', 'visible');
		swiper4.slideTo(7);
})

	bg48.addEventListener('click', function(){
		$(fullBox4).css('visibility', 'visible');
		swiper4.slideTo(8);
	})

})


// 看大圖 5

$(document).ready(function(){

	var swiper5 = new Swiper('.swiper-container5', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox5 = document.getElementById("fullBox5");
	var leftArrow5 = document.getElementById("leftArrow5");
	var rightArrow5 = document.getElementById("rightArrow5");
	var swiperContainer5 = document.getElementById('swiperContainer5');
	var bg51 = document.getElementById("bg51");
	var bg52 = document.getElementById("bg52");
	var bg53 = document.getElementById("bg53");
	var bg54 = document.getElementById("bg54");
	var bg55 = document.getElementById("bg55");
	var bg56 = document.getElementById("bg56");
    var bg57 = document.getElementById("bg57");
    var bg58 = document.getElementById("bg58");
	

	fullBox5.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'hidden');
	})

	swiperContainer5.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow5.addEventListener('click', function(event){
		swiper5.slidePrev()
			event.stopPropagation();

	})

	rightArrow5.addEventListener('click', function(event){
		swiper5.slideNext()
			event.stopPropagation();
	})

	bg51.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(1);
	})

	bg52.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(2);
	})

	bg53.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(3);
	})

	bg54.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(4);
	})
	
	bg55.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(5);
	})

	bg56.addEventListener('click', function(){
			$(fullBox5).css('visibility', 'visible');
			swiper5.slideTo(6);
	})

	bg57.addEventListener('click', function(){
		$(fullBox5).css('visibility', 'visible');
		swiper5.slideTo(7);
    })
    
    bg58.addEventListener('click', function(){
		$(fullBox5).css('visibility', 'visible');
		swiper5.slideTo(8);
	})


})


// 看大圖 6

$(document).ready(function(){

	var swiper6 = new Swiper('.swiper-container6', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox6 = document.getElementById("fullBox6");
	var leftArrow6 = document.getElementById("leftArrow6");
	var rightArrow6 = document.getElementById("rightArrow6");
	var swiperContainer6 = document.getElementById('swiperContainer6');
	var bg61 = document.getElementById("bg61");
	var bg62 = document.getElementById("bg62");
	var bg63 = document.getElementById("bg63");
	var bg64 = document.getElementById("bg64");
	var bg65 = document.getElementById("bg65");
	var bg66 = document.getElementById("bg66");
    var bg67 = document.getElementById("bg67");
    var bg68 = document.getElementById("bg68");
    var bg69 = document.getElementById("bg69");
    var bg610 = document.getElementById("bg610");
    var bg611 = document.getElementById("bg611");
    var bg612 = document.getElementById("bg612");
    var bg613 = document.getElementById("bg613");
    var bg614 = document.getElementById("bg614");
    var bg615 = document.getElementById("bg615");
	

	fullBox6.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'hidden');
	})

	swiperContainer6.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow6.addEventListener('click', function(event){
		swiper6.slidePrev()
			event.stopPropagation();

	})

	rightArrow6.addEventListener('click', function(event){
		swiper6.slideNext()
			event.stopPropagation();
	})

	bg61.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(1);
	})

	bg62.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(2);
	})

	bg63.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(3);
	})

	bg64.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(4);
	})
	
	bg65.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(5);
	})

	bg66.addEventListener('click', function(){
			$(fullBox6).css('visibility', 'visible');
			swiper6.slideTo(6);
	})

	bg67.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(7);
    })
    
    bg68.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(8);
	})
    
    bg69.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(9);
	})
    
    bg610.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(10);
	})
    
    bg611.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(11);
	})
    
    bg612.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(12);
	})
    
    bg613.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(13);
	})
    
    bg614.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(14);
	})
    
    bg615.addEventListener('click', function(){
		$(fullBox6).css('visibility', 'visible');
		swiper6.slideTo(15);
	})


})