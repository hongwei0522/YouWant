var headerMenu = document.getElementById("headerMenu");
var headerFancybox = document.getElementById("headerFancybox");
var headerClose = document.getElementById("headerClose");

headerMenu.addEventListener('click', function(){
  headerFancybox.style.display = 'flex';
})

headerClose.addEventListener('click', function(){
  headerFancybox.style.display = 'none';
})
