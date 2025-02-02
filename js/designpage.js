var container = document.querySelector(".container");
var move = 0;
var count = 0;
var scrollDirection = 'right';  // 控制滾動方向，'right' 或 'left'
container.style.marginLeft = move;

document.getElementById('backgroundMusic').volume = 0.2
document.getElementById('backgroundMusic').play()

// 滑鼠滾輪事件
function mouse_wheel(e) {
  e = e || window.event;

  var totalWidth = 5760;

  // 滾動向下
  if (e.wheelDelta <= 0 || e.detail > 0) {
    if (move <= -(totalWidth - window.innerWidth - 240)) {  // 防止滾動超過最右邊界
      return;
    }
    move = move - 240;  // 向左移動
    container.style.marginLeft = move + "px";
    count++;
  } else {  // 滾動向上
    count--;
    if (count < 0) { count = 0 }
    if (move >= -240) { return }  // 如果已經是最左邊，則不再滾動
    move = move + 240;  // 向右移動
    container.style.marginLeft = move + "px";
  }
}

// 自動滾動的設置
var autoScrollInterval = setInterval(function() {
  var totalWidth = 5760;  // 計算網頁總寬度

  // 根據滾動方向選擇滾動
  if (scrollDirection === 'right') {
    if (move <= -(totalWidth - window.innerWidth)) {  // 如果已經滾動到最右邊，開始往左滾動
      scrollDirection = 'left';
    } else {
      move = move - 1;  // 向左滾動
    }
  } else if (scrollDirection === 'left') {
    if (move >= 0) {  // 如果已經滾動到最左邊，開始往右滾動
      scrollDirection = 'right';
    } else {
      move = move + 1;  // 向右滾動
    }
  }

  // 更新容器位置
  container.style.marginLeft = move + "px";

}, 10);  // 每 50 毫秒自動滾動一次

// 註冊事件監聽器
if ("onmousewheel" in window) {
  window.onmousewheel = mouse_wheel;
} else if ("addEventListener" in window) {
  window.addEventListener("mousewheel", mouse_wheel, false); // 支持mousewheel事件的瀏覽器
  window.addEventListener("DOMMouseScroll", mouse_wheel, false); // 支持DOMMouseScroll的瀏覽器
}

document.querySelectorAll('.image-set').forEach(set => {
  set.addEventListener('mousemove', function(e) {
      const hoverImage = document.getElementById('hover-image');
      hoverImage.src = this.getAttribute('data-hover-src');
      hoverImage.style.display = 'block';
      hoverImage.style.left = `${e.pageX + 10}px`; // 調整圖片出現的位置
      hoverImage.style.top = `${e.pageY + 10}px`;  // 調整圖片出現的位置
  });

  set.addEventListener('mouseleave', function() {
      const hoverImage = document.getElementById('hover-image');
      hoverImage.style.display = 'none';
  });
});
