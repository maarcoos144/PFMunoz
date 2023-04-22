let manualSlideIndex = 1;
showSlides(manualSlideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(manualSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(manualSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {manualSlideIndex = 1}
  if (n < 1) {manualSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[manualSlideIndex-1].style.display = "block";
  dots[manualSlideIndex-1].className += " active";
}