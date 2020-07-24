// Function for Split-Page Effect

document.addEventListener("DOMContentLoaded", function () {
  let wrapper = document.getElementById("split-page");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;
  }

  wrapper.addEventListener("mousemove", function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "250px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
}

// Function for Easter Egg

function setDaysSinceRelease() {
  var date1 = new Date("4/29/2015");
  var date2 = new Date();
  var diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  $("#release-date").text(parseInt(diffDays));
}

$(document).ready(function () {
  setDaysSinceRelease();
});

// Function for Slider

function slider(e) {
  return document.querySelector(e);
}

var next = slider(".next");
var prev = slider(".prev");
var index = 0;

var randomText = [
  {
    title: "Biography",
    desc:
      "I am result-oriented, self-driven, <br> highly-motivated, fast learning person. <br> I'm always energetic and eager to learn new skills, and to further develop myself to become more productive and efficient in every aspect of my life. I'm able to handle multiple tasks on a daily basis, and I consider myself punctual and articulate.",
  },
  {
    title: "Passion",
    desc:
      " I'm passionate about writing code <br> and creating Websites from scratch! <br> I enjoy exploring my creativity through projects.. I'm constantly evolving in this profession and in finding new ways to write clever easter-eggs for people who visit my work. I love the process of researching new ways of writing code, and ideas and testing them out!",
  },
  {
    title: "TeamWork",
    desc:
      "In addition to this <br> I have the ability to adapt to any type of team environment. I am team and detail-orientated,  collaborative and great at get alongs with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.",
  },
];

slider(".content-title").innerHTML = randomText[0].title;
slider(".content-desc").innerHTML = randomText[0].desc;

next.addEventListener(
  "click",
  function () {
    if (index >= 0 && index <= 1) {
      toggleView();
      setTimeout(function () {
        slider(".content-title").innerHTML = randomText[index].title;
        slider(".content-desc").innerHTML = randomText[index].desc;
      }, 500);
      slider("main").classList.remove("view" + index + "--active");
      slider("main").classList.add("view" + (index + 1) + "--active");
      index++;
    }
  },
  false
);

prev.addEventListener(
  "click",
  function () {
    if (index > 0 && index <= 3) {
      toggleView();
      setTimeout(function () {
        slider(".content-title").innerHTML = randomText[index].title;
        slider(".content-desc").innerHTML = randomText[index].desc;
      }, 500);
      slider("main").classList.remove("view" + index + "--active");
      slider("main").classList.add("view" + (index - 1) + "--active");
      index--;
    }
  },
  false
);

function toggleView() {
  slider("main").classList.add("fade-out");
  setTimeout(function () {
    slider("main").classList.remove("fade-out");
  }, 500);
}
