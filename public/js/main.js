//this makes pricing appear when the pricing button is clicked
$(".pricing").click(function() {
  $("#pricing").addClass("clicked");
});

// this selects only the gallery buttons and store them into a query
var galleryButtons = document.querySelectorAll(".gBtn");
var galleryCurrent = document.querySelectorAll(".galleryView");
// this initializes any function needed when visiting the webpage
init();
function init() {
  setUpGalleryButtons();
}
// this set up the buttons associated which each gallery for the web view
function setUpGalleryButtons() {
  for (var i = 0; i < galleryButtons.length; i++) {
    galleryButtons[i].addEventListener("click", function() {
      console.log(galleryButtons[1] === this);
      console.log(this.textContent);
      galleryButtons[0].classList.remove("selected");
      galleryButtons[1].classList.remove("selected");
      galleryButtons[2].classList.remove("selected");
      galleryButtons[3].classList.remove("selected");
      this.classList.add("selected");
    });
  }
}
// to display current viewed library
$(".gBtn1").click(function() {
  $(".galleryView1").addClass("currentView");
  $(".galleryView2, .galleryView3, .galleryView4").removeClass("currentView");
});
$(".gBtn2").click(function() {
  $(".galleryView2").addClass("currentView");
  $(".galleryView1, .galleryView3, .galleryView4").removeClass("currentView");
});
$(".gBtn3").click(function() {
  $(".galleryView3").addClass("currentView");
  $(".galleryView2, .galleryView1, .galleryView4").removeClass("currentView");
});
$(".gBtn4").click(function() {
  $(".galleryView4").addClass("currentView");
  $(".galleryView2, .galleryView3, .galleryView1").removeClass("currentView");
});
