let body = document.getElementById("body");
let img = document.getElementById("img");
let slowGIF, fastGIF;
let explainBackground = document.getElementById("explainBackground");
let explainText1 = document.getElementById("explainText1");
let explainText2 = document.getElementById("explainText2");
let explainEngText1 = document.getElementById("explainEngText1");
let explainEngText2 = document.getElementById("explainEngText2");
let transfer = document.getElementById("transfer");

document.getElementById('backgroundMusic').volume = 0.2
document.getElementById('backgroundMusic').play()

let selectedCharacter = Math.floor(Math.random() * 2) + 1
if (selectedCharacter == 1) {
  slowGIF = "../img/walk1.gif"
  fastGIF = "../img/run1.gif"
}
else if (selectedCharacter == 2) {
  slowGIF = "../img/walk2.gif"
  fastGIF = "../img/run2.gif"
}
img.src = slowGIF
localStorage.setItem('selectedCharacter', selectedCharacter)
if (window.screen.width <= 1000) {
  explainText2.innerHTML = "在接下來的互動中，<br />一同觀看這些都市角色忙亂的生活，<br />你隨時可以按下空白鍵來去緩和他們的腳步，<br />一起感受他們的空白時刻。"
}

//#region 背景
//背景速度
window.onload = function () {
  const scrollContainer = document.getElementById("scrollContainer");
  let scrollSpeed = 2;
  const interval = 20;

  function autoScroll() {
    scrollContainer.scrollLeft += scrollSpeed;

    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, interval);
};

//#region 動畫
setTimeout(() => {
  explainBackground.style.opacity = 1;
}, 300);
setTimeout(() => {
  explainText1.style.opacity = 1;
  explainEngText1.style.opacity = 1;
}, 900);
setTimeout(() => {
  explainText1.style.transition = "all 1.5s ease";
  explainEngText1.style.transition = "all 1.5s ease";
  explainText1.style.opacity = 0;
  explainEngText1.style.opacity = 0;
}, 2800);
setTimeout(() => {
  explainText1.style.display = "none";
  explainEngText1.style.display = "none";
  explainText2.style.display = "block";
  if (window.screen.width > 1000) {
    explainEngText2.style.display = "block";
  }
}, 4300);
setTimeout(() => {
  explainText2.style.transition = "all 0.9s ease";
  explainEngText2.style.transition = "all 0.9s ease";
  explainText2.style.opacity = 1;
  explainEngText2.style.opacity = 1;
}, 5200);
setTimeout(() => {
  transfer.style.display = "block";
}, 6100);
setTimeout(() => {
  transfer.style.opacity = 1;
}, 8100);
setTimeout(() => {
  window.location.href = "interact.html";
}, 8900);
