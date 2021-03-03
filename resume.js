// var fisrstScroll = document.getElementById("first");
// var secondScroll = document.getElementById("second");
// var thirdScroll = document.getElementById("third");
// var fourScroll = document.getElementById("four");
// var fiveScroll = document.getElementById("five");
// var sixScroll = document.getElementById("six");
// fisrstScroll.addEventListener("click", function () {
//   var targetPos = 400;
//   var currentPos = 0;
//   setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval();
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 50);
// });
// secondScroll.addEventListener("click", function (event) {
//   event.preventDefault();

//   var targetPos = 1000;
//   var currentPos = 0;
//   setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval();
//       return;
//     }
//     currentPos += 50;
//     window.scrollBy(0, 50);
//   }, 50);
// });
// thirdScroll.addEventListener("click", function () {
//   var targetPos = 1500;
//   var currentPos = 0;
//   setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval();
//       return;
//     }
//     currentPos += 100;
//     window.scrollBy(0, 100);
//   }, 50);
// });

// fiveScroll.addEventListener("click", function () {
//   var targetPos = 3300;
//   var currentPos = 0;
//   setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval();
//       return;
//     }
//     currentPos += 100;
//     window.scrollBy(0, 100);
//   }, 50);
// });
// sixScroll.addEventListener("click", function () {
//   var targetPos = 5000;
//   var currentPos = 0;
//   setInterval(function () {
//     if (currentPos >= targetPos) {
//       clearInterval();
//       return;
//     }
//     currentPos += 200;
//     window.scrollBy(0, 200);
//   }, 50);
// });

var target = document.querySelectorAll(".list-1 a");
var interval;
for (var i = 0; i < target.length; i++) {
  target[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    // console.log(targetSection);
    // var interval = setInterval(() => {
    //   var setDisplayCoordinates = targetSection.getBoundingClientRect();
    //   if (setDisplayCoordinates.top <= 0) {
    //     clearInterval(interval);
    //     return;
    //   }
    //   window.scrollBy(0, 50);
    // }, 10);
    interval = setInterval(function () {
      scrollVertical(targetSection);
    }, 10);
    // interval = setInterval( scrollVertical , 10 , targetSection);
  });
}

function scrollVertical(targetSection) {
  var setDisplayCoordinates = targetSection.getBoundingClientRect();
  if (setDisplayCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
// filling skills bars smoothly !!!

// var skillBar = document.querySelectorAll(".progressbar > div ");
// var skillDiv = document.getElementById("skillFlex");
// var animation = false;
// window.addEventListener("scroll", checkScroll);

// function checkScroll() {
//   var displayCoordinates = skillDiv.getBoundingClientRect();
//   if (!animation && displayCoordinates.top < window.innerHeight) {
//     animation = true;
//     fillbars();
//   } else if (displayCoordinates.top > window.innerHeight) {
//     animation = false;
//     initialise();
//   }
// }
// function initialise() {
//   for (let bar of skillBar) {
//     bar.style.width = 0 + "%";
//   }
// }
// initialise();

// function fillbars() {
//   for (let bar of skillBar) {
//     let targetWidth = bar.getAttribute("data-bar-value");
//     let currentWidth = 0;
//     let fetch = setInterval(function () {
//       if (currentWidth >= targetWidth) {
//         // clearInterval(fetch);
//         clearInterval(fetch);
//         return;
//       }
//       currentWidth++;
//       bar.style.width = currentWidth + "%";
//     }, 3);
//   }
// }

// function initialiseBar(bar) {
//   bar.setAttribute("data-visited", false);
//   bar.style.width = 0 + "%";
// }

// for (var bar of progressBars) {
//   initialiseBar(bar);
// }

var skillBar = document.querySelectorAll(".progressbar > div ");
window.addEventListener("scroll", checkScroll);

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (var bar of skillBar) {
  initialiseBar(bar);
}

function fillbar(bar) {
  var currentwidth = 0;
  var targetwidth = bar.getAttribute("data-bar-value");
  var interval = setInterval(function () {
    if (currentwidth >= targetwidth) {
      clearInterval(interval);
      return;
    }
    currentwidth++;
    bar.style.width = currentwidth + "%";
  }, 10);
}

function checkScroll() {
  for (let bar of skillBar) {
    var displayCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      displayCoordinates.top <= window.innerHeight - displayCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillbar(bar);
    } else if (displayCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}
