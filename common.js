var headerMenu = document.getElementById("headerMenu");
var headerFancybox = document.getElementById("headerFancybox");
var headerClose = document.getElementById("headerClose");

headerMenu.addEventListener('click', function(){
  headerFancybox.style.display = 'flex';
})

headerClose.addEventListener('click', function(){
  headerFancybox.style.display = 'none';
})

const watcher = new IntersectionObserver(onEnterView)
const lazyImages = document.querySelectorAll('img.lazy')
for (var image of lazyImages) {
    watcher.observe(image) // 開始監視
}

function onEnterView(entries, observer) {
  for (var entry of entries) {
      if (entry.isIntersecting) {
          // 監視目標進入畫面
          const img = entry.target
          img.setAttribute('src', img.dataset.src) // 把值塞回 src
          img.removeAttribute('data-src')
          observer.unobserve(img) // 取消監視
      }
  }
}