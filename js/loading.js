let body = document.getElementById("body");
let loading = document.getElementById("loading");
let logo = document.getElementById("logo");
let headPhones = document.getElementById("headPhones");

sessionStorage.setItem("musicTime", 0);

setTimeout(() => {
  logo.style.opacity = 1;
}, 1600);
setTimeout(() => {
  logo.style.opacity = 0;
}, 3200);
setTimeout(() => {
  headPhones.style.opacity = 1;
}, 4800);
setTimeout(() => {
  headPhones.style.opacity = 0;
}, 6400);
setTimeout(() => {
  window.location.href = "homepage.html";
}, 7800);
