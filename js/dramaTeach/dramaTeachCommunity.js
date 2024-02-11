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

var open4 = document.getElementById('open4');
var popup4 = document.getElementById('popup4');
var close4 = document.getElementById('close4');

open4.addEventListener('click', function () {
  popup4.style.display = 'flex';
});

close4.addEventListener('click', function () {
  popup4.style.display = 'none';
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
  var bg01 = document.getElementById('bg01');
  var bg02 = document.getElementById('bg02');
  var bg03 = document.getElementById('bg03');
  var bg04 = document.getElementById('bg04');
  var bg05 = document.getElementById('bg05');
  var bg06 = document.getElementById('bg06');
  var bg07 = document.getElementById('bg07');
  var bg08 = document.getElementById('bg08');
  var bg09 = document.getElementById('bg09');

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

  bg01.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(1);
  });

  bg02.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(2);
  });

  bg03.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(3);
  });

  bg04.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(4);
  });

  bg05.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(5);
  });

  bg06.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(6);
  });

  bg07.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(7);
  });

  bg08.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(8);
  });

  bg09.addEventListener('click', function () {
    $(fullBox1).css('visibility', 'visible');
    swiper1.slideTo(9);
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
  var bg10 = document.getElementById('bg10');
  var bg11 = document.getElementById('bg11');
  var bg12 = document.getElementById('bg12');
  var bg13 = document.getElementById('bg13');
  var bg14 = document.getElementById('bg14');

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

  bg10.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(1);
  });

  bg11.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(2);
  });

  bg12.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(3);
  });

  bg13.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(4);
  });

  bg14.addEventListener('click', function () {
    $(fullBox2).css('visibility', 'visible');
    swiper2.slideTo(5);
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
  var bg37 = document.getElementById('bg37');
  var bg38 = document.getElementById('bg38');
  var bg39 = document.getElementById('bg39');

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

  bg37.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(7);
  });

  bg38.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(8);
  });

  bg39.addEventListener('click', function () {
    $(fullBox3).css('visibility', 'visible');
    swiper3.slideTo(9);
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
  var bg44 = document.getElementById('bg44');
  var bg45 = document.getElementById('bg45');
  var bg46 = document.getElementById('bg46');
  var bg47 = document.getElementById('bg47');
  var bg48 = document.getElementById('bg48');
  var bg49 = document.getElementById('bg49');

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

  bg44.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(4);
  });

  bg45.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(5);
  });

  bg46.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(6);
  });

  bg47.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(7);
  });

  bg48.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(8);
  });

  bg49.addEventListener('click', function () {
    $(fullBox4).css('visibility', 'visible');
    swiper4.slideTo(9);
  });
});
