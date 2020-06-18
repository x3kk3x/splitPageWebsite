/* Function for Days Since Release Visual */

function setDaysSinceRelease() {
  var date1 = new Date("4/29/2015");
  var date2 = new Date();
  var diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  $("#release-date").text(parseInt(diffDays));
}

$(document).ready(function () {
  setDaysSinceRelease();
});

/* Function for Split-Page Effect */

document.addEventListener("DOMContentLoaded", function () {
  let wrapper = document.getElementById("wrapper");
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

/* Function for Navigation */

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});

/* Function for Image Slider*/

function setDaysSinceRelease() {
  var date1 = new Date("4/29/2015");
  var date2 = new Date();
  var diffDays = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  $("#release-date").text(parseInt(diffDays));
}

$(document).ready(function () {
  setDaysSinceRelease();

  $(".next").click(function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").fadeOut(200).css("z-index", "-10");
      nextImg.addClass("active").delay(200).fadeIn(200).css("z-index", "10");
    } else {
      currentImg.removeClass("active").fadeOut(200).css("z-index", "-10");
      $(".first-img")
        .addClass("active")
        .delay(200)
        .fadeIn(200)
        .css("z-index", "10");
    }
  });

  $(".prev").click(function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").fadeOut(200).css("z-index", "-10");
      prevImg.addClass("active").delay(200).fadeIn(200).css("z-index", "10");
    } else {
      currentImg.removeClass("active").fadeOut(200).css("z-index", "-10");
      $(".last-img")
        .addClass("active")
        .delay(200)
        .fadeIn(200)
        .css("z-index", "10");
    }
  });
});

/* Function for Read More Button */

var i = 0;
function read() {
  if (!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";
    i = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Read More";
    i = 0;
  }
}
