let icon = document.querySelector('#icon')
let body = document.querySelector("body")
let navbar = document.getElementById("navbar")
var navbarMenu = document.getElementById("navbarMenu");

// for navbar part start

function toggleNavbar() {

  if (navbarMenu.classList.contains("active")) {
    icon.classList.replace("fa-times", "fa-bars");

  } else {
    icon.classList.replace("fa-bars", "fa-times");

  }
  navbarMenu.classList.toggle("active")
}


// for accordion part start
function toggleAccordion(index) {
  var accordionItems = document.getElementsByClassName("accordion-item");
  var accordionContent = accordionItems[index].getElementsByClassName("accordion-content")[0];

  if (accordionContent.classList.contains("rave")) {
    accordionContent.classList.remove("rave");

  } else {

    for (var i = 0; i < accordionItems.length; i++) {
      var content = accordionItems[i].getElementsByClassName("accordion-content")[0];
      if (content.classList.contains("rave")) {
        content.classList.remove("rave");
      }
    }
    accordionContent.classList.toggle("rave")

  }
}























// function toggleAccordion(index) {
//   var accordionItems = document.getElementsByClassName("accordion-item");
//   var accordionContent = accordionItems[index].getElementsByClassName("accordion-content")[0];

//   if (accordionContent.style.display === "block") {
//     accordionContent.style.display = "none";

//   } else {

//     for (var i = 0; i < accordionItems.length; i++) {
//       var content = accordionItems[i].getElementsByClassName("accordion-content")[0];
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       }
//     }
//     accordionContent.style.display = "block";
//   }
// }