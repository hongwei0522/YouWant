(function () {
  // Header menu (某些頁面若缺少對應 DOM，避免直接報錯導致整頁 JS 都不跑)
  var headerMenu = document.getElementById('headerMenu');
  var headerFancybox = document.getElementById('headerFancybox');
  var headerClose = document.getElementById('headerClose');

  if (headerMenu && headerFancybox) {
    headerMenu.addEventListener('click', function () {
      headerFancybox.style.display = 'flex';
    });
  }

  if (headerClose && headerFancybox) {
    headerClose.addEventListener('click', function () {
      headerFancybox.style.display = 'none';
    });
  }

  // Lazy-load images (IntersectionObserver 在部分舊瀏覽器/內建瀏覽器可能不存在)
  var lazyImages = document.querySelectorAll('img.lazy');

  function loadImg(img) {
    if (!img) return;
    var src = img.getAttribute('data-src');
    if (!src) return;
    img.setAttribute('src', src);
    img.removeAttribute('data-src');
  }

  if ('IntersectionObserver' in window) {
    var watcher = new IntersectionObserver(function onEnterView(entries, observer) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
          loadImg(entry.target);
          observer.unobserve(entry.target);
        }
      }
    });

    for (var j = 0; j < lazyImages.length; j++) {
      watcher.observe(lazyImages[j]); // 開始監視
    }
  } else {
    // Fallback: 直接載入（確保不會因為 API 不支援而整頁互動失效）
    for (var k = 0; k < lazyImages.length; k++) {
      loadImg(lazyImages[k]);
    }
  }
})();
