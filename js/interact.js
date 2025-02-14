let body = document.getElementById("body");
let img = document.getElementById("img");
let slowGIF, fastGIF;
let noiseText1 = document.getElementById("noiseText1");
let relaxText = document.getElementById("relaxText");
let transfer = document.getElementById("transfer");

//#region 轉場
setTimeout(() => {
  transfer.style.opacity = 0;
}, 300);
setTimeout(() => {
  transfer.style.display = "none";
  transfer.style.backgroundColor = "black";
}, 1100);

let selectedCharacter = localStorage.getItem("selectedCharacter");
if (selectedCharacter == 1) {
  slowGIF = "../img/walk1.gif";
  fastGIF = "../img/run1.gif";
} else if (selectedCharacter == 2) {
  slowGIF = "../img/walk2.gif";
  fastGIF = "../img/run2.gif";
}
img.src = fastGIF;

//#region 音頻
let audioNoise = document.getElementById("audioNoise");
let audioRelax = document.getElementById("audioRelax");
let isAudioNoisePlaying = true;

let relaxAry = [
  "./audio/relax1.mp3",
  "./audio/relax2.mp3",
  "./audio/relax4.mp3",
  "./audio/relax5.mp3",
];
let noiseAry = [
  "./audio/noise1.MP3",
  "./audio/noise2.MP3",
  "./audio/noise3.MP3",
  "./audio/noise4.MP3",
  "./audio/noise5.MP3",
];
audioNoise.src = noiseAry[Math.floor(Math.random() * noiseAry.length)];
audioNoise.volume = 0.4;
audioRelax.volume = 1;
audioNoise.play();

// 播放/暫停切換函數
function togglePlay() {
  if (isAudioNoisePlaying) {
    audioNoise.pause();
    audioRelax.src = relaxAry[Math.floor(Math.random() * noiseAry.length)];
    console.log(audioRelax.src);
    audioRelax.play();
  } else {
    audioRelax.pause();
    audioNoise.src = noiseAry[Math.floor(Math.random() * noiseAry.length)];
    audioNoise.play();
  }
  isAudioNoisePlaying = !isAudioNoisePlaying;
}

//#region 互動
window.onload = function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const scrollContainerOverlay = document.getElementById(
    "scrollContainerOverlay"
  );
  const scrollContainerFront = document.getElementById("scrollContainerFront");
  const scrollContainerOverlayFront = document.getElementById(
    "scrollContainerOverlayFront"
  );
  let scrollSpeed = 14;
  const interval = 20;

  function autoScroll() {
    scrollContainer.scrollLeft += scrollSpeed;
    scrollContainerOverlay.scrollLeft += scrollSpeed;
    scrollContainerFront.scrollLeft += scrollSpeed;
    scrollContainerOverlayFront.scrollLeft += scrollSpeed;
  }
  setInterval(autoScroll, interval);

  window.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      if (scrollSpeed != 2) {
        scrollSpeed = 2;
        body.style.transition = "all 0.8s ease";
        body.style.filter = "blur(20px)";
        scrollContainerOverlay.style.transition = "all 0.2s ease";
        scrollContainerOverlayFront.style.transition = "all 0.2s ease";
        togglePlay();
        setTimeout(() => {
          img.src = slowGIF;
        }, 300);
        setTimeout(() => {
          scrollContainerOverlay.style.opacity = 0;
          scrollContainerOverlayFront.style.opacity = 0;
          body.style.transition = "all 0.2s ease";
          body.style.filter = "";
          noiseText1.style.display = "none";
          relaxText.style.display = "block";
        }, 400);

        setTimeout(() => {
          img.src = fastGIF;
          scrollSpeed = 14;
          togglePlay();
          scrollContainerOverlay.style.transition = "all 3s ease";
          scrollContainerOverlayFront.style.transition = "all 3s ease";
          noiseText1.style.display = "block";
          relaxText.style.display = "none";
          setTimeout(() => {
            scrollContainerOverlay.style.opacity = 1;
            scrollContainerOverlayFront.style.opacity = 1;
          }, 1);
        }, 4000);
      }
      event.preventDefault();
    }
  });
};

//#region 心靈小語
let noiseTextAry1 = [
  "../img/noise_text/1.gif",
  "../img/noise_text/2.gif",
  "../img/noise_text/3.gif",
  "../img/noise_text/4.gif",
  "../img/noise_text/5.gif",
  "../img/noise_text/6.gif",
  "../img/noise_text/7.gif",
  "../img/noise_text/8.gif",
  "../img/noise_text/9.gif",
  "../img/noise_text/10.gif",
];
let noiseTextAry2 = [
  "../img/noise_text/11.gif",
  "../img/noise_text/12.gif",
  "../img/noise_text/13.gif",
  "../img/noise_text/14.gif",
  "../img/noise_text/15.gif",
  "../img/noise_text/16.gif",
  "../img/noise_text/17.gif",
  "../img/noise_text/18.gif",
  "../img/noise_text/19.gif",
  "../img/noise_text/20.gif",
];
let relaxTextAry1 = [
  "../img/relax_text/1.png",
  "../img/relax_text/2.png",
  "../img/relax_text/3.png",
  "../img/relax_text/4.png",
  "../img/relax_text/5.png",
  "../img/relax_text/6.png",
  "../img/relax_text/7.png",
  "../img/relax_text/8.png",
  "../img/relax_text/9.png",
  "../img/relax_text/10.png",
];
let relaxTextAry2 = [
  "../img/relax_text/1.png",
  "../img/relax_text/2.png",
  "../img/relax_text/3.png",
  "../img/relax_text/4.png",
  "../img/relax_text/5.png",
  "../img/relax_text/6.png",
  "../img/relax_text/7.png",
  "../img/relax_text/8.png",
  "../img/relax_text/9.png",
  "../img/relax_text/10.png",
];

let selectedRelaxAry = [],
  selectedNoiseAry = [];
if (selectedCharacter == 1) {
  selectedRelaxAry = relaxTextAry1;
  selectedNoiseAry = noiseTextAry1;
} else if (selectedCharacter == 2) {
  selectedRelaxAry = relaxTextAry2;
  selectedNoiseAry = noiseTextAry2;
}

let index = 0;
noiseText1.src = selectedNoiseAry[index];
relaxText.src = selectedRelaxAry[index];
index++;

setTimeout(() => {
  setInterval(() => {
    if (index < selectedNoiseAry.length) {
      noiseText1.src = selectedNoiseAry[index];
      relaxText.src = selectedRelaxAry[index];
      index++;
    } else {
      index = 0;
      noiseText1.src = selectedNoiseAry[index];
      relaxText.src = selectedRelaxAry[index];
      index++;
    }
  }, 4000);
}, 2000);

let opacity = 0;
setInterval(() => {
  opacity = opacity === 0 ? 1 : 0;
  noiseText1.style.opacity = opacity;
  relaxText.style.opacity = opacity;
}, 2000);

//#region 35秒後進入過度頁
setTimeout(() => {
  transfer.style.display = "block";
}, 35300);
setTimeout(() => {
  transfer.style.opacity = 1;
}, 36100);
setTimeout(() => {
  window.location.href = "quiz.html";
}, 36900);
