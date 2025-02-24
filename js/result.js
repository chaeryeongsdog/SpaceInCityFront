let firstBackground = document.getElementById("firstBackground");
let spaceWordBtn = document.getElementById("spaceWordBtn");
let spaceDesignBtn = document.getElementById("spaceDesignBtn");

document.getElementById("backgroundMusic").volume = 0.2;
document.getElementById("backgroundMusic").play();

setTimeout(() => {
  firstBackground.style.opacity = 0;
}, 300);
setTimeout(() => {
  firstBackground.style.display = "none";
}, 1100);

let name = localStorage.getItem("name");
let answer = localStorage.getItem("answer");
let selectedCharacter = localStorage.getItem("selectedCharacter");
let nameText1 = document.getElementById("nameText1");
let answerText1 = document.getElementById("answerText1");
let nameText2 = document.getElementById("nameText2");
let answerText2 = document.getElementById("answerText2");

nameText1.innerText = name;
answerText1.innerText = "(" + answer + ")";
nameText2.innerText = name;
answerText2.innerText = "(" + answer + ")";

let toJPG = document.getElementById("toJPG");
let card = document.getElementById("card");
let cardBack = document.getElementById("cardBack");
// let randomCard = Math.floor(Math.random() * 5) + 1;
let randomCard = 1;

if (randomCard == 1) {
  toJPG.style.backgroundImage = "url('../img/NEW SPACE CARD-01.png')";
  card.style.backgroundImage = "url('../img/NEW SPACE CARD-01.png')";
  cardBack.src = "../img/card_back01.png";
} else if (randomCard == 2) {
  toJPG.style.backgroundImage = "url('../img/NEW SPACE CARD-02.png')";
  card.style.backgroundImage = "url('../img/NEW SPACE CARD-02.png')";
  cardBack.src = "../img/card_back02.png";
} else if (randomCard == 3) {
  toJPG.style.backgroundImage = "url('../img/NEW SPACE CARD-03.png')";
  card.style.backgroundImage = "url('../img/NEW SPACE CARD-03.png')";
  cardBack.src = "../img/card_back03.png";
} else if (randomCard == 4) {
  toJPG.style.backgroundImage = "url('../img/NEW SPACE CARD-04.png')";
  card.style.backgroundImage = "url('../img/NEW SPACE CARD-04.png')";
  cardBack.src = "../img/card_back04.png";
} else if (randomCard == 5) {
  toJPG.style.backgroundImage = "url('../img/NEW SPACE CARD-05.png')";
  card.style.backgroundImage = "url('../img/NEW SPACE CARD-05.png')";
  cardBack.src = "../img/card_back05.png";
}

function updateTime() {
  sessionStorage.setItem(
    "musicTime",
    document.getElementById("backgroundMusic").currentTime
  );
}

document.addEventListener("DOMContentLoaded", (event) => {
  let triangle1 = document.getElementById("triangle1");
  let triangle2 = document.getElementById("triangle2");

  spaceWordBtn.addEventListener("mouseenter", function () {
    triangle1.src = "./img/triangle.gif";
  });
  spaceDesignBtn.addEventListener("mouseenter", function () {
    triangle2.src = "./img/triangle.gif";
  });

  spaceWordBtn.addEventListener("mouseleave", function () {
    triangle1.src = "./img/triangle.png";
  });
  spaceDesignBtn.addEventListener("mouseleave", function () {
    triangle2.src = "./img/triangle.png";
  });
});

function downloadJPG() {
  html2canvas(toJPG).then(function (canvas) {
    // 將畫布轉換為圖片並下載
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpg");
    link.download = "card.jpg";
    link.click();
  });
}

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
