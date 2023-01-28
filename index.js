// var video = document.getElementById("myVideo");

// var btn = document.getElementById("myBtn");

// function myFunction() {
//     if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.innerHTML = "Play";
//     }
// }

// $(document).ready(function () {

//     $(".toggle-accordion").on("click", function () {
//         var accordionId = $(this).attr("accordion-id"),
//             numPanelOpen = $(accordionId + ' .collapse.in').length;

//         $(this).toggleClass("active");

//         if (numPanelOpen == 0) {
//             openAllPanels(accordionId);
//         } else {
//             closeAllPanels(accordionId);
//         }
//     })

//     openAllPanels = function (aId) {
//         console.log("setAllPanelOpen");
//         $(aId + ' .panel-collapse:not(".in")').collapse('show');
//     }
//     closeAllPanels = function (aId) {
//         console.log("setAllPanelclose");
//         $(aId + ' .panel-collapse.in').collapse('hide');
//     }

// });

AOS.init({
  duration: 1200,
  delay: 500,
});

VANTA.WAVES({
  el: ".domain_name",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#203472",
  shininess: 40.0,
  waveSpeed: 1.2,
});
