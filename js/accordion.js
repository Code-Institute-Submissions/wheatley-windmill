let section = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let tour = this.nextElementSibling;
    if (tour.style.maxHeight) {
      tour.style.maxHeight = null;
    } 
    else {
      tour.style.maxHeight = tour.scrollHeight + "px";
    } 
  });
}