let body = document.getElementById("body");
let img = document.getElementById("img");
let slowGIF, fastGIF;
let noiseText1 = document.getElementById("noiseText1");
let noiseText2 = document.getElementById("noiseText2");
let noiseText3 = document.getElementById("noiseText3");
let relaxText = document.getElementById("relaxText");

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
  "./audio/relax2.mp3",
  "./audio/relax3.mp3",
  "./audio/relax4.mp3",
];
let noiseAry = [
  "./audio/noise1.MP3",
  "./audio/noise2.MP3",
  "./audio/noise3.MP3",
  "./audio/noise4.MP3",
  "./audio/noise5.MP3",
];
audioNoise.src = noiseAry[Math.floor(Math.random() * noiseAry.length)];
console.log(audioNoise);
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
          noiseText2.style.display = "none";
          noiseText3.style.display = "none";
          relaxText.style.display = "block";
        }, 400);

        setTimeout(() => {
          img.src = fastGIF;
          scrollSpeed = 14;
          togglePlay();
          scrollContainerOverlay.style.transition = "all 3s ease";
          scrollContainerOverlayFront.style.transition = "all 3s ease";
          noiseText1.style.display = "block";
          noiseText2.style.display = "block";
          noiseText3.style.display = "block";
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

  if (document.body.clientWidth < 1000) {
    window.addEventListener("click", function (event) {
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
          noiseText2.style.display = "none";
          noiseText3.style.display = "none";
          relaxText.style.display = "block";
        }, 400);

        setTimeout(() => {
          img.src = fastGIF;
          scrollSpeed = 14;
          togglePlay();
          scrollContainerOverlay.style.transition = "all 3s ease";
          scrollContainerOverlayFront.style.transition = "all 3s ease";
          noiseText1.style.display = "block";
          noiseText2.style.display = "block";
          noiseText3.style.display = "block";
          relaxText.style.display = "none";
          setTimeout(() => {
            scrollContainerOverlay.style.opacity = 1;
            scrollContainerOverlayFront.style.opacity = 1;
          }, 1);
        }, 4000);
      }
      event.preventDefault();
    });
  }
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

noiseText1.src = selectedNoiseAry[0];
noiseText2.src = selectedNoiseAry[1];
noiseText3.src = selectedNoiseAry[2];
function cycleData() {
  let i = 0;
  setInterval(() => {
    if (i % 3 == 0) {
      noiseText1.src = selectedNoiseAry[i % selectedNoiseAry.length];
    } else if (i % 3 == 1) {
      noiseText2.src = selectedNoiseAry[i % selectedNoiseAry.length];
    } else {
      noiseText3.src = selectedNoiseAry[i % selectedNoiseAry.length];
    }
    i++;
  }, 2000);
}

cycleData();

let index = 0;
relaxText.src = selectedRelaxAry[index];
index++;
setTimeout(() => {
  setInterval(() => {
    if (index < selectedRelaxAry.length) {
      relaxText.src = selectedRelaxAry[index];
      index++;
    } else {
      index = 0;
      relaxText.src = selectedRelaxAry[index];
      index++;
    }
  }, 4000);
}, 2000);

let opacity = 0;
setInterval(() => {
  opacity = opacity === 0 ? 1 : 0;
  relaxText.style.opacity = opacity;
}, 2000);
setTimeout(() => {
  noiseText1.style.opacity = 1;
}, 4000);
setTimeout(() => {
  noiseText2.style.opacity = 1;
}, 6000);
setTimeout(() => {
  noiseText3.style.opacity = 1;
}, 8000);
setTimeout(() => {
  noiseText1.style.opacity = 0;
  console.log(123);
}, 7000);
setTimeout(() => {
  noiseText2.style.opacity = 0;
}, 9000);
setTimeout(() => {
  setInterval(() => {
    noiseText1.style.opacity = 1;
    setTimeout(() => {
      noiseText3.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
      noiseText2.style.opacity = 1;
    }, 2000);
    setTimeout(() => {
      noiseText1.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      noiseText3.style.opacity = 1;
    }, 4000);
    setTimeout(() => {
      noiseText2.style.opacity = 0;
    }, 5000);
  }, 6000);
}, 4000);

//#region 35秒後進入過度頁
// setTimeout(() => {
//   transfer.style.display = "block";
// }, 35300);
// setTimeout(() => {
//   transfer.style.opacity = 1;
// }, 36100);
// setTimeout(() => {
//   window.location.href = "quiz.html";
// }, 36900);
