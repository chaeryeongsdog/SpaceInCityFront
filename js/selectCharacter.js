let transfer = document.getElementById("transfer");

function toExplain() {
  if (document.querySelector('input[name="character"]:checked') === null) {
    Swal.fire({
      icon: "warning",
      title: "請選擇角色",
      text: "你需要選擇一個角色才可進入下一頁！",
      confirmButtonColor: "#d5ad8a",
      confirmButtonText: "<h2>OK</h2>",
    });
    return;
  }
  const selectedCharacter = document.querySelector(
    'input[name="character"]:checked'
  ).value;
  let name = document.getElementById("name").value;
  if (name === "") {
    Swal.fire({
      icon: "warning",
      title: "請填入名字",
      text: "你需要將名字填入欄位中才可進入下一頁！",
      confirmButtonColor: "#d5ad8a",
      confirmButtonText: "<h2>OK</h2>",
    });
    return;
  }

  localStorage.setItem("selectedCharacter", selectedCharacter);
  localStorage.setItem("name", name);

  transfer.style.display = "block";
  setTimeout(() => {
    transfer.style.opacity = 1;
  }, 1);
  setTimeout(() => {
    window.location.href = "explainpage.html";
  }, 801);
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
