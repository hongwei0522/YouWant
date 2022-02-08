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

// 4

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



var open7 = document.getElementById("open7");
var popup7 = document.getElementById("popup7");
var close7 = document.getElementById("close7");

open7.addEventListener('click', function(){
    popup7.style.display = 'flex';
})

close7.addEventListener('click', function(){
    popup7.style.display = 'none';
})

var open8 = document.getElementById("open8");
var popup8 = document.getElementById("popup8");
var close8 = document.getElementById("close8");

open8.addEventListener('click', function(){
    popup8.style.display = 'flex';
})

close8.addEventListener('click', function(){
    popup8.style.display = 'none';
})



var open9 = document.getElementById("open9");
var popup9 = document.getElementById("popup9");
var close9 = document.getElementById("close9");

open9.addEventListener('click', function(){
    popup9.style.display = 'flex';
})

close9.addEventListener('click', function(){
    popup9.style.display = 'none';
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
	var bg49 = document.getElementById("bg49");
	

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

	bg49.addEventListener('click', function(){
		$(fullBox4).css('visibility', 'visible');
		swiper4.slideTo(9);
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



})




// 看大圖 7

$(document).ready(function(){

	var swiper7 = new Swiper('.swiper-container7', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox7 = document.getElementById("fullBox7");
	var leftArrow7 = document.getElementById("leftArrow7");
	var rightArrow7 = document.getElementById("rightArrow7");
	var swiperContainer7 = document.getElementById('swiperContainer7');
	var bg71 = document.getElementById("bg71");
	var bg72 = document.getElementById("bg72");
	var bg73 = document.getElementById("bg73");
	var bg74 = document.getElementById("bg74");
	var bg75 = document.getElementById("bg75");
	
	var bg76 = document.getElementById("bg76");
	var bg77 = document.getElementById("bg77");
	var bg78 = document.getElementById("bg78");
	var bg79 = document.getElementById("bg79");
	var bg80 = document.getElementById("bg80");
	

	fullBox7.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'hidden');
	})

	swiperContainer7.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow7.addEventListener('click', function(event){
		swiper7.slidePrev()
			event.stopPropagation();

	})

	rightArrow7.addEventListener('click', function(event){
		swiper7.slideNext()
			event.stopPropagation();
	})

	bg71.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(1);
	})

	bg72.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(2);
	})

	bg73.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(3);
	})

	bg74.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(4);
	})

	bg75.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(5);
	})

	

	bg76.addEventListener('click', function(){
		$(fullBox7).css('visibility', 'visible');
		swiper7.slideTo(6);
	})

	bg77.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(7);
	})

	bg78.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(8);
	})

	bg79.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(9);
	})

	bg80.addEventListener('click', function(){
			$(fullBox7).css('visibility', 'visible');
			swiper7.slideTo(10);
	})



})





// 看大圖 8

$(document).ready(function(){

	var swiper8 = new Swiper('.swiper-container8', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox8 = document.getElementById("fullBox8");
	var leftArrow8 = document.getElementById("leftArrow8");
	var rightArrow8 = document.getElementById("rightArrow8");
	var swiperContainer8 = document.getElementById('swiperContainer8');
	var bg81 = document.getElementById("bg81");
	var bg82 = document.getElementById("bg82");
	var bg83 = document.getElementById("bg83");
	var bg84 = document.getElementById("bg84");
	var bg85 = document.getElementById("bg85");
	var bg86 = document.getElementById("bg86");
	

	fullBox8.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'hidden');
	})

	swiperContainer8.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow8.addEventListener('click', function(event){
		swiper8.slidePrev()
			event.stopPropagation();

	})

	rightArrow8.addEventListener('click', function(event){
		swiper8.slideNext()
			event.stopPropagation();
	})

	bg81.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(1);
	})

	bg82.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(2);
	})

	bg83.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(3);
	})

	bg84.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(4);
	})

	bg85.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(5);
	})

	bg86.addEventListener('click', function(){
			$(fullBox8).css('visibility', 'visible');
			swiper8.slideTo(6);
	})



})



// 看大圖 9

$(document).ready(function(){

	var swiper9 = new Swiper('.swiper-container9', {
		loop: true,
		lazy: true,
		autoplay: 1000,
		slidesPerView: 1
	});


	var fullBox9 = document.getElementById("fullBox9");
	var leftArrow9 = document.getElementById("leftArrow9");
	var rightArrow9 = document.getElementById("rightArrow9");
	var swiperContainer9 = document.getElementById('swiperContainer9');
	var bg91 = document.getElementById("bg91");
	var bg92 = document.getElementById("bg92");
	var bg93 = document.getElementById("bg93");
	var bg94 = document.getElementById("bg94");
	var bg95 = document.getElementById("bg95");
	
	var bg96 = document.getElementById("bg96");
	var bg97 = document.getElementById("bg97");
	var bg98 = document.getElementById("bg98");
	var bg99 = document.getElementById("bg99");
	var bg100 = document.getElementById("bg100");
	
	var bg101 = document.getElementById("bg101");
	var bg102 = document.getElementById("bg102");
	

	fullBox9.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'hidden');
	})

	swiperContainer9.addEventListener('click', function(event){
			// event.stopPropagation();
	})

	leftArrow9.addEventListener('click', function(event){
		swiper9.slidePrev()
			event.stopPropagation();

	})

	rightArrow9.addEventListener('click', function(event){
		swiper9.slideNext()
			event.stopPropagation();
	})

	bg91.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(1);
	})

	bg92.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(2);
	})
	bg93.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(3);
	})
	bg94.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(4);
	})
	bg95.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(5);
	})

	
	bg96.addEventListener('click', function(){
		$(fullBox9).css('visibility', 'visible');
		swiper9.slideTo(6);
	})
	bg97.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(7);
	})
	bg98.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(8);
	})
	bg99.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(9);
	})
	bg100.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(10);
	})


	bg101.addEventListener('click', function(){
		$(fullBox9).css('visibility', 'visible');
		swiper9.slideTo(11);
	})
	bg102.addEventListener('click', function(){
			$(fullBox9).css('visibility', 'visible');
			swiper9.slideTo(12);
	})



})

