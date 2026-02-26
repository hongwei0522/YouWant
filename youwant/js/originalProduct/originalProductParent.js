var open1 = document.getElementById('open1');
var popup1 = document.getElementById('popup1');
var close1 = document.getElementById('close1');

open1.addEventListener('click', function () {
  popup1.style.display = 'flex';
});

close1.addEventListener('click', function () {
  popup1.style.display = 'none';
});

var open2 = document.getElementById('open2');
var popup2 = document.getElementById('popup2');
var close2 = document.getElementById('close2');

open2.addEventListener('click', function () {
  popup2.style.display = 'flex';
});

close2.addEventListener('click', function () {
  popup2.style.display = 'none';
});

var open3 = document.getElementById('open3');
var popup3 = document.getElementById('popup3');
var close3 = document.getElementById('close3');

open3.addEventListener('click', function () {
  popup3.style.display = 'flex';
});

close3.addEventListener('click', function () {
  popup3.style.display = 'none';
});

// 4

var open4 = document.getElementById('open4');
var popup4 = document.getElementById('popup4');
var close4 = document.getElementById('close4');

open4.addEventListener('click', function () {
  popup4.style.display = 'flex';
});

close4.addEventListener('click', function () {
  popup4.style.display = 'none';
});

// 5

var open5 = document.getElementById('open5');
var popup5 = document.getElementById('popup5');
var close5 = document.getElementById('close5');

open5.addEventListener('click', function () {
  popup5.style.display = 'flex';
});

close5.addEventListener('click', function () {
  popup5.style.display = 'none';
});

// 6

var open6 = document.getElementById('open6');
var popup6 = document.getElementById('popup6');
var close6 = document.getElementById('close6');

open6.addEventListener('click', function () {
  popup6.style.display = 'flex';
});

close6.addEventListener('click', function () {
  popup6.style.display = 'none';
});

// 7

var open7 = document.getElementById('open7');
var popup7 = document.getElementById('popup7');
var close7 = document.getElementById('close7');

open7.addEventListener('click', function () {
  popup7.style.display = 'flex';
});

close7.addEventListener('click', function () {
  popup7.style.display = 'none';
});

// 看大圖 1

$(document).ready(function () {
  var swiper1 = new Swiper('.swiper-container1', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox1 = document.getElementById('fullBox1');
  var leftArrow1 = document.getElementById('leftArrow1');
  var rightArrow1 = document.getElementById('rightArrow1');
  var swiperContainer1 = document.getElementById('swiperContainer1');
  var bg11 = document.getElementById('bg11');
  var bg12 = document.getElementById('bg12');
  var bg13 = document.getElementById('bg13');
  var bg14 = document.getElementById('bg14');
  var bg15 = document.getElementById('bg15');
  var bg16 = document.getElementById('bg16');
  var bg17 = document.getElementById('bg17');
  var bg18 = document.getElementById('bg18');
  var bg19 = document.getElementById('bg19');
  var bg110 = document.getElementById('bg110');
  var bg111 = document.getElementById('bg111');
  var bg112 = document.getElementById('bg112');
  var bg113 = document.getElementById('bg113');

  fullBox1.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'hidden');
  });

  swiperContainer1.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow1.addEventListener('click', function (event) {
    swiper1.slidePrev();
    event.stopPropagation();
  });

  rightArrow1.addEventListener('click', function (event) {
    swiper1.slideNext();
    event.stopPropagation();
  });

  bg11.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(1);
  });

  bg12.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(2);
  });

  bg13.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(3);
  });

  bg14.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(4);
  });

  bg15.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(5);
  });

  bg16.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(6);
  });

  bg17.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(7);
  });

  bg18.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(8);
  });

  bg19.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(9);
  });

  bg110.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(10);
  });

  bg111.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(11);
  });

  bg112.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(12);
  });

  bg113.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(13);
  });
});

// 看大圖 2

$(document).ready(function () {
  var swiper2 = new Swiper('.swiper-container2', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox2 = document.getElementById('fullBox2');
  var leftArrow2 = document.getElementById('leftArrow2');
  var rightArrow2 = document.getElementById('rightArrow2');
  var swiperContainer2 = document.getElementById('swiperContainer2');
  var bg21 = document.getElementById('bg21');
  var bg22 = document.getElementById('bg22');
  var bg23 = document.getElementById('bg23');
  var bg24 = document.getElementById('bg24');
  var bg25 = document.getElementById('bg25');
  var bg26 = document.getElementById('bg26');
  var bg27 = document.getElementById('bg27');
  var bg28 = document.getElementById('bg28');
  var bg29 = document.getElementById('bg29');

  fullBox2.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'hidden');
  });

  swiperContainer2.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow2.addEventListener('click', function (event) {
    swiper2.slidePrev();
    event.stopPropagation();
  });

  rightArrow2.addEventListener('click', function (event) {
    swiper2.slideNext();
    event.stopPropagation();
  });

  bg21.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(1);
  });

  bg22.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(2);
  });

  bg23.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(3);
  });

  bg24.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(4);
  });

  bg25.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(5);
  });

  bg26.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(6);
  });

  bg27.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(7);
  });

  bg28.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(8);
  });

  bg29.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(9);
  });
});

// 看大圖 3

$(document).ready(function () {
  var swiper3 = new Swiper('.swiper-container3', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox3 = document.getElementById('fullBox3');
  var leftArrow3 = document.getElementById('leftArrow3');
  var rightArrow3 = document.getElementById('rightArrow3');
  var swiperContainer3 = document.getElementById('swiperContainer3');
  var bg31 = document.getElementById('bg31');
  var bg32 = document.getElementById('bg32');
  var bg33 = document.getElementById('bg33');
  var bg34 = document.getElementById('bg34');
  var bg35 = document.getElementById('bg35');
  var bg36 = document.getElementById('bg36');

  fullBox3.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'hidden');
  });

  swiperContainer3.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow3.addEventListener('click', function (event) {
    swiper3.slidePrev();
    event.stopPropagation();
  });

  rightArrow3.addEventListener('click', function (event) {
    swiper3.slideNext();
    event.stopPropagation();
  });

  bg31.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(1);
  });

  bg32.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(2);
  });

  bg33.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(3);
  });

  bg34.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(4);
  });

  bg35.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(5);
  });

  bg36.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(6);
  });
});

// 看大圖 4

$(document).ready(function () {
  var swiper4 = new Swiper('.swiper-container4', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox4 = document.getElementById('fullBox4');
  var leftArrow4 = document.getElementById('leftArrow4');
  var rightArrow4 = document.getElementById('rightArrow4');
  var swiperContainer4 = document.getElementById('swiperContainer4');
  var bg41 = document.getElementById('bg41');
  var bg42 = document.getElementById('bg42');
  var bg43 = document.getElementById('bg43');
  // var bg44 = document.getElementById("bg44");
  var bg45 = document.getElementById('bg45');
  // var bg46 = document.getElementById("bg46");
  // var bg47 = document.getElementById("bg47");
  // var bg48 = document.getElementById("bg48");
  var bg49 = document.getElementById('bg49');
  var bg50 = document.getElementById('bg50');
  var bg51 = document.getElementById('bg51');
  var bg52 = document.getElementById('bg52');
  var bg53 = document.getElementById('bg53');

  fullBox4.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'hidden');
  });

  swiperContainer4.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow4.addEventListener('click', function (event) {
    swiper4.slidePrev();
    event.stopPropagation();
  });

  rightArrow4.addEventListener('click', function (event) {
    swiper4.slideNext();
    event.stopPropagation();
  });

  bg41.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(1);
  });

  bg42.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(2);
  });

  bg43.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(3);
  });

  bg45.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(4);
  });

  bg49.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(5);
  });

  bg50.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(6);
  });

  bg51.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(7);
  });

  bg52.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(8);
  });

  bg53.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(9);
  });
});

// 看大圖 5

$(document).ready(function () {
  var swiper5 = new Swiper('.swiper-container5', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox5 = document.getElementById('fullBox5');
  var leftArrow5 = document.getElementById('leftArrow5');
  var rightArrow5 = document.getElementById('rightArrow5');
  var swiperContainer5 = document.getElementById('swiperContainer5');
  var bg501 = document.getElementById('bg501');
  var bg502 = document.getElementById('bg502');
  var bg503 = document.getElementById('bg503');
  var bg504 = document.getElementById('bg504');
  var bg505 = document.getElementById('bg505');
  var bg506 = document.getElementById('bg506');
  var bg507 = document.getElementById('bg507');
  var bg508 = document.getElementById('bg508');
  var bg509 = document.getElementById('bg509');

  fullBox5.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'hidden');
  });

  swiperContainer5.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow5.addEventListener('click', function (event) {
    swiper5.slidePrev();
    event.stopPropagation();
  });

  rightArrow5.addEventListener('click', function (event) {
    swiper5.slideNext();
    event.stopPropagation();
  });

  bg501.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(1);
  });

  bg502.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(2);
  });

  bg503.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(3);
  });

  bg504.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(4);
  });

  bg505.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(5);
  });

  bg506.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(6);
  });

  bg507.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(7);
  });

  bg508.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(8);
  });

  bg509.addEventListener('click', function () {
    $(fullBox5).css('visibility', 'visible');
    swiper5.slideTo(9);
  });
});

// 看大圖 6

$(document).ready(function () {
  var swiper6 = new Swiper('.swiper-container6', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox6 = document.getElementById('fullBox6');
  var leftArrow6 = document.getElementById('leftArrow6');
  var rightArrow6 = document.getElementById('rightArrow6');
  var swiperContainer6 = document.getElementById('swiperContainer6');
  var bg601 = document.getElementById('bg601');
  var bg602 = document.getElementById('bg602');
  var bg603 = document.getElementById('bg603');
  var bg604 = document.getElementById('bg604');
  var bg605 = document.getElementById('bg605');
  var bg606 = document.getElementById('bg606');
  var bg607 = document.getElementById('bg607');
  var bg608 = document.getElementById('bg608');

  fullBox6.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'hidden');
  });

  swiperContainer6.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow6.addEventListener('click', function (event) {
    swiper6.slidePrev();
    event.stopPropagation();
  });

  rightArrow6.addEventListener('click', function (event) {
    swiper6.slideNext();
    event.stopPropagation();
  });

  bg601.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(1);
  });

  bg602.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(2);
  });

  bg603.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(3);
  });

  bg604.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(4);
  });

  bg605.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(5);
  });

  bg606.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(6);
  });

  bg607.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(7);
  });

  bg608.addEventListener('click', function () {
    $(fullBox6).css('visibility', 'visible');
    swiper6.slideTo(8);
  });
});

// 看大圖 7

$(document).ready(function () {
  var swiper7 = new Swiper('.swiper-container7', {
    loop: true,
    lazy: true,
    autoplay: 1000,
    slidesPerView: 1,
  });

  var fullBox7 = document.getElementById('fullBox7');
  var leftArrow7 = document.getElementById('leftArrow7');
  var rightArrow7 = document.getElementById('rightArrow7');
  var swiperContainer7 = document.getElementById('swiperContainer7');
  var bg701 = document.getElementById('bg701');
  var bg702 = document.getElementById('bg702');
  var bg703 = document.getElementById('bg703');
  var bg704 = document.getElementById('bg704');
  var bg705 = document.getElementById('bg705');
  var bg706 = document.getElementById('bg706');
  var bg707 = document.getElementById('bg707');
  var bg708 = document.getElementById('bg708');
  var bg709 = document.getElementById('bg709');

  fullBox7.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'hidden');
  });

  swiperContainer7.addEventListener('click', function (event) {
    // event.stopPropagation();
  });

  leftArrow7.addEventListener('click', function (event) {
    swiper7.slidePrev();
    event.stopPropagation();
  });

  rightArrow7.addEventListener('click', function (event) {
    swiper7.slideNext();
    event.stopPropagation();
  });

  bg701.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(1);
  });

  bg702.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(2);
  });

  bg703.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(3);
  });

  bg704.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(4);
  });

  bg705.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(5);
  });

  bg706.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(6);
  });

  bg707.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(7);
  });

  bg708.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(8);
  });

  bg709.addEventListener('click', function () {
    $(fullBox7).css('visibility', 'visible');
    swiper7.slideTo(9);
  });
});
