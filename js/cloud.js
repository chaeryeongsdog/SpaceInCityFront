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

let allanswer = [];
if (document.body.clientWidth <= 1000) {
  document.getElementById("notificationText").innerHTML =
    "請稍後，我們正在搜集大家的空白時刻！<br /><br />Please wait, we are collecting everyone's blank moments!";
}

async function fetchData() {
  allanswer = [];
  try {
    const response = await fetch(
      "https://spaceincityback.onrender.com/api/Messages/GetMessage",
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    document.getElementById("notification").style.opacity = 0;
    document.getElementById("notificationText").style.opacity = 0;

    const data = await response.json(); // 解析 JSON 響應

    console.log("Data:", data); // 查看成功抓到的資料

    if (Array.isArray(data)) {
      // 確保資料是陣列
      for (let i = 0; i < data.length; i++) {
        allanswer.push([data[i].content, data[i].count]); // 將資料推入 test1
      }
    }
    let fontSizes = [];
    if (document.body.clientWidth > 1000) {
      fontSizes = [31, 47, 84, 125, 167];
    } else fontSizes = [9, 13, 23, 34, 45];
    const opacityLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
    const maxWeight = Math.max(...allanswer.map((word) => word[1]));
    const minWeight = Math.min(...allanswer.map((word) => word[1]));

    const adjustedWords = allanswer.map(([word, weight]) => {
      let fontSizeIndex = Math.floor(
        ((weight - minWeight) / (maxWeight - minWeight)) *
          (fontSizes.length - 1)
      );
      let fontSize = fontSizes[fontSizeIndex];
      return [word, fontSize]; // 返回單詞和對應的字體大小
    });
    console.log(adjustedWords);

    WordCloud(document.getElementById("wordcloud"), {
      list: adjustedWords,
      gridSize: 40,
      weightFactor: 1,
      fontFamily: "Noto Sans TC",
      fontWeight: 300,
      color: function (word, weight) {
        const maxWeight = Math.max(...adjustedWords.map((word) => word[1]));
        const minWeight = Math.min(...adjustedWords.map((word) => word[1]));
        let opacityIndex = Math.floor(
          ((weight - minWeight) / (maxWeight - minWeight)) *
            (opacityLevels.length - 1)
        );
        let opacity = opacityLevels[opacityIndex];
        return `rgba(0, 0, 0, ${opacity})`;
      },
      backgroundColor: "none",
      shape: "square",
      rotateRatio: 0.8,
      minRotation: -15 * (Math.PI / 180),
      maxRotation: 15 * (Math.PI / 180),
    });

    setTimeout(() => {
      document.getElementById("wordcloudContainer").style.opacity = 1;
    }, 500);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

setInterval(() => {
  fetchData();
}, 10000);
