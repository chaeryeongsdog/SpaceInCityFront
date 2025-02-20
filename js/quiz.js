let quizBackground = document.getElementById("quizBackground");
let quizText1 = document.getElementById("quizText1");
let quizText2 = document.getElementById("quizText2");
let quizText3 = document.getElementById("quizText3");
let quiz = document.getElementById("quiz");
let nameQuiz = document.getElementById("nameQuiz");
let toResultBtn = document.getElementById("toResultBtn");
let toQuizBtn = document.getElementById("toQuizBtn");
let toNameBtn = document.getElementById("toNameBtn");
let transfer = document.getElementById("transfer");
let end = document.getElementById("end");
let loading = document.getElementById("loading");

if (window.screen.width <= 1000) {
  quizText1.innerHTML =
    "在結束體驗角色的生活後，<br />你的生活是否也像他一樣很忙很累呢？<br />「 那你的空白鍵呢？ 」";
  quizText3.innerHTML = "一直為生活忙碌的你，此刻最想做什麼呢？";
}

setTimeout(() => {
  quizBackground.style.opacity = 1;
}, 20000);
setTimeout(() => {
  quizText1.style.display = "block";
  toNameBtn.style.display = "block";
}, 20000);
setTimeout(() => {
  quizText1.style.opacity = 1;
  toNameBtn.style.opacity = 0.8;
}, 20000);

function toName() {
  quizText1.style.opacity = 0;
  toNameBtn.style.opacity = 0;
  setTimeout(() => {
    toQuizBtn.style.display = "block";
    nameQuiz.style.display = "block";
    quizText2.style.display = "block";
  }, 760);
  setTimeout(() => {
    quizText2.style.opacity = 1;
    nameQuiz.style.opacity = 1;
    toQuizBtn.style.opacity = 0.8;
    toNameBtn.style.display = "none";
    quizText1.style.display = "none";
  }, 800);
}

function toQuiz() {
  let name = document.getElementById("nameQuiz").value;
  localStorage.setItem("name", name);

  quizText2.style.opacity = 0;
  nameQuiz.style.opacity = 0;
  toQuizBtn.style.opacity = 0;
  setTimeout(() => {
    toResultBtn.style.display = "block";
    quiz.style.display = "block";
    quizText3.style.display = "block";
  }, 760);
  setTimeout(() => {
    quizText3.style.opacity = 1;
    quiz.style.opacity = 1;
    toResultBtn.style.opacity = 0.8;
    quizText2.style.display = "none";
    nameQuiz.style.display = "none";
    toQuizBtn.style.display = "none";
  }, 800);
}

function toResult() {
  let answer = document.getElementById("quiz").value;
  console.log(JSON.stringify(answer));

  localStorage.setItem("answer", answer);

  fetch("https://spaceincityback.onrender.com/api/Messages/PostMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 指定請求內容是 JSON
    },
    body: JSON.stringify(answer),
  })
    .then((response) => response.json()) // 解析 JSON 響應
    .then((data) => {
      console.log("Updated:", data); // 顯示更新後的資料
    })
    .catch((error) => {
      console.error("Error:", error); // 顯示錯誤信息
    });

  end.style.zIndex = 100;
  end.style.transition = "all 0.8s ease";
  end.style.opacity = 1;

  setTimeout(() => {
    end.style.backgroundColor = "white";
    loading.style.color = "#3F3F3F";
  }, 1600);
  setTimeout(() => {
    loading.style.opacity = 0;
  }, 3200);
  setTimeout(() => {
    window.location.href = "result.html";
  }, 4800);
}
