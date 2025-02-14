let firstBackground = document.getElementById("firstBackground");
let toExplain = document.getElementById("toExplain");
let spaceBtnArrow = document.getElementById("spaceBtnArrow");
let spaceWordBtn = document.getElementById("spaceWordBtn");
let spaceDesignBtn = document.getElementById("spaceDesignBtn");

document.getElementById("backgroundMusic").volume = 0.2;
window.addEventListener("load", () => {
  const savedTime = sessionStorage.getItem("musicTime");
  if (savedTime) {
    document.getElementById("backgroundMusic").currentTime =
      parseFloat(savedTime);
  }
  document.getElementById("backgroundMusic").play();
});

function updateTime() {
  sessionStorage.setItem(
    "musicTime",
    document.getElementById("backgroundMusic").currentTime
  );
}

firstBackground.style.opacity = 0;
setTimeout(() => {
  firstBackground.style.display = "none";
}, 800);

setInterval(() => {
  spaceBtnArrow.style.opacity = 0;
  setTimeout(() => {
    spaceBtnArrow.style.opacity = 1;
  }, 750);
}, 1500);

function handleSpacebarPress(event) {
  if (event.code === "Space") {
    toExplain.click();
  }
}
document.addEventListener("keydown", handleSpacebarPress);

spaceWordBtn.addEventListener("mouseover", () => {
  spaceWordBtn.src = "./img/space_word_btn_black_hover.png";
});
spaceWordBtn.addEventListener("mouseout", () => {
  spaceWordBtn.src = "./img/space_word_btn_black.png";
});

spaceDesignBtn.addEventListener("mouseover", () => {
  spaceDesignBtn.src = "./img/space_design_btn_black_hover.png";
});
spaceDesignBtn.addEventListener("mouseout", () => {
  spaceDesignBtn.src = "./img/space_design_btn_black.png";
});
