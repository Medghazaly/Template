"use strict";

// CountDown Timer
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.trunc((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.trunc((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Animate Width On Scrolling

// Skill Section
let skill = document.getElementById("skills");
let skillSpans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", (el) => {
  if (window.scrollY > skill.offsetTop) {
    skillSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Stats Section
const stats = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
