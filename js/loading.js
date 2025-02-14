let body = document.getElementById("body");
let loading = document.getElementById("loading");
let logo = document.getElementById("logo");
let headPhones = document.getElementById("headPhones");

sessionStorage.setItem("musicTime", 0);

setTimeout(() => {
  body.style.backgroundColor = "#71C6D4";
  loading.style.opacity = 0;
}, 800);
setTimeout(() => {
  logo.style.opacity = 1;
}, 2400);
setTimeout(() => {
  logo.style.opacity = 0;
}, 4000);
setTimeout(() => {
  headPhones.style.opacity = 1;
}, 5600);
setTimeout(() => {
  headPhones.style.opacity = 0;
}, 7200);
setTimeout(() => {
  window.location.href = "homepage.html";
}, 8600);
